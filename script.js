/**
 * ============================================================================
 * CẤU HÌNH THƯƠNG HIỆU GIA HÀO ONE (giahaoone.com • giahao.vn)
 * ============================================================================
 * Hỗ trợ Đa Ngôn Ngữ: Tiếng Việt (VI) & Tiếng Anh (EN)
 */
const SITE_CONFIG = {
  brandName: "Gia Hào One",
  domains: "giahaoone.com • giahao.vn",
  phoneRaw: "0704141237",
  phoneDisplay: "0704.141.237",
  address: {
    vi: "Ấp An Trung, Xã Định An, Huyện Gò Quao, Tỉnh Kiên Giang",
    en: "An Trung Hamlet, Dinh An Commune, Go Quao District, Kien Giang Province, Vietnam"
  }
};

/**
 * TỪ ĐIỂN GIAO DIỆN ĐA NGÔN NGỮ (VI / EN)
 */
const I18N_DICT = {
  vi: {
    page_title: "Gia Hào One — Sản Phẩm In 3D & Phay CNC Tinh Xảo | giahaoone.com • giahao.vn",
    nav_products: "Sản phẩm",
    nav_craft: "Công nghệ chế tác",
    nav_materials: "Chất liệu",
    nav_faq: "Hỏi đáp",
    nav_contact: "Liên hệ",
    hero_eyebrow: "Gia Hào One • giahaoone.com & giahao.vn",
    hero_title_1: "Thiết kế chuẩn mực.",
    hero_title_2: "Chế tác chính xác từng milimet.",
    hero_lead:
      "Khám phá các dòng sản phẩm cơ khí và phụ kiện công nghệ của <strong>Gia Hào One</strong> — được hoàn thiện từ hệ thống máy in 3D <strong>QIDI Max 4</strong>, <strong>Snapmaker U1</strong> và <strong>Máy Phay CNC 3 Trục</strong>.",
    hero_cta_primary: "Khám phá bộ sưu tập",
    hero_cta_secondary: "Liên hệ Zalo 0704.141.237",
    mode_studio: "Bề mặt Studio",
    mode_wireframe: "Khung dây CAD",
    mode_toolpath: "Lớp in & Đường dao CNC",
    stage_drag_hint: "Chạm hoặc kéo để xoay góc nhìn 3D",
    finish_blue: "Xanh Pro Titanium",
    finish_carbon: "Đen Sợi Carbon (PA-CF)",
    finish_silver: "Bạc Nhôm 6061 CNC",
    finish_copper: "Vàng Đồng Nguyên Khối",
    finish_teal: "Xanh Ngọc PETG Kỹ Thuật",
    stage_cap_1: "IN 3D KHỔ LỚN & CHỊU NHIỆT",
    stage_cap_2: "IN 3D ĐỘ CHÍNH XÁC CAO",
    stage_cap_3: "GIA CÔNG KIM LOẠI & NHỰA",
    stage_head_3: "Phay CNC 3 Trục",
    prod_eyebrow: "Bộ sưu tập sản phẩm",
    prod_title: "Khám phá các dòng sản phẩm của Gia Hào One.",
    prod_desc:
      "Mỗi sản phẩm đều được chăm chút từ bản vẽ 3D đến bề mặt hoàn thiện thực tế. Bấm vào từng sản phẩm để xem chi tiết cấu tạo.",
    filter_all: "Tất cả",
    filter_3d: "Sản phẩm In 3D",
    filter_cnc: "Sản phẩm Phay CNC",
    filter_hybrid: "Kết hợp 3D & CNC",
    search_placeholder: "Tìm tên sản phẩm, chất liệu, dòng máy...",
    card_explore: "Khám phá",
    empty_search: "Không tìm thấy sản phẩm phù hợp với từ khóa",
    bento_eyebrow: "Công nghệ chế tác",
    bento_title: "Sự giao thoa giữa In 3D hiện đại và Cơ khí CNC.",
    bento_desc:
      "Tất cả sản phẩm mang thương hiệu <strong>Gia Hào One</strong> đều được chế tạo trực tiếp trên hệ thống thiết bị tiêu chuẩn cao.",
    bento1_tag: "IN 3D KỸ THUẬT KHỔ LỚN",
    bento1_title: "QIDI Max 4.<br/>Bền bỉ với vật liệu sợi Carbon &amp; chịu nhiệt.",
    bento1_text:
      "Nhờ buồng nhiệt ổn định và đầu phun nhiệt độ cao, các dòng sản phẩm chế tạo từ máy <strong>QIDI Max 4</strong> sử dụng nhựa kỹ thuật <strong>ABS, ASA, PETG và PA-CF (Nylon Carbon)</strong> đạt độ liên kết lớp hoàn hảo, chịu tải cơ học lớn và bền bỉ trong mọi điều kiện.",
    bento1_link: "Xem các sản phẩm từ QIDI Max 4",
    bento1_chip3: "Buồng nhiệt kín",
    bento2_tag: "ĐỘ TINH XẢO CAO",
    bento2_title: "Snapmaker U1.<br/>Sắc nét trên từng đường nét.",
    bento2_text:
      "Chế tạo các dòng phụ kiện thông minh và chi tiết lắp ghép đòi hỏi bề mặt mịn màng, màu sắc chuẩn xác và tính thẩm mỹ cao.",
    bento2_link: "Khám phá sản phẩm",
    bento2_chip1: "Bề mặt láng mịn",
    bento2_chip2: "Độ khít cao",
    bento3_tag: "CƠ KHÍ NGUYÊN KHỐI",
    bento3_title: "Phay CNC 3 Trục.<br/>Chuẩn mực kim loại.",
    bento3_text:
      "Phay trực tiếp từ phôi Nhôm hợp kim, Đồng và nhựa kỹ thuật POM (Delrin) nguyên khối, tạo nên kết cấu đầm chắc và sang trọng như thiết bị cao cấp.",
    bento3_link: "Xem sản phẩm CNC",
    bento3_chip1: "Nhôm 6061",
    bento3_chip2: "Đồng & POM",
    bento4_tag: "THƯƠNG HIỆU CHÍNH THỨC",
    bento4_title: "Gia Hào One — Hiện diện tại giahaoone.com & giahao.vn",
    bento4_text:
      "Chúng tôi tập trung nghiên cứu và hoàn thiện các dòng sản phẩm độc quyền của riêng mình, kết hợp ưu điểm linh hoạt của In 3D và sự cứng vững của Phay CNC 3 Trục để mang đến trải nghiệm sử dụng tốt nhất.",
    mat_eyebrow: "Chất liệu tuyển chọn",
    mat_title: "Vật liệu cấu thành sản phẩm.",
    mat_desc:
      "Chạm vào từng đặc tính bên dưới để so sánh trực quan thông số cơ lý hoặc xem bảng tổng hợp chi tiết.",
    adv_badge: "TƯƠNG TÁC SO SÁNH THÔNG SỐ",
    adv_title: "Khám phá đặc tính kỹ thuật của từng nhóm vật liệu",
    adv_btn_alu: "Nhôm 6061 (CNC 3 Trục)",
    adv_btn_pom: "Nhựa POM / Đồng (CNC 3 Trục)",
    meter_strength: "Độ cứng vững & Chịu lực",
    meter_heat: "Khả năng chịu nhiệt & Thời tiết",
    meter_finish: "Độ mịn & Tinh xảo bề mặt",
    mat_tab_3d: "Vật liệu sản phẩm In 3D (QIDI Max 4 & Snapmaker U1)",
    mat_tab_cnc: "Vật liệu sản phẩm Phay CNC 3 Trục",
    th_mat: "Chất liệu",
    th_sys: "Hệ thống chế tạo",
    th_feat: "Đặc tính nổi bật",
    th_finish: "Hoàn thiện",
    th_app: "Ứng dụng trên sản phẩm",
    faq_eyebrow: "Giải đáp thông tin",
    faq_title: "Câu hỏi thường gặp về sản phẩm Gia Hào One.",
    faq_q1: "Gia Hào One cung cấp những dòng sản phẩm chủ lực nào?",
    faq_a1:
      "Gia Hào One (giahaoone.com & giahao.vn) chuyên giới thiệu và cung cấp các dòng sản phẩm tự nghiên cứu, thiết kế và chế tạo hoàn thiện bằng máy in 3D QIDI Max 4, Snapmaker U1 và máy phay CNC 3 trục — bao gồm hộp kỹ thuật chịu nhiệt, giá đỡ nhựa sợi Carbon PA-CF, phụ kiện bàn làm việc thông minh và các chi tiết nhôm 6061, đồng, nhựa POM nguyên khối.",
    faq_q2: "Sự khác biệt giữa sản phẩm in từ QIDI Max 4 và Snapmaker U1 là gì?",
    faq_a2:
      "Dòng sản phẩm từ máy QIDI Max 4 sử dụng buồng nhiệt chủ động để in các loại nhựa kỹ thuật chịu lực và chịu nhiệt cao (ABS, ASA, PA-CF sợi Carbon) với kích thước lớn. Trong khi đó, dòng sản phẩm từ Snapmaker U1 tập trung vào độ mịn bề mặt, đường nét tinh xảo và độ khít cao cho các phụ kiện sáng tạo và mô hình cơ khí.",
    faq_q3: "Làm thế nào để liên hệ tư vấn hoặc đặt mua sản phẩm của Gia Hào One?",
    faq_a3:
      "Bạn có thể bấm trực tiếp vào sản phẩm quan tâm trên website giahaoone.com (hoặc giahao.vn) và nhắn tin qua Zalo 0704.141.237 để được tư vấn thông số kỹ thuật chi tiết và hỗ trợ giao hàng toàn quốc từ Gò Quao, Kiên Giang.",
    contact_eyebrow: "Kết nối trực tiếp",
    contact_title: "Liên hệ với Gia Hào One.",
    contact_lead:
      "Để tìm hiểu thông tin chi tiết hoặc đặt mua các dòng sản phẩm trên <strong>giahaoone.com</strong> và <strong>giahao.vn</strong>, bạn có thể nhắn tin trực tiếp qua Zalo hoặc gọi điện thoại.",
    tile_zalo_label: "Zalo Liên Hệ Nhanh",
    tile_phone_label: "Số Điện Thoại",
    tile_domain_label: "Hệ Thống Tên Miền Chính Thức",
    tile_addr_label: "Địa Chỉ Liên Hệ",
    tile_addr_value: "Ấp An Trung, Xã Định An, Huyện Gò Quao, Tỉnh Kiên Giang",
    form_title: "Gửi tin nhắn quan tâm sản phẩm",
    form_sub:
      "Điền nội dung bên dưới để tạo nhanh tin nhắn và mở trực tiếp khung trò chuyện Zalo <strong>0704.141.237</strong>.",
    form_name_label: "Tên của bạn *",
    form_name_ph: "Nhập tên của bạn",
    form_phone_label: "Số điện thoại / Zalo *",
    form_phone_ph: "Nhập SĐT của bạn",
    form_prod_label: "Dòng sản phẩm quan tâm",
    form_opt_3d: "Sản phẩm In 3D (QIDI Max 4 / Snapmaker U1)",
    form_opt_cnc: "Sản phẩm Phay CNC 3 Trục",
    form_opt_hybrid: "Sản phẩm Kết hợp In 3D & Phay CNC",
    form_qty_label: "Số lượng",
    form_qty_ph: "VD: 1 sản phẩm",
    form_notes_label: "Sản phẩm cụ thể hoặc câu hỏi của bạn",
    form_notes_ph: "VD: Mình muốn hỏi thêm thông tin về sản phẩm...",
    form_submit: "Kết nối qua Zalo 0704.141.237",
    footer_bio: "Thương hiệu sản phẩm In 3D (QIDI Max 4, Snapmaker U1) và Phay CNC 3 Trục tinh xảo.",
    footer_col1_title: "Khám phá",
    footer_col2_title: "Liên hệ & Địa chỉ",
    footer_phone_prefix: "Zalo / Điện thoại:",
    modal_sys: "Hệ thống chế tạo",
    modal_mat: "Chất liệu hoàn thiện",
    modal_feat: "Đặc điểm nổi bật",
    modal_contact: "Liên hệ Gia Hào One",
    modal_cta: "Hỏi thông tin sản phẩm này qua Zalo",
    modal_prefill_prefix: "Mình quan tâm đến sản phẩm:",
    modal_prefill_suffix: "của Gia Hào One. Nhờ tư vấn thêm chi tiết!",
    feedback_copied: "Đã sao chép nội dung tin nhắn!",
    feedback_guide: "Bạn chỉ cần bấm nút bên dưới để mở Zalo và dán (Ctrl+V) tin nhắn.",
    feedback_open_zalo: "Mở Zalo"
  },
  en: {
    page_title: "Gia Hào One — Precision 3D Printed & CNC Milled Products | giahaoone.com • giahao.vn",
    nav_products: "Products",
    nav_craft: "Craftsmanship",
    nav_materials: "Materials",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_eyebrow: "Gia Hào One • giahaoone.com & giahao.vn",
    hero_title_1: "Engineered to perfection.",
    hero_title_2: "Crafted with millimeter precision.",
    hero_lead:
      "Explore signature mechanical products and tech accessories by <strong>Gia Hào One</strong> — crafted in-house using <strong>QIDI Max 4</strong>, <strong>Snapmaker U1</strong> 3D printers and <strong>3-Axis CNC Milling</strong>.",
    hero_cta_primary: "Explore Collection",
    hero_cta_secondary: "Connect on Zalo 0704.141.237",
    mode_studio: "Studio Surface",
    mode_wireframe: "CAD Wireframe",
    mode_toolpath: "Slicer & CNC Toolpath",
    stage_drag_hint: "Touch or drag to rotate 3D view",
    finish_blue: "Pro Titanium Blue",
    finish_carbon: "Carbon Fiber Black (PA-CF)",
    finish_silver: "6061 Aluminum Silver",
    finish_copper: "Solid Copper Gold",
    finish_teal: "Emerald Engineering PETG",
    stage_cap_1: "HIGH-TEMP LARGE FORMAT 3D",
    stage_cap_2: "HIGH-PRECISION 3D PRINTING",
    stage_cap_3: "METAL & ENGINEERING PLASTICS",
    stage_head_3: "3-Axis CNC Milling",
    prod_eyebrow: "Product Collection",
    prod_title: "Explore the product lines by Gia Hào One.",
    prod_desc:
      "Every piece is meticulously engineered from 3D CAD to final surface finish. Click on any product to inspect its technical specifications.",
    filter_all: "All Products",
    filter_3d: "3D Printed",
    filter_cnc: "CNC Milled",
    filter_hybrid: "Hybrid 3D & CNC",
    search_placeholder: "Search products, materials, equipment...",
    card_explore: "Explore",
    empty_search: "No matching products found for",
    bento_eyebrow: "Craftsmanship & Hardware",
    bento_title: "Where modern 3D Printing meets 3-Axis CNC.",
    bento_desc:
      "All <strong>Gia Hào One</strong> products are designed and crafted directly on high-standard digital fabrication systems.",
    bento1_tag: "INDUSTRIAL LARGE-FORMAT 3D",
    bento1_title: "QIDI Max 4.<br/>Built for Carbon Fiber &amp; high-temp polymers.",
    bento1_text:
      "With an active heated chamber and high-temperature extruder, products crafted on <strong>QIDI Max 4</strong> using <strong>ABS, ASA, PETG, and PA-CF (Carbon Fiber Nylon)</strong> achieve superior layer bonding, structural strength, and weather resistance.",
    bento1_link: "View QIDI Max 4 products",
    bento1_chip3: "Heated Chamber",
    bento2_tag: "FINE SURFACE PRECISION",
    bento2_title: "Snapmaker U1.<br/>Crisp details on every contour.",
    bento2_text:
      "Ideal for smart desk accessories and interlocking mechanical parts that demand smooth surfaces, vibrant colors, and tight tolerances.",
    bento2_link: "Explore products",
    bento2_chip1: "Smooth Finish",
    bento2_chip2: "Precision Fit",
    bento3_tag: "UNIBODY MACHINING",
    bento3_title: "3-Axis CNC Milling.<br/>Solid metal &amp; polymers.",
    bento3_text:
      "Milled directly from solid blocks of 6061 Aluminum, Copper, and POM (Delrin) engineering plastic for unibody rigidity and premium feel.",
    bento3_link: "View CNC products",
    bento3_chip1: "Aluminum 6061",
    bento3_chip2: "Copper & POM",
    bento4_tag: "OFFICIAL BRAND PRESENCE",
    bento4_title: "Gia Hào One — Online at giahaoone.com & giahao.vn",
    bento4_text:
      "We focus exclusively on developing and perfecting our own proprietary product lines, combining additive flexibility with 3-axis CNC strength.",
    mat_eyebrow: "Curated Materials",
    mat_title: "Materials behind our products.",
    mat_desc:
      "Tap on any material profile below to interactively compare mechanical properties or browse the full specification sheet.",
    adv_badge: "INTERACTIVE SPEC COMPARISON",
    adv_title: "Explore the technical profile of each material family",
    adv_btn_alu: "Aluminum 6061 (3-Axis CNC)",
    adv_btn_pom: "POM / Copper (3-Axis CNC)",
    meter_strength: "Structural Rigidity & Load",
    meter_heat: "Thermal & Weather Resistance",
    meter_finish: "Surface Smoothness & Detail",
    mat_tab_3d: "3D Printing Materials (QIDI Max 4 & Snapmaker U1)",
    mat_tab_cnc: "3-Axis CNC Milling Materials",
    th_mat: "Material",
    th_sys: "Fabrication System",
    th_feat: "Key Characteristics",
    th_finish: "Finish Quality",
    th_app: "Product Applications",
    faq_eyebrow: "Questions & Answers",
    faq_title: "Frequently Asked Questions about Gia Hào One.",
    faq_q1: "What are the signature product lines of Gia Hào One?",
    faq_a1:
      "Gia Hào One (giahaoone.com & giahao.vn) designs and crafts proprietary products using QIDI Max 4, Snapmaker U1 3D printers, and 3-Axis CNC Milling — including heat-resistant enclosures, PA-CF carbon-fiber mounts, smart desk accessories, and solid 6061 aluminum, copper, and POM mechanical components.",
    faq_q2: "How do QIDI Max 4 products differ from Snapmaker U1 products?",
    faq_a2:
      "Products crafted on the QIDI Max 4 utilize an actively heated chamber for large-scale, high-strength, and heat-resistant polymers (ABS, ASA, PA-CF Carbon Fiber). Products from the Snapmaker U1 focus on ultra-clean surface aesthetics, fine geometric contours, and precision snap-fit tolerances.",
    faq_q3: "How can I inquire about or order Gia Hào One products?",
    faq_a3:
      "Simply click on any product on giahaoone.com (or giahao.vn) and message us via Zalo at 0704.141.237 for detailed specifications and nationwide delivery from Go Quao, Kien Giang.",
    contact_eyebrow: "Direct Connection",
    contact_title: "Get in touch with Gia Hào One.",
    contact_lead:
      "For detailed product specifications or orders on <strong>giahaoone.com</strong> and <strong>giahao.vn</strong>, message us directly via Zalo or phone.",
    tile_zalo_label: "Quick Chat on Zalo",
    tile_phone_label: "Phone / Hotline",
    tile_domain_label: "Official Domains",
    tile_addr_label: "Location",
    tile_addr_value: "An Trung Hamlet, Dinh An Commune, Go Quao District, Kien Giang Province, Vietnam",
    form_title: "Product Inquiry Message",
    form_sub:
      "Fill out the details below to generate a quick inquiry message and open Zalo chat <strong>0704.141.237</strong>.",
    form_name_label: "Your Name *",
    form_name_ph: "Enter your name",
    form_phone_label: "Phone / Zalo Number *",
    form_phone_ph: "Enter your phone number",
    form_prod_label: "Product Line of Interest",
    form_opt_3d: "3D Printed Products (QIDI Max 4 / Snapmaker U1)",
    form_opt_cnc: "3-Axis CNC Milled Products",
    form_opt_hybrid: "Hybrid 3D Printed & CNC Products",
    form_qty_label: "Quantity",
    form_qty_ph: "e.g. 1 unit",
    form_notes_label: "Specific Product or Question",
    form_notes_ph: "e.g. I would like more information about...",
    form_submit: "Connect via Zalo 0704.141.237",
    footer_bio: "Precision products crafted with 3D Printing (QIDI Max 4, Snapmaker U1) and 3-Axis CNC Milling.",
    footer_col1_title: "Explore",
    footer_col2_title: "Contact & Location",
    footer_phone_prefix: "Zalo / Phone:",
    modal_sys: "Fabrication System",
    modal_mat: "Material",
    modal_feat: "Highlight",
    modal_contact: "Contact Gia Hào One",
    modal_cta: "Inquire about this product via Zalo",
    modal_prefill_prefix: "I am interested in the product:",
    modal_prefill_suffix: "by Gia Hào One. Please share more details!",
    feedback_copied: "Inquiry message copied to clipboard!",
    feedback_guide: "Click the button below to open Zalo and paste (Ctrl+V) your message.",
    feedback_open_zalo: "Open Zalo"
  }
};

