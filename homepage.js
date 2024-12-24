const menuItems = [
  {
    name: "ĐỀ XUẤT CHỦ TRƯƠNG",
    url: "https://google.com",
    image: "/assets/de_xuat_chu_truong.png",
  },
  {
    name: "ĐỀ XUẤT",
    url: "https://google.com",
    image: "/assets/de_xuat_tai_san.png",
  },
  {
    name: "NHẬP TÀI SẢN",
    url: "https://google.com",
    image: "/assets/nhap_tai_san.png",
  },
  {
    name: "XUẤT TÀI SẢN",
    url: "https://google.com",
    image: "/assets/xuat_tai_san.png",
  },
  {
    name: "TỒN TÀI SẢN",
    url: "https://google.com",
    image: "/assets/ton_tai_san.png",
  },
  {
    name: "LUÂN CHUYỂN",
    url: "https://google.com",
    image: "/assets/luan_chuyen_tai_san.png",
  },
  {
    name: "ĐỊNH GIÁ TÀI SẢN",
    url: "https://google.com",
    image: "/assets/dinh_gia_tai_san.png",
  },
  {
    name: "THU HỒI",
    url: "https://google.com",
    image: "/assets/thu_hoi_tai_san.png",
  },
  {
    name: "THANH LÝ",
    url: "https://google.com",
    image: "/assets/thanh_ly.png",
  },
  {
    name: "BÁN TÀI SẢN",
    url: "https://google.com",
    image: "/assets/sale_assets.png",
  },
  {
    name: "THUÊ TÀI SẢN",
    url: "https://google.com",
    image: "/assets/thue_tai_san.png",
  },
  {
    name: "MƯỢN TÀI SẢN",
    url: "https://google.com",
    image: "/assets/muon_tai_san.png",
  },
  {
    name: "TÍNH KHẤU HAO",
    url: "https://google.com",
    image: "/assets/tinh_khau_hao.png",
  },
  {
    name: "VÒNG ĐỜI TÀI SẢN",
    url: "https://google.com",
    image: "/assets/vong_doi_tai_san.png",
  },
  { name: "BÁO CÁO", url: "https://google.com", image: "/assets/bao_cao.png" },
];

function createMenuItems() {
  const container = document.querySelector(".menu-container");
  if (!container) {
    console.error("Container element not found");
    return;
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.style.position = "absolute";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.pointerEvents = "none";
  // container.appendChild(svg);
  const circleGroup = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  svg.appendChild(circleGroup);

  const mainCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  mainCircle.setAttribute("cx", "50%");
  mainCircle.setAttribute("cy", "50%");
  mainCircle.setAttribute("r", "170");
  mainCircle.setAttribute("fill", "none");
  mainCircle.setAttribute("stroke", "#333");
  mainCircle.setAttribute("stroke-width", "2");
  mainCircle.setAttribute("stroke-dasharray", "5,5");
  circleGroup.appendChild(mainCircle);
  container.appendChild(svg);

  const bigCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  bigCircle.setAttribute("cx", "50%");
  bigCircle.setAttribute("cy", "50%");
  bigCircle.setAttribute("r", "180");
  bigCircle.setAttribute("fill", "none");
  bigCircle.setAttribute("stroke", "#333");
  bigCircle.setAttribute("stroke-width", "5");
  circleGroup.appendChild(bigCircle);

  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;
  menuItems.forEach((item, index) => {
    // Calculate angle and position
    const angle = (index * 360) / menuItems.length;
    const radians = (angle * Math.PI) / 180;
    const arrowRadius = 260;
    const radius = 350; // Distance from center
    const itemX = centerX + radius * Math.cos(radians);
    const itemY = centerY + radius * Math.sin(radians);

    // Create menu item
    const menuItem = document.createElement("a");
    menuItem.className = "menu-item";
    // menuItem.style.position = "absolute";
    menuItem.style.left = `${itemX}px`;
    menuItem.style.top = `${itemY + 25}px`;
    menuItem.style.transform = `translate(-50%, -50%)`;
    menuItem.href = item.url;
    menuItem.target = "_blank";
    // spell-checker: disable
    menuItem.rel = "noopener noreferrer";
    // spell-checker: enable
    menuItem.innerHTML = `
      <div class="icon-circle">
          <img src="${item.image}" alt="${item.name}">
      </div>
      <span>${index} ${item.name}</span>
    `;
    container.appendChild(menuItem);

    const dotAngle = (angle * Math.PI) / 180;
    const dotX = Math.cos(dotAngle) * 220 + container.offsetWidth / 2;
    const dotY = Math.sin(dotAngle) * 220 + container.offsetHeight / 2;

    // Create connector dot
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "g");
    dot.innerHTML = `
        <circle
          cx="${dotX}"
          cy="${dotY}"
          r="6"
          fill="#27ff72"
          stroke="#27ff72"
          stroke-width="2"
        />
      `;
    circleGroup.appendChild(dot);

    // Create arrow line
    const arrowImg = document.createElement("img");
    arrowImg.src = "/assets/arrow_01.png"; // Đường dẫn tới hình ảnh mũi tên
    arrowImg.className = "arrow";
    arrowImg.style.position = "absolute";
    arrowImg.style.width = "40px"; // Độ dài mũi tên
    arrowImg.style.height = "auto";
    arrowImg.style.transformOrigin = "center center";
    arrowImg.style.left = `${centerX + arrowRadius * Math.cos(radians)}px`;
    arrowImg.style.top = `${centerY + arrowRadius * Math.sin(radians)}px`;
    arrowImg.style.transform = `
      translate(-50%, -50%)
      rotate(${angle}deg)
    `;
    container.appendChild(arrowImg);
  });

  const mobileMenu = document.querySelector(".mobile-menu");
  menuItems.forEach((item) => {
    const mobileItem = document.createElement("a");
    // spell-checker: disable
    mobileItem.rel = "noopener noreferrer";
    mobileItem.href = item.url;
    // spell-checker: enable
    mobileItem.target = "_blank";
    mobileItem.rel = "noopener noreferrer";
    mobileItem.className = "mobile-menu-item";
    mobileItem.innerHTML = `
          <div class="icon-circle">
              <img src="${item.image}" alt="${item.name}">
          </div>
          <span>${item.name}</span>
      `;
    mobileMenu.appendChild(mobileItem);
  });
}

