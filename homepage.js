const menuItems = [
  { name: "ĐỀ XUẤT CHỦ TRƯƠNG", url: "https://google.com" },
  { name: "ĐỀ XUẤT", url: "https://google.com" },
  { name: "NHẬP TÀI SẢN", url: "https://google.com" },
  { name: "XUẤT TÀI SẢN", url: "https://google.com" },
  { name: "TỒN TÀI SẢN", url: "https://google.com" },
  { name: "LUÂN CHUYỂN", url: "https://google.com" },
  { name: "ĐỊNH GIÁ TÀI SẢN", url: "https://google.com" },
  { name: "THU HỒI", url: "https://google.com" },
  { name: "THANH LÝ", url: "https://google.com" },
  { name: "BÁN TÀI SẢN", url: "https://google.com" },
  { name: "THUÊ TÀI SẢN", url: "https://google.com" },
  { name: "MƯỢN TÀI SẢN", url: "https://google.com" },
  { name: "TÍNH KHẤU HAO", url: "https://google.com" },
  { name: "VÒNG ĐỜI TÀI SẢN", url: "https://google.com" },
  { name: "BÁO CÁO", url: "https://google.com" },
];

function createMenuItems() {
  const container = document.querySelector(".container");
  if (!container) {
    console.error("Container element not found");
    return;
  }
  const radius = 300; // Distance from center
  const totalItems = menuItems.length;
  const angleStep = (2 * Math.PI) / totalItems;

  menuItems.forEach((item, index) => {
    const angle = index * angleStep - Math.PI / 2; // Start from top
    const x = radius * Math.cos(angle) + 400 - 50; // Center X (400) - half item width (50)
    const y = radius * Math.sin(angle) + 400 - 50; // Center Y (400) - half item height (50)

    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.style.left = `${x}px`;
    menuItem.style.top = `${y}px`;
    console.log(x, y, item);
    menuItem.innerHTML = `
      <a href="${item.url}" class= "menu-link" target="_blank" rel="noopener noreferrer">
          <div class="icon-circle">
              <img src="noel3.png" alt="${item.name}">
          </div>
          <span>${item.name}</span>
      </a>`;

    container.appendChild(menuItem);
  });

  const mobileMenu = document.querySelector(".mobile-menu");
  menuItems.forEach((item) => {
    const mobileItem = document.createElement("a");
    mobileItem.href = item.url;
    mobileItem.target = "_blank";
    mobileItem.rel = "noopener noreferrer";
    mobileItem.className = "mobile-menu-item";
    mobileItem.innerHTML = `
          <div class="icon-circle">
              <img src="noel3.png" alt="${item.name}">
          </div>
          <span>${item.name}</span>
      `;
    mobileMenu.appendChild(mobileItem);
  });
}

createMenuItems();

// Recalculate positions on window resize
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