/**
 * DỮ LIỆU BỘ SO SÁNH VẬT LIỆU TƯƠNG TÁC (MATERIAL ADVISOR PROFILES)
 */
const ADVISOR_PROFILES = {
  pacf: {
    strength: 95,
    heat: 92,
    finish: 88,
    vi: {
      machine: "QIDI Max 4 • Nhựa Composite Sợi Carbon",
      name: "Nhựa Sợi Carbon PA-CF / PETG-CF",
      desc: "Kết hợp sợi Carbon siêu nhẹ và nền nhựa kỹ thuật chịu nhiệt, mang lại độ cứng cơ học vượt trội và bề mặt nhám mờ sang trọng cho giá đỡ, ngàm kẹp và khung chịu tải."
    },
    en: {
      machine: "QIDI Max 4 • Carbon Fiber Composite",
      name: "PA-CF / PETG-CF Carbon Fiber Polymer",
      desc: "Combines lightweight chopped carbon fibers with high-temp engineering polymers for exceptional stiffness and a matte carbon finish on mounts and structural frames."
    }
  },
  abs: {
    strength: 88,
    heat: 94,
    finish: 85,
    vi: {
      machine: "QIDI Max 4 • Buồng Nhiệt Chủ Động",
      name: "Nhựa Kỹ Thuật ABS / ASA Chịu Nhiệt",
      desc: "Chịu nhiệt độ môi trường cao, chống tia UV và nắng mưa ngoài trời (ASA), cực kỳ bền bỉ cho các dòng vỏ hộp thiết bị điện tử và phụ kiện kỹ thuật khổ lớn."
    },
    en: {
      machine: "QIDI Max 4 • Active Heated Chamber",
      name: "Heat & UV-Resistant ABS / ASA",
      desc: "High thermal deflection temperature and outdoor UV durability (ASA), ideal for large-format electronics enclosures and rugged industrial housings."
    }
  },
  pla: {
    strength: 80,
    heat: 74,
    finish: 97,
    vi: {
      machine: "Snapmaker U1 • Độ Chính Xác Cao",
      name: "Nhựa PLA+ Cao Cấp & PETG Thẩm Mỹ",
      desc: "Đường nét sắc sảo, bề mặt láng mịn và độ chuẩn xác lắp ghép cực cao, lý tưởng cho các dòng phụ kiện bàn làm việc thông minh, khay tổ chức và mô hình cơ khí."
    },
    en: {
      machine: "Snapmaker U1 • High-Precision Motion",
      name: "Aesthetic PLA+ & Durable PETG",
      desc: "Ultra-crisp geometric contours, smooth layer lines, and tight snap-fit tolerances for smart desk accessories, modular organizers, and kinetic models."
    }
  },
  alu: {
    strength: 99,
    heat: 99,
    finish: 96,
    vi: {
      machine: "Máy Phay CNC 3 Trục • Kim Loại Nguyên Khối",
      name: "Nhôm Hợp Kim 6061 Phay Unibody",
      desc: "Phay trực tiếp từ nhôm tấm 6061 nguyên khối, mang lại kết cấu đầm chắc tuyệt đối, tản nhiệt nhanh, chống gỉ sét và vẻ đẹp kim loại cao cấp chuẩn phần cứng flagship."
    },
    en: {
      machine: "3-Axis CNC Mill • Solid Billet Metal",
      name: "Unibody 6061 Aluminum Alloy",
      desc: "Milled directly from solid 6061 billet aluminum for uncompromising structural rigidity, rapid heat dissipation, and a flagship metallic finish."
    }
  },
  pom: {
    strength: 91,
    heat: 90,
    finish: 95,
    vi: {
      machine: "Máy Phay CNC 3 Trục • Cơ Khí Chính Xác",
      name: "Nhựa Kỹ Thuật POM (Delrin) & Đồng",
      desc: "Nhựa POM có hệ số ma sát cực thấp, tự bôi trơn và chống mài mòn cho bánh răng/con lăn; kết hợp cùng Đồng nguyên khối dẫn nhiệt và tạo điểm nhấn sang trọng."
    },
    en: {
      machine: "3-Axis CNC Mill • Precision Machining",
      name: "POM (Delrin) Engineering Plastic & Copper",
      desc: "Low-friction, self-lubricating POM for precision gears and rollers, paired with high-conductivity solid Copper for thermal bases and luxury accents."
    }
  }
};

