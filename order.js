// --- 4. HỆ THỐNG PHÂN TÍCH 3D TỰ ĐỘNG BÁO GIÁ ĐA LUỒNG ---
const fileInput = document.getElementById('file-input');
const viewerContainer = document.getElementById('viewer-container');
const placeholder = document.getElementById('placeholder');
const loading = document.getElementById('loading');
const materialSelect = document.getElementById('material');
const resetViewerBtn = document.getElementById('reset-viewer-btn');
const infillSlider = document.getElementById('infill-slider');
const layerHeight = document.getElementById('layer-height');
const sizeWarning = document.getElementById('size-warning');
const btnZalo3D = document.getElementById('btn-zalo-3d');
const colorButtons = document.querySelectorAll('.color-btn');

let cart3D = [];
let activeCartId = null;
let currentMesh = null;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, viewerContainer.clientWidth / viewerContainer.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(viewerContainer.clientWidth, viewerContainer.clientHeight);
renderer.outputEncoding = THREE.sRGBEncoding; 
renderer.toneMapping = THREE.ACESFilmicToneMapping; 
renderer.toneMappingExposure = 1.0;
viewerContainer.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);
scene.environment = pmremGenerator.fromScene(new THREE.RoomEnvironment(), 0.04).texture;

const dirLight = new THREE.DirectionalLight(0xffffff, 0.5); dirLight.position.set(2, 2, 2); scene.add(dirLight);
const controls = new THREE.OrbitControls(camera, renderer.domElement); controls.enableDamping = true;

function animate() { requestAnimationFrame(animate); controls.update(); renderer.render(scene, camera); }
animate();

function calculateVolume(geometry) {
    if(!geometry.attributes.position) return 0;
    let pos = geometry.attributes.position, sum = 0, p1 = new THREE.Vector3(), p2 = new THREE.Vector3(), p3 = new THREE.Vector3();
    for (let i = 0; i < pos.count / 3; i++) {
        p1.fromBufferAttribute(pos, i * 3 + 0); p2.fromBufferAttribute(pos, i * 3 + 1); p3.fromBufferAttribute(pos, i * 3 + 2);
        sum += p1.dot(p2.clone().cross(p3)) / 6.0;
    }
    return Math.abs(sum); 
}

const updatePricing3D = () => {
    if (cart3D.length === 0) return;
    
    const totalVol = cart3D.reduce((sum, item) => sum + item.volume, 0);
    const opt = materialSelect.options[materialSelect.selectedIndex];
    const density = parseFloat(opt.getAttribute('data-density'));
    const basePrice = parseInt(opt.value);
    const infill = parseInt(infillSlider.value);
    const layerMult = parseFloat(layerHeight.value);
    
    const effectiveVolumeRatio = 0.2 + 0.8 * (infill / 100);
    const weight = totalVol * density * effectiveVolumeRatio;
    document.getElementById('weight-display').innerHTML = `${weight.toFixed(1)} <span class="text-xs">g</span>`;
    
    let finalPrice = Math.round(weight * basePrice * layerMult);
    if(finalPrice > 0 && finalPrice < 20000) finalPrice = 20000;
    document.getElementById('price-display').innerText = `${finalPrice.toLocaleString('vi-VN')} đ`;

    const colorBtn = document.querySelector('.color-btn.border-white');
    const colorName = colorBtn ? colorBtn.getAttribute('title') : 'Vàng Đồng';
    const matName = opt.text.split(' - ')[0];
    const layerName = layerHeight.options[layerHeight.selectedIndex].text.split(' (')[0];
    const fileNames = cart3D.map(i => i.name).join(', ');
    
    const zaloMessage = `[ĐẶT IN 3D WEB]\nChào Giahaoone, tôi muốn in đơn hàng này:\n- Danh sách File (${cart3D.length}): ${fileNames}\n- Vật liệu: ${matName}\n- Màu sắc: ${colorName}\n- Độ đặc (Infill): ${infill}%\n- Độ mịn: ${layerName}\n- Tổng khối lượng: ${weight.toFixed(1)}g\n- Báo giá dự kiến: ${finalPrice.toLocaleString('vi-VN')} VNĐ\n(Tôi sẽ gửi kèm file STL ngay sau tin nhắn này!)`;
    
    document.getElementById('customer-info').classList.remove('hidden');
    
    btnZalo3D.onclick = () => {
        const custName = document.getElementById('cust-name').value || "Chưa cung cấp";
        const custPhone = document.getElementById('cust-phone').value || "Chưa cung cấp";

        const originalBtnText = btnZalo3D.innerHTML;
        btnZalo3D.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang xử lý...';
        
        const formData = new URLSearchParams();
        formData.append('name', custName);
        formData.append('phone', custPhone);
        formData.append('material', matName);
        formData.append('color', colorName);
        formData.append('dims', `Nhiều file (${cart3D.length})`);
        formData.append('weight', weight.toFixed(1) + "g");
        formData.append('config', `Infill ${infill}% | Layer ${layerName}`);
        formData.append('price', finalPrice.toLocaleString('vi-VN') + " đ");

        const GOOGLE_APP_URL = "https://script.google.com/macros/s/AKfycbzTq4LssG-Ox4pJwg6ek0fUSpKPSwcYw7SoO5D-z3r75_rw2bRJAcAadkv6kpHyojIp/exec"; 
        
        fetch(GOOGLE_APP_URL, { method: 'POST', body: formData })
        .then(res => res.json())
        .then(data => {
            btnZalo3D.innerHTML = originalBtnText;
            window.open(`https://zalo.me/0704141237?text=${encodeURIComponent(zaloMessage)}`, '_blank');
        })
        .catch(error => {
            console.error('Lỗi lưu sheet:', error);
            btnZalo3D.innerHTML = originalBtnText;
            window.open(`https://zalo.me/0704141237?text=${encodeURIComponent(zaloMessage)}`, '_blank');
        });
    };
};