// function createArrow(
//   svg,
//   centerX,
//   centerY,
//   targetX,
//   targetY,
//   colorStart,
//   colorEnd
// ) {
//   // Tạo gradient màu
//   const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
//   const gradient = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "linearGradient"
//   );
//   gradient.setAttribute("id", "arrow-gradient");
//   gradient.setAttribute("x1", "0%");
//   gradient.setAttribute("y1", "0%");
//   gradient.setAttribute("x2", "100%");
//   gradient.setAttribute("y2", "0%");

//   const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
//   stop1.setAttribute("offset", "0%");
//   stop1.setAttribute("style", `stop-color:${colorStart};stop-opacity:1`);
//   const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
//   stop2.setAttribute("offset", "100%");
//   stop2.setAttribute("style", `stop-color:${colorEnd};stop-opacity:1`);

//   gradient.appendChild(stop1);
//   gradient.appendChild(stop2);
//   defs.appendChild(gradient);
//   svg.appendChild(defs);

//   // Định nghĩa mũi tên
//   const arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
//   const arrowSize = 20; // Kích thước đầu mũi tên
//   const angle = Math.atan2(targetY - centerY, targetX - centerX);
//   const arrowX1 = targetX - arrowSize * Math.cos(angle - Math.PI / 6);
//   const arrowY1 = targetY - arrowSize * Math.sin(angle - Math.PI / 6);
//   const arrowX2 = targetX - arrowSize * Math.cos(angle + Math.PI / 6);
//   const arrowY2 = targetY - arrowSize * Math.sin(angle + Math.PI / 6);

//   const pathData = `
//     M ${centerX} ${centerY}
//     L ${targetX} ${targetY}
//     M ${targetX} ${targetY}
//     L ${arrowX1} ${arrowY1}
//     M ${targetX} ${targetY}
//     L ${arrowX2} ${arrowY2}
//   `;
//   arrow.setAttribute("d", pathData);
//   arrow.setAttribute("stroke", "url(#arrow-gradient)");
//   arrow.setAttribute("stroke-width", "2");
//   arrow.setAttribute("fill", "none");
//   svg.appendChild(arrow);
// }


// Gọi hàm sau khi tạo menu
document.addEventListener("DOMContentLoaded", () => {
  createMenuItems(); // Hàm tạo menu vòng tròn
  // addArrowsToMenu(); // Hàm tạo mũi tên
});

// Cập nhật lại vị trí menu khi thay đổi kích thước trình duyệt
window.addEventListener("resize", () => {
  const container = document.querySelector(".container");
  const menuItems = container.querySelectorAll(".menu-item");
  const radius = Math.min(container.offsetWidth, container.offsetHeight) * 0.35;
  const totalItems = menuItems.length;
  const angleStep = (2 * Math.PI) / totalItems;

  menuItems.forEach((item, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const x = radius * Math.cos(angle) + container.offsetWidth / 2 - 50;
    const y = radius * Math.sin(angle) + container.offsetHeight / 2 - 50;
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
  });
});