/**
 * CẤU HÌNH MÀU SẮC STUDIO FINISH SWATCHES
 */
const STUDIO_FINISHES = {
  blue: {
    primary: "#0071e3",
    secondary: "#5e5ce6",
    tertiary: "#00c7be",
    labelKey: "finish_blue"
  },
  carbon: {
    primary: "#3a3a3c",
    secondary: "#636366",
    tertiary: "#0071e3",
    labelKey: "finish_carbon"
  },
  silver: {
    primary: "#6e6e73",
    secondary: "#8e8e93",
    tertiary: "#0071e3",
    labelKey: "finish_silver"
  },
  copper: {
    primary: "#d97706",
    secondary: "#b45309",
    tertiary: "#f59e0b",
    labelKey: "finish_copper"
  },
  teal: {
    primary: "#00a39b",
    secondary: "#0d9488",
    tertiary: "#0071e3",
    labelKey: "finish_teal"
  }
};

/**
 * DANH SÁCH SẢN PHẨM ĐA NGÔN NGỮ (VI & EN)
 */
const PRODUCTS_DATA = [
  {
    id: "qidi-01",
    category: "3d-printing",
    imageUrl: "",
    svgType: "qidi-enclosure",
    vi: {
      title: "Hộp Kỹ Thuật & Vỏ Thiết Bị Chịu Nhiệt Khổ Lớn",
      categoryLabel: "IN 3D • QIDI MAX 4",
      machine: "QIDI Max 4",
      material: "ABS / ASA / PETG Kỹ Thuật",
      dimensions: "Buồng nhiệt ổn định",
      summary: "Dòng sản phẩm hộp kỹ thuật, vỏ bảo vệ mạch điện và chi tiết kích thước lớn được chế tạo nguyên khối trên hệ thống QIDI Max 4.",
      details: "Được hoàn thiện trên máy in 3D QIDI Max 4 có buồng nhiệt chủ động, sản phẩm đạt độ liên kết lớp in bền bỉ, chịu được nhiệt độ cao và môi trường ngoài trời mà không bị cong vênh."
    },
    en: {
      title: "Large-Format Heat-Resistant Technical Enclosures",
      categoryLabel: "3D PRINTED • QIDI MAX 4",
      machine: "QIDI Max 4",
      material: "Engineering ABS / ASA / PETG",
      dimensions: "Active Heated Chamber",
      summary: "Electronic enclosures, protective housings, and large-scale functional components printed as a single unibody piece on QIDI Max 4.",
      details: "Crafted inside the actively heated chamber of the QIDI Max 4, these enclosures offer exceptional interlayer adhesion, high thermal stability, and outdoor UV durability without warping."
    }
  },
  {
    id: "qidi-02",
    category: "3d-printing",
    imageUrl: "",
    svgType: "qidi-carbon",
    vi: {
      title: "Giá Đỡ & Chi Tiết Cơ Khí Nhựa Sợi Carbon",
      categoryLabel: "IN 3D • QIDI MAX 4",
      machine: "QIDI Max 4",
      material: "PA-CF / PETG-CF (Sợi Carbon)",
      dimensions: "Siêu nhẹ & Cứng vững",
      summary: "Các dòng ngàm kẹp, giá đỡ thiết bị và khớp nối chịu lực cao sử dụng vật liệu nhựa kỹ thuật pha sợi Carbon.",
      details: "Vật liệu nhựa pha sợi Carbon (Carbon Fiber) chế tác từ QIDI Max 4 mang lại bề mặt nhám mờ sang trọng cùng độ cứng cơ học vượt trội, trọng lượng nhẹ và khả năng chịu tải bền bỉ theo thời gian."
    },
    en: {
      title: "Carbon-Fiber Reinforced Mounts & Mechanical Parts",
      categoryLabel: "3D PRINTED • QIDI MAX 4",
      machine: "QIDI Max 4",
      material: "PA-CF / PETG-CF (Carbon Fiber)",
      dimensions: "Ultra-Light & Rigid",
      summary: "Heavy-duty clamps, equipment mounts, and structural joints crafted from carbon-fiber reinforced polymers.",
      details: "Printed with high-temperature carbon-fiber composites on the QIDI Max 4, delivering a signature matte carbon texture, high stiffness-to-weight ratio, and long-lasting mechanical resilience."
    }
  },
  {
    id: "snap-01",
    category: "3d-printing",
    imageUrl: "",
    svgType: "snapmaker-part",
    vi: {
      title: "Phụ Kiện Tinh Xảo & Khay Tổ Chức Thông Minh",
      categoryLabel: "IN 3D • SNAPMAKER U1",
      machine: "Snapmaker U1",
      material: "PLA+ Cao Cấp / PETG / TPU",
      dimensions: "Hoàn thiện sắc nét",
      summary: "Dòng phụ kiện bàn làm việc, đế đỡ thiết bị và chi tiết lắp ghép đòi hỏi độ mịn bề mặt cao từ máy Snapmaker U1.",
      details: "Chế tạo trên hệ thống Snapmaker U1 với độ chính xác chuyển động cao, sản phẩm nổi bật với đường nét tinh tế, bề mặt đồng đều và độ chuẩn xác khi lắp ghép."
    },
    en: {
      title: "Precision Desk Accessories & Modular Organizers",
      categoryLabel: "3D PRINTED • SNAPMAKER U1",
      machine: "Snapmaker U1",
      material: "Premium PLA+ / PETG / TPU",
      dimensions: "Crisp Surface Finish",
      summary: "Minimalist workspace accessories, device stands, and interlocking modular trays crafted with high precision on Snapmaker U1.",
      details: "Produced on the high-precision Snapmaker U1 system, featuring clean geometric lines, uniform layer consistency, and seamless snap-fit assembly."
    }
  },
  {
    id: "cnc-01",
    category: "cnc-milling",
    imageUrl: "",
    svgType: "cnc-unibody",
    vi: {
      title: "Chi Tiết Nhôm Hợp Kim Phay Nguyên Khối",
      categoryLabel: "PHAY CNC 3 TRỤC",
      machine: "Máy Phay CNC 3 Trục",
      material: "Nhôm Hợp Kim 6061",
      dimensions: "Phay nguyên khối (Unibody)",
      summary: "Các dòng vỏ nhôm, mặt bích, đế gá cơ khí và phụ kiện kim loại được phay trực tiếp từ nhôm tấm nguyên khối trên máy CNC 3 trục.",
      details: "Sản phẩm của Gia Hào One được phay CNC 3 trục từ phôi nhôm 6061 cứng cáp, vát cạnh tỉ mỉ và đạt độ phẳng, độ đồng tâm cao, mang lại cảm giác đầm chắc và sang trọng."
    },
    en: {
      title: "Unibody 6061 Aluminum CNC Milled Components",
      categoryLabel: "3-AXIS CNC MILLED",
      machine: "3-Axis CNC Mill",
      material: "6061 Aluminum Alloy",
      dimensions: "Unibody Milled",
      summary: "Aluminum housings, mounting plates, mechanical bases, and metallic accessories milled directly from solid billet aluminum.",
      details: "Machined on our 3-Axis CNC system from solid 6061 aluminum alloy with refined chamfered edges, high flatness, and a solid metallic feel inspired by flagship hardware."
    }
  },
  {
    id: "cnc-02",
    category: "cnc-milling",
    imageUrl: "",
    svgType: "cnc-pom",
    vi: {
      title: "Đế Tản Nhiệt Kim Loại & Chi Tiết Nhựa Kỹ Thuật POM",
      categoryLabel: "PHAY CNC 3 TRỤC",
      machine: "Máy Phay CNC 3 Trục",
      material: "Đồng / Nhựa POM (Delrin) / Acrylic",
      dimensions: "Cắt gọt chính xác",
      summary: "Sản phẩm đế tản nhiệt, con lăn, bánh răng và tấm mặt trong suốt gia công sắc cạnh trên máy phay CNC 3 trục.",
      details: "Sử dụng phôi Đồng dẫn nhiệt tốt, nhựa kỹ thuật POM (Delrin) chịu ma sát cao và Acrylic trong suốt. Đường chạy dao CNC 3 trục mượt mà giúp sản phẩm đạt cả độ bền cơ học lẫn vẻ đẹp thẩm mỹ."
    },
    en: {
      title: "Metallic Heatsinks & POM (Delrin) Engineering Parts",
      categoryLabel: "3-AXIS CNC MILLED",
      machine: "3-Axis CNC Mill",
      material: "Copper / POM (Delrin) / Acrylic",
      dimensions: "Precision Machined",
      summary: "Thermal dissipation bases, low-friction rollers, gears, and crystal-clear acrylic panels machined on a 3-Axis CNC.",
      details: "Crafted from high-conductivity Copper, wear-resistant POM (Delrin), and optical-grade Acrylic. Smooth 3-axis toolpaths ensure both mechanical reliability and visual elegance."
    }
  },
  {
    id: "hybrid-01",
    category: "hybrid",
    imageUrl: "",
    svgType: "hybrid-assembly",
    vi: {
      title: "Bộ Sản Phẩm Kết Hợp Khung CNC & Chi Tiết In 3D",
      categoryLabel: "KẾT HỢP 3D & CNC",
      machine: "QIDI Max 4 + Snapmaker U1 + CNC 3 Trục",
      material: "Nhôm CNC + Nhựa Kỹ Thuật In 3D",
      dimensions: "Thiết kế đồng bộ",
      summary: "Dòng sản phẩm hoàn chỉnh kết hợp phần khung đế phay CNC 3 trục đầm chắc cùng phần thân vỏ In 3D linh hoạt.",
      details: "Sự giao thoa giữa cơ khí cắt gọt CNC 3 trục và công nghệ in 3D hiện đại từ QIDI Max 4 & Snapmaker U1, tạo nên dòng sản phẩm mang dấu ấn riêng của Gia Hào One (giahaoone.com • giahao.vn)."
    },
    en: {
      title: "Hybrid CNC Milled Frame & 3D Printed Assemblies",
      categoryLabel: "HYBRID 3D & CNC",
      machine: "QIDI Max 4 + Snapmaker U1 + 3-Axis CNC",
      material: "CNC Aluminum + 3D Engineering Polymers",
      dimensions: "Integrated Design",
      summary: "Complete product assemblies uniting a rigid 3-axis CNC milled metal base with ergonomic 3D printed enclosures.",
      details: "A signature synergy of subtractive 3-axis CNC machining and additive manufacturing from QIDI Max 4 & Snapmaker U1, created exclusively by Gia Hào One (giahaoone.com • giahao.vn)."
    }
  }
];