materialSelect.addEventListener('change', updatePricing3D); layerHeight.addEventListener('change', updatePricing3D);
infillSlider.addEventListener('input', (e) => { document.getElementById('infill-val').innerText = `${e.target.value}%`; updatePricing3D(); });

colorButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        colorButtons.forEach(b => { b.classList.remove('border-white', 'shadow-[0_0_10px_rgba(255,255,255,0.3)]'); b.classList.add('border-transparent'); });
        const targetBtn = e.target;
        targetBtn.classList.remove('border-transparent'); targetBtn.classList.add('border-white', 'shadow-[0_0_10px_rgba(255,255,255,0.3)]');
        if (currentMesh) {
            currentMesh.material.color.setHex(parseInt(targetBtn.getAttribute('data-color')));
            currentMesh.material.roughness = parseFloat(targetBtn.getAttribute('data-roughness'));
            currentMesh.material.metalness = parseFloat(targetBtn.getAttribute('data-metalness'));
            currentMesh.material.needsUpdate = true;
        }
        updatePricing3D(); 
    });
});

function renderCart() {
    const cartSection = document.getElementById('cart-section');
    const cartList = document.getElementById('cart-list');
    
    if(cart3D.length === 0) {
        cartSection.classList.add('hidden');
        
        if (currentMesh) { scene.remove(currentMesh); currentMesh.geometry.dispose(); currentMesh.material.dispose(); currentMesh = null; }
        document.getElementById('dim-display').innerHTML = `0 x 0 x 0 mm`;
        document.getElementById('weight-display').innerHTML = `0.00 <span class="text-xs">g</span>`;
        document.getElementById('price-display').innerText = `0đ`;
        
        placeholder.classList.remove('opacity-0', 'pointer-events-none');
        document.getElementById('demo-models').classList.remove('hidden');
        resetViewerBtn.classList.add('hidden'); resetViewerBtn.classList.remove('flex');
        btnZalo3D.classList.add('hidden'); sizeWarning.classList.add('hidden'); document.getElementById('customer-info').classList.add('hidden');
        return;
    }
    
    cartSection.classList.remove('hidden');
    cartList.innerHTML = '';
    
    cart3D.forEach(item => {
        const li = document.createElement('li');
        const isActive = item.id === activeCartId;
        li.className = `flex justify-between items-center p-2 rounded-lg cursor-pointer border ${isActive ? 'bg-brand-900 border-brand-500' : 'bg-slate-900 border-slate-700 hover:border-slate-500'} transition`;
        li.onclick = () => previewItem(item.id);
        
        li.innerHTML = `
            <div class="flex-1 min-w-0 pr-2">
                <p class="text-xs font-bold text-white truncate" title="${item.name}">${item.name}</p>
                <p class="text-[10px] text-slate-400">${item.dims.x} x ${item.dims.y} x ${item.dims.z} mm</p>
            </div>
            <button onclick="event.stopPropagation(); removeCartItem(${item.id})" class="text-slate-500 hover:text-red-400 p-1 transition">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        cartList.appendChild(li);
    });
    
    updatePricing3D();
}

window.removeCartItem = function(id) {
    cart3D = cart3D.filter(item => item.id !== id);
    if(cart3D.length > 0) {
        if(activeCartId === id) previewItem(cart3D[0].id);
        else renderCart();
    } else {
        renderCart();
    }
}

function previewItem(id) {
    activeCartId = id;
    const item = cart3D.find(i => i.id === id);
    if(!item) return;
    
    renderCart(); 
    
    document.getElementById('dim-display').innerHTML = `${item.dims.x} x ${item.dims.y} x ${item.dims.z} mm`;
    
    if(item.dims.x > 390 || item.dims.y > 390 || item.dims.z > 390) { sizeWarning.classList.remove('hidden'); } 
    else { sizeWarning.classList.add('hidden'); }

    if (currentMesh) { scene.remove(currentMesh); }
    
    const defaultColorBtn = document.querySelector('.color-btn.border-white') || colorButtons[0];
    currentMesh = new THREE.Mesh(item.geometry, new THREE.MeshStandardMaterial({ 
        color: parseInt(defaultColorBtn.getAttribute('data-color')), 
        roughness: parseFloat(defaultColorBtn.getAttribute('data-roughness')), 
        metalness: parseFloat(defaultColorBtn.getAttribute('data-metalness'))
    }));
    
    item.geometry.center(); 
    scene.add(currentMesh);
    item.geometry.computeBoundingSphere(); 
    camera.position.z = item.geometry.boundingSphere.radius * 2.5;
}

// XỬ LÝ UPLOAD NHIỀU FILE
fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files); 
    if (files.length === 0) return;
    
    const validFiles = files.filter(file => {
        if (!file.name.toLowerCase().endsWith('.stl')) {
            showToast(`File "${file.name}" không đúng định dạng .stl!`, "error");
            return false;
        }
        return true;
    });

    if (validFiles.length === 0) {
        fileInput.value = '';
        return;
    }

    loading.classList.remove('hidden');
    let loadedCount = 0;

    validFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const loader = new THREE.STLLoader();
                const geometry = loader.parse(event.target.result);
                
                if (!geometry || geometry.attributes.position === undefined) {
                    throw new Error("Dữ liệu file trống hoặc lỗi");
                }

                const vol = calculateVolume(geometry) / 1000;
                geometry.computeBoundingBox(); 
                const box = geometry.boundingBox;
                const dims = { 
                    x: Math.abs(box.max.x - box.min.x).toFixed(1), 
                    y: Math.abs(box.max.y - box.min.y).toFixed(1), 
                    z: Math.abs(box.max.z - box.min.z).toFixed(1) 
                };

                cart3D.push({
                    id: Date.now() + Math.random(),
                    name: file.name,
                    volume: vol || 35,
                    geometry: geometry,
                    dims: dims
                });
                showToast(`Đã thêm ${file.name} vào danh sách.`, "success");
            } catch (error) { 
                showToast(`Lỗi đọc file "${file.name}".`, "error");
            }
            
            loadedCount++;
            if(loadedCount === validFiles.length) {
                renderCart();
                if(cart3D.length > 0) previewItem(cart3D[cart3D.length - 1].id);
                loading.classList.add('hidden');
                
                placeholder.classList.add('opacity-0', 'pointer-events-none');
                document.getElementById('demo-models').classList.add('hidden');
                resetViewerBtn.classList.remove('hidden'); 
                resetViewerBtn.classList.add('flex');
                btnZalo3D.classList.remove('hidden');
            }
        };

        reader.onerror = function() {
            showToast(`Lỗi hệ thống khi đọc file "${file.name}".`, "error");
            loading.classList.add('hidden');
        };

        reader.readAsArrayBuffer(file);
    });
    fileInput.value = '';
});

function createGearGeometry() {
    const shape = new THREE.Shape();
    const teeth = 16, outerRadius = 30, innerRadius = 24;
    for (let i = 0; i < teeth * 2; i++) {
        const r = i % 2 === 0 ? outerRadius : innerRadius;
        const a = (i / (teeth * 2)) * Math.PI * 2;
        if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
        else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    shape.closePath();
    const holePath = new THREE.Path(); holePath.absarc(0, 0, 10, 0, Math.PI * 2, false); shape.holes.push(holePath);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 10, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.5, bevelThickness: 0.5 }); geo.center(); return geo;
}

function createCircuitBoxGeometry() {
    const shape = new THREE.Shape(); const w = 60, h = 40, r = 4; const x = -w/2, y = -h/2;
    shape.moveTo(x, y + r); shape.lineTo(x, y + h - r); shape.quadraticCurveTo(x, y + h, x + r, y + h); shape.lineTo(x + w - r, y + h); shape.quadraticCurveTo(x + w, y + h, x + w, y + h - r); shape.lineTo(x + w, y + r); shape.quadraticCurveTo(x + w, y, x + w - r, y); shape.lineTo(x + r, y); shape.quadraticCurveTo(x, y, x, y + r);
    const hole = new THREE.Path(); const hw = 50, hh = 30, hr = 2; const hx = -hw/2, hy = -hh/2; hole.moveTo(hx, hy + hr); hole.lineTo(hx, hy + hh - hr); hole.quadraticCurveTo(hx, hy + hh, hx + hr, hy + hh); hole.lineTo(hx + hw - hr, hy + hh); hole.quadraticCurveTo(hx + hw, hy + hh, hx + hw, hy + hh - hr); hole.lineTo(hx + hw, hy + hr); hole.quadraticCurveTo(hx + hw, hy, hx + hw - hr, hy); hole.lineTo(hx + hr, hy); hole.quadraticCurveTo(hx, hy, hx, hy + hr); shape.holes.push(hole);
    const pos = [[-25, -15], [25, -15], [25, 15], [-25, 15]]; pos.forEach(p => { const screwHole = new THREE.Path(); screwHole.absarc(p[0], p[1], 1.5, 0, Math.PI * 2, false); shape.holes.push(screwHole); });
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 15, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.5, bevelThickness: 0.5 }); geo.center(); return geo;
}

window.loadDemoModel = function(type) {
    loading.classList.remove('hidden');
    setTimeout(() => {
        let geometry, name;
        if (type === 'gear') { geometry = createGearGeometry(); name = "Banh_Rang_Demo.stl"; } 
        else if (type === 'box') { geometry = createCircuitBoxGeometry(); name = "Khung_Mach_Demo.stl"; } 
        else { geometry = new THREE.TorusKnotGeometry(25, 6, 100, 16); name = "Tru_Xoan_Demo.stl"; }
        
        const vol = calculateVolume(geometry) / 1000 || 35;
        geometry.computeBoundingBox(); const box = geometry.boundingBox;
        const dims = { x: Math.abs(box.max.x - box.min.x).toFixed(1), y: Math.abs(box.max.y - box.min.y).toFixed(1), z: Math.abs(box.max.z - box.min.z).toFixed(1) };

        cart3D.push({ id: Date.now() + Math.random(), name: name, volume: vol, geometry: geometry, dims: dims });
        
        renderCart();
        previewItem(cart3D[cart3D.length - 1].id);
        loading.classList.add('hidden');
        showToast(`Đã thêm file mẫu ${name}`, "success");
        
        placeholder.classList.add('opacity-0', 'pointer-events-none'); document.getElementById('demo-models').classList.add('hidden');
        resetViewerBtn.classList.remove('hidden'); resetViewerBtn.classList.add('flex'); btnZalo3D.classList.remove('hidden');
    }, 500);
};

resetViewerBtn.addEventListener('click', () => { cart3D = []; renderCart(); showToast("Đã dọn dẹp sạch khu vực phân tích."); });
