let cart3D = [];
let activeCartId = null;
let currentMesh = null;

const viewerContainer = document.getElementById('viewer-container');
const placeholder = document.getElementById('placeholder');
const loading = document.getElementById('loading');
const fileInput = document.getElementById('file-input');
const materialSelect = document.getElementById('material');
const resetViewerBtn = document.getElementById('reset-viewer-btn');
const btnZalo3D = document.getElementById('btn-zalo-3d');

// Khởi tạo không gian Three.js chuyên nghiệp
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, viewerContainer.clientWidth / viewerContainer.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(viewerContainer.clientWidth, viewerContainer.clientHeight);
viewerContainer.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);
scene.environment = pmremGenerator.fromScene(new THREE.RoomEnvironment(), 0.04).texture;
scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Thuật toán đo thể tích khối lưới chính xác
function calculateVolume(geometry) {
    if(!geometry.attributes.position) return 0;
    let pos = geometry.attributes.position, sum = 0;
    let p1 = new THREE.Vector3(), p2 = new THREE.Vector3(), p3 = new THREE.Vector3();
    for (let i = 0; i < pos.count / 3; i++) {
        p1.fromBufferAttribute(pos, i * 3 + 0);
        p2.fromBufferAttribute(pos, i * 3 + 1);
        p3.fromBufferAttribute(pos, i * 3 + 2);
        sum += p1.dot(p2.clone().cross(p3)) / 6.0;
    }
    return Math.abs(sum); // Đơn vị: mm3
}

function updatePricing3D() {
    if (cart3D.length === 0) return;
    const totalVol = cart3D.reduce((sum, item) => sum + item.volume, 0);
    const opt = materialSelect.options[materialSelect.selectedIndex];
    const density = parseFloat(opt.getAttribute('data-density')); // g/cm3
    const basePrice = parseInt(opt.value);

    // Tính toán khối lượng dựa trên độ đặc in chuẩn (giả định infill 20% cho thành mỏng kỹ thuật)
    const weight = totalVol * density * 0.4; 
    document.getElementById('weight-display').innerHTML = `${weight.toFixed(1)} <span class="text-xs font-sans text-slate-500">g</span>`;
    
    let finalPrice = Math.round(weight * basePrice);
    if (finalPrice < 20000) finalPrice = 20000; // Giá in tối thiểu bảo vệ máy
    document.getElementById('price-display').innerText = `${finalPrice.toLocaleString('vi-VN')} đ`;

    document.getElementById('customer-info').classList.remove('hidden');
    btnZalo3D.classList.remove('hidden');

    btnZalo3D.onclick = () => {
        const name = document.getElementById('cust-name').value || "Khách quen";
        const fileNames = cart3D.map(i => i.name).join(', ');
        const message = `[ĐƠN IN RIÊNG GIAHAOONE]\nChào Hào, mình muốn đặt in lại cụm file tự thiết kế:\n- Danh sách file: ${fileNames}\n- Vật liệu yêu cầu: ${opt.text}\n- Khối lượng ước tính: ${weight.toFixed(1)}g\n- Dự toán: ${finalPrice.toLocaleString('vi-VN')}đ.`;
        window.open(`https://zalo.me/0704141237?text=${encodeURIComponent(message)}`, '_blank');
    };
}

// Xử lý nạp file (Hỗ trợ kéo thả & chọn nhiều file cùng lúc)
fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    
    loading.classList.remove('hidden');
    let loaded = 0;

    files.forEach(file => {
        if (!file.name.toLowerCase().endsWith('.stl')) return;
        const reader = new FileReader();
        reader.onload = function(evt) {
            const loader = new THREE.STLLoader();
            const geometry = loader.parse(evt.target.result);
            const vol = calculateVolume(geometry) / 1000; // Đổi sang cm3
            
            geometry.computeBoundingBox();
            const box = geometry.boundingBox;
            const dims = {
                x: Math.abs(box.max.x - box.min.x).toFixed(0),
                y: Math.abs(box.max.y - box.min.y).toFixed(0),
                z: Math.abs(box.max.z - box.min.z).toFixed(0)
            };

            cart3D.push({ id: Date.now() + Math.random(), name: file.name, volume: vol, geometry: geometry, dims: dims });
            loaded++;
            
            if (loaded === files.length) {
                renderCart();
                previewItem(cart3D[cart3D.length - 1].id);
                loading.classList.add('hidden');
                placeholder.classList.add('opacity-0', 'pointer-events-none');
                resetViewerBtn.classList.remove('hidden');
            }
        };
        reader.readAsArrayBuffer(file);
    });
});

function renderCart() {
    const list = document.getElementById('cart-list');
    document.getElementById('cart-section').classList.remove('hidden');
    list.innerHTML = '';
    cart3D.forEach(item => {
        const li = document.createElement('li');
        li.className = "flex justify-between text-xs p-1.5 bg-slate-950 rounded border border-slate-800 text-slate-300";
        li.innerHTML = `<span class="truncate max-w-[180px]">${item.name}</span><span class="text-brand-500 font-mono">${item.dims.x}x${item.dims.y}x${item.dims.z}mm</span>`;
        list.appendChild(li);
    });
    updatePricing3D();
}

function previewItem(id) {
    const item = cart3D.find(i => i.id === id);
    if (!item) return;
    document.getElementById('dim-display').innerHTML = `${item.dims.x} x ${item.dims.y} x ${item.dims.z} mm`;
    if (currentMesh) scene.remove(currentMesh);
    
    currentMesh = new THREE.Mesh(item.geometry, new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.4, metalness: 0.2 }));
    item.geometry.center();
    scene.add(currentMesh);
    item.geometry.computeBoundingSphere();
    camera.position.z = item.geometry.boundingSphere.radius * 2.5;
}

resetViewerBtn.addEventListener('click', () => {
    cart3D = [];
    if (currentMesh) scene.remove(currentMesh);
    document.getElementById('cart-section').classList.add('hidden');
    placeholder.classList.remove('opacity-0', 'pointer-events-none');
    resetViewerBtn.classList.add('hidden');
    document.getElementById('weight-display').innerText = "0.0 g";
    document.getElementById('price-display').innerText = "0đ";
});