/**
 * BẢNG DỮ LIỆU CHẤT LIỆU ĐA NGÔN NGỮ (VI & EN)
 */
const MATERIALS_DATA = {
  "3d": {
    vi: [
      {
        name: "Nhựa ABS / ASA Kỹ Thuật",
        type: "QIDI Max 4",
        features: "Chịu nhiệt độ cao, cứng cáp, chịu va đập mạnh, ASA bền màu ngoài trời",
        tolerance: "Buồng nhiệt kín ổn định",
        usage: "Vỏ hộp kỹ thuật, chi tiết chịu nhiệt, phụ kiện ngoài trời"
      },
      {
        name: "Nhựa Sợi Carbon (PA-CF / PETG-CF)",
        type: "QIDI Max 4",
        features: "Siêu cứng vững, trọng lượng nhẹ, bề mặt nhám mờ Carbon sang trọng",
        tolerance: "Kết cấu chịu tải",
        usage: "Giá đỡ chịu lực, ngàm kẹp cơ khí, khung sườn sản phẩm"
      },
      {
        name: "Nhựa PETG Bền Bỉ & Kháng Ẩm",
        type: "QIDI Max 4 & Snapmaker U1",
        features: "Dẻo dai, chịu lực uốn tốt, chống ẩm và bền bỉ trong môi trường thực tế",
        tolerance: "Bề mặt bóng mịn",
        usage: "Hộp bảo vệ mạch, gá kẹp đàn hồi, khay chứa dụng cụ"
      },
      {
        name: "Nhựa PLA+ Thẩm Mỹ Cao",
        type: "Snapmaker U1",
        features: "Độ sắc nét chi tiết cao, góc cạnh rõ ràng, màu sắc hiện đại",
        tolerance: "Đường nét tinh xảo",
        usage: "Phụ kiện bàn làm việc, đế đỡ thiết bị, mô hình cơ khí"
      },
      {
        name: "Nhựa Dẻo Đàn Hồi TPU",
        type: "QIDI Max 4 & Snapmaker U1",
        features: "Đàn hồi êm ái như cao su, chống trượt, giảm chấn và chống trầy xước",
        tolerance: "Đàn hồi linh hoạt",
        usage: "Chân đế chống rung, đệm lót bảo vệ, khớp nối mềm"
      }
    ],
    en: [
      {
        name: "Engineering ABS / ASA",
        type: "QIDI Max 4",
        features: "High heat resistance, impact toughness, UV & weather resistance (ASA)",
        tolerance: "Heated Chamber Stability",
        usage: "Technical enclosures, thermal parts, outdoor accessories"
      },
      {
        name: "Carbon Fiber (PA-CF / PETG-CF)",
        type: "QIDI Max 4",
        features: "Exceptional stiffness, lightweight structure, premium matte carbon finish",
        tolerance: "Load-Bearing Structure",
        usage: "Heavy-duty mounts, mechanical clamps, structural frames"
      },
      {
        name: "Durable & Moisture-Resistant PETG",
        type: "QIDI Max 4 & Snapmaker U1",
        features: "High flexural strength, water & chemical resistance, long-term reliability",
        tolerance: "Smooth Gloss Finish",
        usage: "Electronics cases, snap-fit clips, tool organizers"
      },
      {
        name: "Aesthetic Precision PLA+",
        type: "Snapmaker U1",
        features: "Crisp surface detail, sharp geometric edges, modern color palette",
        tolerance: "Fine Contour Detail",
        usage: "Desk accessories, device stands, kinetic models"
      },
      {
        name: "Flexible Elastomer TPU",
        type: "QIDI Max 4 & Snapmaker U1",
        features: "Rubber-like elasticity, anti-slip grip, shock absorption & abrasion resistance",
        tolerance: "Flexible Cushioning",
        usage: "Anti-vibration feet, protective bumpers, flexible couplings"
      }
    ]
  },
  cnc: {
    vi: [
      {
        name: "Nhôm Hợp Kim 6061",
        type: "Phay CNC 3 Trục",
        features: "Cứng cáp, nhẹ, tản nhiệt nhanh, chống oxy hóa và bề mặt kim loại sang trọng",
        tolerance: "Phay nguyên khối (Unibody)",
        usage: "Khung đế sản phẩm, mặt bích, vỏ nhôm, chi tiết chịu lực"
      },
      {
        name: "Đồng Thau / Đồng Đỏ",
        type: "Phay CNC 3 Trục",
        features: "Đầm chắc, sắc ánh kim nổi bật, dẫn nhiệt và dẫn điện tuyệt vời",
        tolerance: "Hoàn thiện sắc sảo",
        usage: "Chi tiết điểm nhấn cao cấp, đế tản nhiệt, bạc lót trục"
      },
      {
        name: "Nhựa Kỹ Thuật POM (Delrin)",
        type: "Phay CNC 3 Trục",
        features: "Độ cứng cao, ma sát thấp, tự bôi trơn, chịu mài mòn cơ học vượt trội",
        tolerance: "Chuẩn xác lắp ghép",
        usage: "Bánh răng truyền động, con lăn, khớp trượt cơ khí"
      },
      {
        name: "Acrylic (Mica Kỹ Thuật) & Bakelite",
        type: "Phay CNC 3 Trục",
        features: "Acrylic trong suốt như pha lê; Bakelite cách điện và chịu nhiệt cao",
        tolerance: "Phay cạnh sắc nét",
        usage: "Nắp che trong suốt lộ cơ khí, tấm đế cách điện"
      }
    ],
    en: [
      {
        name: "6061 Aluminum Alloy",
        type: "3-Axis CNC Mill",
        features: "High strength-to-weight ratio, rapid heat dissipation, premium metallic finish",
        tolerance: "Unibody Milled",
        usage: "Product bases, mounting flanges, aluminum housings"
      },
      {
        name: "Brass / Pure Copper",
        type: "3-Axis CNC Mill",
        features: "Solid weight, warm metallic luster, superior thermal & electrical conductivity",
        tolerance: "Precision Surface",
        usage: "Signature metallic accents, heatsinks, bushings"
      },
      {
        name: "Engineering POM (Delrin)",
        type: "3-Axis CNC Mill",
        features: "High rigidity, low friction coefficient, self-lubricating & wear-resistant",
        tolerance: "Tight Mechanical Fit",
        usage: "Precision gears, guide rollers, sliding mechanisms"
      },
      {
        name: "Optical Acrylic & Bakelite",
        type: "3-Axis CNC Mill",
        features: "Crystal-clear transparency (Acrylic); electrical & thermal insulation (Bakelite)",
        tolerance: "Clean Milled Edges",
        usage: "Transparent display covers, insulated mounting plates"
      }
    ]
  }
};

/**
 * TRẠNG THÁI HIỆN TẠI (Hỗ trợ tham số ?lang=en cho Googlebot / Hreflang SEO)
 */
const urlLangParam = new URLSearchParams(window.location.search).get("lang");
let currentLang =
  urlLangParam === "en" || urlLangParam === "vi"
    ? urlLangParam
    : localStorage.getItem("giahaoone_lang") || "vi";
let currentCategory = "all";
let currentSearch = "";
let currentMaterialTab = "3d";
let currentAdvisorProfile = "pacf";
let currentStudioFinish = "blue";

/**
 * HÀM TẠO HÌNH MINH HỌA STUDIO CHO TỪNG SẢN PHẨM
 */
function getProductVisualHTML(product) {
  const localized = product[currentLang] || product.vi;
  if (product.imageUrl && product.imageUrl.trim() !== "") {
    return `<img src="${product.imageUrl}" alt="${localized.title}" loading="lazy" />`;
  }

  const svgs = {
    "qidi-enclosure": `
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0071e3" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="#5e5ce6" stop-opacity="0.08"/>
          </linearGradient>
        </defs>
        <g transform="translate(160, 100)">
          <rect x="-85" y="-52" width="170" height="104" rx="22" fill="url(#g1)" stroke="#0071e3" stroke-width="2"/>
          <rect x="-64" y="-34" width="128" height="68" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="1.5"/>
          <circle cx="-68" cy="-36" r="3.5" fill="#0071e3"/>
          <circle cx="68" cy="-36" r="3.5" fill="#0071e3"/>
          <circle cx="-68" cy="36" r="3.5" fill="#0071e3"/>
          <circle cx="68" cy="36" r="3.5" fill="#0071e3"/>
          <circle cx="0" cy="0" r="18" fill="none" stroke="#0071e3" stroke-width="2"/>
        </g>
      </svg>`,
    "qidi-carbon": `
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(160, 100)" fill="none">
          <circle cx="0" cy="0" r="58" fill="rgba(0,113,227,0.1)" stroke="#0071e3" stroke-width="2"/>
          <circle cx="0" cy="0" r="42" stroke="currentColor" stroke-opacity="0.25" stroke-width="1.5" stroke-dasharray="6 5"/>
          <circle cx="0" cy="0" r="20" fill="rgba(94,92,230,0.15)" stroke="#5e5ce6" stroke-width="2.2"/>
          <circle cx="-32" cy="0" r="5" stroke="#0071e3" stroke-width="1.8"/>
          <circle cx="32" cy="0" r="5" stroke="#0071e3" stroke-width="1.8"/>
          <circle cx="0" cy="-32" r="5" stroke="#0071e3" stroke-width="1.8"/>
          <circle cx="0" cy="32" r="5" stroke="#0071e3" stroke-width="1.8"/>
        </g>
      </svg>`,
    "snapmaker-part": `
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(160, 102)" fill="none">
          <polygon points="0,-60 64,-20 40,50 -40,50 -64,-20" fill="rgba(0,163,155,0.12)" stroke="#00a39b" stroke-width="2" stroke-linejoin="round"/>
          <polygon points="0,-60 64,-20 0,14 -64,-20" fill="rgba(0,113,227,0.14)" stroke="#0071e3" stroke-width="1.8" stroke-linejoin="round"/>
          <circle cx="0" cy="-12" r="22" stroke="#0071e3" stroke-width="1.8"/>
        </g>
      </svg>`,
    "cnc-unibody": `
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(160, 102)" fill="none">
          <polygon points="0,-64 92,-22 92,34 0,76 -92,34 -92,-22" fill="rgba(0,113,227,0.12)" stroke="#0071e3" stroke-width="2" stroke-linejoin="round"/>
          <polygon points="0,-64 92,-22 0,20 -92,-22" fill="rgba(94,92,230,0.12)" stroke="#5e5ce6" stroke-width="1.8" stroke-linejoin="round"/>
          <ellipse cx="0" cy="-22" rx="28" ry="14" stroke="#0071e3" stroke-width="2.2"/>
          <line x1="0" y1="20" x2="0" y2="76" stroke="#0071e3" stroke-width="2"/>
        </g>
      </svg>`,
    "cnc-pom": `
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(70, 50)" fill="none">
          <rect x="0" y="68" width="180" height="28" rx="8" fill="rgba(0,113,227,0.15)" stroke="#0071e3" stroke-width="2"/>
          <path d="M22,68 V18 M46,68 V18 M70,68 V18 M94,68 V18 M118,68 V18 M142,68 V18 M158,68 V18" stroke="#5e5ce6" stroke-width="4" stroke-linecap="round"/>
        </g>
      </svg>`,
    "hybrid-assembly": `
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(160, 100)" fill="none">
          <rect x="-78" y="-44" width="72" height="88" rx="16" fill="rgba(0,113,227,0.12)" stroke="#0071e3" stroke-width="2"/>
          <circle cx="-42" cy="0" r="18" stroke="#0071e3" stroke-width="2"/>
          <rect x="6" y="-44" width="72" height="88" rx="16" fill="rgba(0,163,155,0.12)" stroke="#00a39b" stroke-width="2"/>
          <circle cx="42" cy="0" r="18" stroke="#00a39b" stroke-width="2"/>
          <line x1="-6" y1="0" x2="6" y2="0" stroke="currentColor" stroke-width="2.5"/>
        </g>
      </svg>`
  };

  return svgs[product.svgType] || svgs["cnc-unibody"];
}

/**
 * CẬP NHẬT BỘ SO SÁNH VẬT LIỆU TƯƠNG TÁC (MATERIAL ADVISOR)
 */
function renderAdvisorProfile(profileKey) {
  currentAdvisorProfile = ADVISOR_PROFILES[profileKey] ? profileKey : "pacf";
  const profile = ADVISOR_PROFILES[currentAdvisorProfile];
  const loc = profile[currentLang] || profile.vi;

  const machineEl = document.getElementById("adv-machine");
  const nameEl = document.getElementById("adv-name");
  const descEl = document.getElementById("adv-desc");
  if (machineEl) machineEl.textContent = loc.machine;
  if (nameEl) nameEl.textContent = loc.name;
  if (descEl) descEl.textContent = loc.desc;

  const valStrength = document.getElementById("val-strength");
  const barStrength = document.getElementById("bar-strength");
  const valHeat = document.getElementById("val-heat");
  const barHeat = document.getElementById("bar-heat");
  const valFinish = document.getElementById("val-finish");
  const barFinish = document.getElementById("bar-finish");

  if (valStrength) valStrength.textContent = `${profile.strength}%`;
  if (barStrength) barStrength.style.width = `${profile.strength}%`;
  if (valHeat) valHeat.textContent = `${profile.heat}%`;
  if (barHeat) barHeat.style.width = `${profile.heat}%`;
  if (valFinish) valFinish.textContent = `${profile.finish}%`;
  if (barFinish) barFinish.style.width = `${profile.finish}%`;
}

/**
 * ÁP DỤNG MÀU SẮC STUDIO FINISH SWATCHES
 */
function applyStudioFinish(finishKey) {
  currentStudioFinish = STUDIO_FINISHES[finishKey] ? finishKey : "blue";
  const cfg = STUDIO_FINISHES[currentStudioFinish];
  const stageCard = document.getElementById("interactive-stage-card");
  if (stageCard) {
    stageCard.style.setProperty("--stage-primary", cfg.primary);
    stageCard.style.setProperty("--stage-secondary", cfg.secondary);
    stageCard.style.setProperty("--stage-tertiary", cfg.tertiary);
  }

  const dict = I18N_DICT[currentLang];
  const labelEl = document.getElementById("swatch-active-name");
  if (labelEl && dict[cfg.labelKey]) {
    labelEl.textContent = dict[cfg.labelKey];
  }
}

/**
 * ÁP DỤNG NGÔN NGỮ TOÀN TRANG (VI / EN)
 */
function applyLanguage(lang) {
  currentLang = I18N_DICT[lang] ? lang : "vi";
  localStorage.setItem("giahaoone_lang", currentLang);
  document.documentElement.setAttribute("lang", currentLang);

  const dict = I18N_DICT[currentLang];
  document.title = dict.page_title;

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  applyStudioFinish(currentStudioFinish);
  renderAdvisorProfile(currentAdvisorProfile);
  renderProducts();
  renderMaterialsTable(currentMaterialTab);
}

/**
 * KHỞI TẠO THÔNG TIN CẤU HÌNH LÊN GIAO DIỆN
 */
function applySiteConfig() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const zaloUrl = `https://zalo.me/${SITE_CONFIG.phoneRaw}`;
  const zaloCard = document.getElementById("contact-zalo-card");
  const displayZalo = document.getElementById("display-zalo");
  const floatZalo = document.getElementById("float-zalo");
  if (zaloCard) zaloCard.href = zaloUrl;
  if (displayZalo) displayZalo.textContent = `${SITE_CONFIG.phoneDisplay} (zalo.me/${SITE_CONFIG.phoneRaw})`;
  if (floatZalo) floatZalo.href = zaloUrl;

  const phoneCard = document.getElementById("contact-phone-card");
  const displayPhone = document.getElementById("display-phone");
  const floatPhone = document.getElementById("float-phone");
  if (phoneCard) phoneCard.href = `tel:${SITE_CONFIG.phoneRaw}`;
  if (displayPhone) displayPhone.textContent = SITE_CONFIG.phoneDisplay;
  if (floatPhone) floatPhone.href = `tel:${SITE_CONFIG.phoneRaw}`;
}

/**
 * HIỂN THỊ DANH SÁCH SẢN PHẨM & BỘ LỌC
 */
function updateCategoryCounts() {
  document.getElementById("count-all").textContent = PRODUCTS_DATA.length;
  document.getElementById("count-3d").textContent = PRODUCTS_DATA.filter(p => p.category === "3d-printing").length;
  document.getElementById("count-cnc").textContent = PRODUCTS_DATA.filter(p => p.category === "cnc-milling").length;
  const hybridEl = document.getElementById("count-hybrid");
  if (hybridEl) {
    hybridEl.textContent = PRODUCTS_DATA.filter(p => p.category === "hybrid").length;
  }
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const dict = I18N_DICT[currentLang];
  const query = currentSearch.trim().toLowerCase();

  const filtered = PRODUCTS_DATA.filter(item => {
    const loc = item[currentLang] || item.vi;
    const matchCat = currentCategory === "all" || item.category === currentCategory;
    const matchText =
      !query ||
      loc.title.toLowerCase().includes(query) ||
      loc.material.toLowerCase().includes(query) ||
      loc.summary.toLowerCase().includes(query) ||
      loc.machine.toLowerCase().includes(query);
    return matchCat && matchText;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>${dict.empty_search} <strong>"${currentSearch}"</strong>.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(product => {
      const loc = product[currentLang] || product.vi;
      return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-card-header">
          <span class="product-eyebrow">${loc.categoryLabel}</span>
          <h3 class="product-title">${loc.title}</h3>
        </div>
        <div class="product-thumb">
          ${getProductVisualHTML(product)}
        </div>
        <p class="product-summary">${loc.summary}</p>
        <div class="product-chips">
          <span class="chip">${loc.material}</span>
          <span class="chip">${loc.dimensions}</span>
        </div>
        <div class="product-footer">
          <span class="product-machine">${loc.machine}</span>
          <span class="product-cta-pill">
            <span>${dict.card_explore}</span>
            <i data-lucide="plus"></i>
          </span>
        </div>
      </article>
    `;
    })
    .join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }

  grid.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-product-id");
      openProductModal(id);
    });
  });
}

/**
 * MODAL CHI TIẾT SẢN PHẨM (PHONG CÁCH APPLE STORE SHEET)
 */
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const loc = product[currentLang] || product.vi;
  const dict = I18N_DICT[currentLang];
  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-visual-box">
        ${getProductVisualHTML(product)}
      </div>
      <div>
        <span class="product-eyebrow">${loc.categoryLabel}</span>
        <h3 id="modal-title" style="font-size:1.5rem;font-weight:800;letter-spacing:-0.025em;margin:6px 0 12px;">
          ${loc.title}
        </h3>
        <p style="color:var(--text-secondary);font-size:0.95rem;line-height:1.6;">
          ${loc.details}
        </p>

        <div class="modal-spec-list">
          <div class="modal-spec-item">
            <span>${dict.modal_sys}</span>
            <strong>${loc.machine}</strong>
          </div>
          <div class="modal-spec-item">
            <span>${dict.modal_mat}</span>
            <strong>${loc.material}</strong>
          </div>
          <div class="modal-spec-item">
            <span>${dict.modal_feat}</span>
            <strong>${loc.dimensions}</strong>
          </div>
          <div class="modal-spec-item">
            <span>${dict.modal_contact}</span>
            <strong>Zalo ${SITE_CONFIG.phoneDisplay}</strong>
          </div>
        </div>

        <button type="button" class="btn-pill btn-pill-primary btn-pill-full" id="modal-quote-btn">
          <i data-lucide="message-circle"></i>
          <span>${dict.modal_cta}</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  if (window.lucide) {
    window.lucide.createIcons();
  }

  document.getElementById("modal-quote-btn").addEventListener("click", () => {
    closeProductModal();
    const productSelect = document.getElementById("q-product");
    const notesInput = document.getElementById("q-notes");

    if (productSelect) {
      if (product.category === "3d-printing") {
        productSelect.value = "3d";
      } else if (product.category === "cnc-milling") {
        productSelect.value = "cnc";
      } else {
        productSelect.value = "hybrid";
      }
    }

    if (notesInput) {
      notesInput.value = `${dict.modal_prefill_prefix} "${loc.title}" ${dict.modal_prefill_suffix}`;
    }
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) modal.classList.add("hidden");
}

/**
 * HIỂN THỊ BẢNG CHẤT LIỆU SẢN PHẨM
 */
function renderMaterialsTable(tabKey) {
  currentMaterialTab = tabKey || "3d";
  const tbody = document.getElementById("materials-tbody");
  if (!tbody) return;

  const dict = I18N_DICT[currentLang];
  const group = MATERIALS_DATA[currentMaterialTab] || MATERIALS_DATA["3d"];
  const list = group[currentLang] || group.vi || [];
  tbody.innerHTML = list
    .map(
      row => `
      <tr>
        <td class="mat-name" data-label="${dict.th_mat}">${row.name}</td>
        <td data-label="${dict.th_sys}"><span class="mat-badge">${row.type}</span></td>
        <td data-label="${dict.th_feat}">${row.features}</td>
        <td data-label="${dict.th_finish}">${row.tolerance}</td>
        <td data-label="${dict.th_app}">${row.usage}</td>
      </tr>
    `
    )
    .join("");
}

/**
 * KHỞI TẠO TƯƠNG TÁC STUDIO 3D VIEWPORT (XOAY 3D, CHẾ ĐỘ XEM, ĐỔI MÀU)
 */
function initInteractiveStudioStage() {
  const stageCard = document.getElementById("interactive-stage-card");
  const viewport = document.getElementById("stage-viewport");
  const wrapper = document.getElementById("stage-rotate-wrapper");
  if (!stageCard || !viewport || !wrapper) return;

  // 1. Chuyển đổi chế độ hiển thị: Studio / Wireframe / Toolpath
  document.querySelectorAll(".mode-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mode-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.getAttribute("data-view-mode") || "studio";
      stageCard.setAttribute("data-stage-mode", mode);
    });
  });

  // 2. Chọn màu chất liệu hoàn thiện (Finish Swatches)
  document.querySelectorAll(".swatch-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      document.querySelectorAll(".swatch-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      applyStudioFinish(dot.getAttribute("data-finish"));
    });
  });

  // 3. Kéo chuột hoặc Chạm vuốt trên iPad/Điện thoại để xoay góc nhìn 3D
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let rotX = 0;
  let rotY = 0;

  viewport.addEventListener("pointerdown", e => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    wrapper.style.transition = "none";
  });

  window.addEventListener("pointermove", e => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    rotY = Math.max(-24, Math.min(24, dx * 0.14));
    rotX = Math.max(-16, Math.min(16, -dy * 0.12));
    wrapper.style.transform = `rotateX(${rotX.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg) scale(1.02)`;
  });

  window.addEventListener("pointerup", () => {
    if (!isDragging) return;
    isDragging = false;
    wrapper.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
    wrapper.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
}

/**
 * KHỞI TẠO SỰ KIỆN KHI TRANG TẢI XONG
 */
document.addEventListener("DOMContentLoaded", () => {
  applySiteConfig();
  updateCategoryCounts();
  applyLanguage(currentLang);
  initInteractiveStudioStage();

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Sự kiện chuyển đổi ngôn ngữ VI / EN
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      applyLanguage(selectedLang);
    });
  });

  // Sự kiện chọn nhóm vật liệu tương tác (Material Advisor)
  document.querySelectorAll(".adv-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".adv-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderAdvisorProfile(btn.getAttribute("data-mat-profile"));
    });
  });

  // Sự kiện đóng/mở câu hỏi thường gặp (FAQ Accordion)
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      if (!item) return;
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(el => {
        el.classList.remove("open");
        const q = el.querySelector(".faq-question");
        if (q) q.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Chế độ Sáng (Light Mode) mặc định & Space Black (Dark Mode)
  const savedTheme = localStorage.getItem("giahaoone_apple_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("giahaoone_apple_theme", next);
    });
  }

  // Menu trên điện thoại (Tự động đóng khi chọn mục hoặc chạm ra ngoài)
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.getElementById("navbar");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", e => {
      e.stopPropagation();
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
    document.addEventListener("click", e => {
      if (navbar && !navbar.contains(e.target)) {
        navLinks.classList.remove("open");
      }
    });
  }

  // Lọc danh mục sản phẩm (Segmented Control)
  document.querySelectorAll(".segment-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".segment-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Link nhảy nhanh từ Bento Grid lên Bộ lọc sản phẩm
  document.querySelectorAll("[data-filter-jump]").forEach(link => {
    link.addEventListener("click", () => {
      const targetCat = link.getAttribute("data-filter-jump");
      const targetBtn = document.querySelector(`.segment-btn[data-category="${targetCat}"]`);
      if (targetBtn) targetBtn.click();
    });
  });

  // Tìm kiếm sản phẩm
  const searchInput = document.getElementById("product-search");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentSearch = e.target.value;
      renderProducts();
    });
  }

  // Chuyển tab bảng chất liệu
  document.querySelectorAll(".mat-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mat-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderMaterialsTable(btn.getAttribute("data-mat-tab"));
    });
  });

  // Đóng Modal
  const modalClose = document.getElementById("modal-close");
  const modalBackdrop = document.getElementById("product-modal");
  if (modalClose) modalClose.addEventListener("click", closeProductModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", e => {
      if (e.target === modalBackdrop) closeProductModal();
    });
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeProductModal();
  });

  // Xử lý Form nhắn tin hỏi thông tin sản phẩm qua Zalo
  const quoteForm = document.getElementById("quote-form");
  const feedbackEl = document.getElementById("quote-feedback");
  if (quoteForm) {
    quoteForm.addEventListener("submit", e => {
      e.preventDefault();
      const dict = I18N_DICT[currentLang];
      const name = document.getElementById("q-name").value.trim();
      const phone = document.getElementById("q-phone").value.trim();
      const productSelect = document.getElementById("q-product");
      const productLine = productSelect.options[productSelect.selectedIndex].text;
      const quantity = document.getElementById("q-quantity").value.trim() || "1";
      const notes = document.getElementById("q-notes").value.trim() || "---";

      const message =
        currentLang === "en"
          ? [
              `[PRODUCT INQUIRY — GIA HÀO ONE]`,
              `- Customer: ${name} (${phone})`,
              `- Product Line: ${productLine}`,
              `- Quantity: ${quantity}`,
              `- Message: ${notes}`
            ].join("\n")
          : [
              `[LIÊN HỆ SẢN PHẨM — GIA HÀO ONE]`,
              `- Khách hàng: ${name} (${phone})`,
              `- Dòng sản phẩm: ${productLine}`,
              `- Số lượng: ${quantity}`,
              `- Nội dung: ${notes}`
            ].join("\n");

      if (navigator.clipboard) {
        navigator.clipboard.writeText(message).catch(() => {});
      }

      feedbackEl.classList.remove("hidden");
      feedbackEl.innerHTML = `
        <strong>${dict.feedback_copied}</strong> ${dict.feedback_guide}<br/>
        <div style="margin-top:10px;">
          <a href="https://zalo.me/${SITE_CONFIG.phoneRaw}" target="_blank" rel="noopener" class="btn-pill btn-pill-primary btn-pill-sm">
            ${dict.feedback_open_zalo} ${SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      `;
    });
  }

  // Khởi chạy hiệu ứng tương tác chuột & cảm ứng kiểu antigravity.google
  initAntigravityEffects();
});

/**
 * ============================================================================
 * HIỆU ỨNG TƯƠNG TÁC CHUỘT & CẢM ỨNG KIỂU ANTIGRAVITY.GOOGLE
 * ============================================================================
 */
function bindInteractiveCards() {
  const cards = document.querySelectorAll(
    ".product-card, .bento-card, .stage-card, .info-tile, .inquiry-card, .material-advisor-card"
  );

  cards.forEach(card => {
    if (card.dataset.agBound === "1") return;
    card.dataset.agBound = "1";

    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.style.setProperty("--spotlight-opacity", "1");

      if (
        card.classList.contains("product-card") ||
        card.classList.contains("bento-card")
      ) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3.5;
        const rotateY = ((x - centerX) / centerX) * 3.5;
        card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
        card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--spotlight-opacity", "0");
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

function initAntigravityEffects() {
  bindInteractiveCards();

  const productsGrid = document.getElementById("products-grid");
  if (productsGrid) {
    const observer = new MutationObserver(() => bindInteractiveCards());
    observer.observe(productsGrid, { childList: true });
  }

  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  if (!isTouchDevice) {
    document.querySelectorAll(".btn-pill").forEach(btn => {
      btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        btn.style.transform = `translate(${(dx * 0.16).toFixed(1)}px, ${(dy * 0.16).toFixed(1)}px) scale(1.02)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }

  const canvas = document.getElementById("antigravity-canvas");
  const aura = document.getElementById("cursor-aura");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const palette = ["#0071e3", "#5e5ce6", "#00a39b", "#4285f4", "#9b51e0"];
  const mouse = {
    x: width / 2,
    y: height / 2,
    vx: 0,
    vy: 0,
    active: false
  };
  const auraPos = { x: width / 2, y: height / 2 };

  const particleCount = Math.min(70, Math.floor((width * height) / 19000));
  const particles = Array.from({ length: particleCount }, () => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    return {
      x,
      y,
      originX: x,
      originY: y,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 2.6 + 1.4,
      isCapsule: Math.random() > 0.55,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.015,
      color: palette[Math.floor(Math.random() * palette.length)]
    };
  });

  const sparks = [];
  const ripples = [];

  function triggerShockwave(x, y) {
    ripples.push({
      x,
      y,
      radius: 8,
      maxRadius: 180,
      alpha: 0.55
    });

    particles.forEach(p => {
      const dx = p.x - x;
      const dy = p.y - y;
      const dist = Math.hypot(dx, dy);
      if (dist < 220 && dist > 1) {
        const force = ((220 - dist) / 220) * 6.5;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }
    });
  }

  window.addEventListener("mousemove", e => {
    mouse.vx = e.clientX - mouse.x;
    mouse.vy = e.clientY - mouse.y;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;

    const speed = Math.hypot(mouse.vx, mouse.vy);
    if (speed > 2.5 && sparks.length < 70) {
      sparks.push({
        x: mouse.x + (Math.random() - 0.5) * 14,
        y: mouse.y + (Math.random() - 0.5) * 14,
        vx: mouse.vx * 0.08 + (Math.random() - 0.5) * 1.1,
        vy: mouse.vy * 0.08 - Math.random() * 1.2 - 0.3,
        radius: Math.random() * 2.8 + 1.2,
        alpha: 0.85,
        color: palette[Math.floor(Math.random() * palette.length)]
      });
    }
  });

  window.addEventListener("mousedown", e => {
    triggerShockwave(e.clientX, e.clientY);
  });

  // Hỗ trợ tương tác chạm trên iPad và Điện thoại
  window.addEventListener(
    "touchstart",
    e => {
      if (e.touches && e.touches.length > 0) {
        const t = e.touches[0];
        mouse.x = t.clientX;
        mouse.y = t.clientY;
        mouse.active = true;
        triggerShockwave(t.clientX, t.clientY);
      }
    },
    { passive: true }
  );

  function animate() {
    ctx.clearRect(0, 0, width, height);

    auraPos.x += (mouse.x - auraPos.x) * 0.14;
    auraPos.y += (mouse.y - auraPos.y) * 0.14;
    if (aura && !isTouchDevice) {
      aura.style.transform = `translate3d(${auraPos.x.toFixed(1)}px, ${auraPos.y.toFixed(1)}px, 0)`;
    }

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const baseAlpha = isDark ? 0.45 : 0.32;
    const interactionRadius = 210;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.originX += p.vx;
      p.originY += p.vy;

      if (p.originX < 0 || p.originX > width) p.vx *= -1;
      if (p.originY < 0 || p.originY > height) p.vy *= -1;

      if (mouse.active) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < interactionRadius && dist > 1) {
          const factor = (interactionRadius - dist) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * factor * 3.2 - Math.sin(angle) * factor * 1.4;
          p.y += Math.sin(angle) * factor * 3.2 + Math.cos(angle) * factor * 1.4;

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = factor * (isDark ? 0.28 : 0.18);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      p.x += (p.originX - p.x) * 0.05;
      p.y += (p.originY - p.y) * 0.05;
      p.angle += p.spin;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = baseAlpha;

      if (p.isCapsule) {
        const w = p.size * 3.4;
        const h = p.size * 1.35;
        ctx.beginPath();
        ctx.roundRect(-w / 2, -h / 2, w, h, h / 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.alpha -= 0.018;

      if (s.alpha <= 0) {
        sparks.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.alpha;
      ctx.fill();
      ctx.restore();
    }

    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += (r.maxRadius - r.radius) * 0.12;
      r.alpha -= 0.018;

      if (r.alpha <= 0.01) {
        ripples.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#0071e3";
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = r.alpha;
      ctx.stroke();
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  animate();
}
