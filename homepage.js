const menuItems = [
  { name: "ĐỀ XUẤT CHỦ TRƯƠNG", url: "https://google.com",image: "/assets/de_xuat_chu_truong.png" },
  { name: "ĐỀ XUẤT", url: "https://google.com",image: "/assets/de_xuat_tai_san.png" },
  { name: "NHẬP TÀI SẢN", url: "https://google.com",image: "/assets/nhap_tai_san.png" },
  { name: "XUẤT TÀI SẢN", url: "https://google.com",image: "/assets/xuat_tai_san.png" },
  { name: "TỒN TÀI SẢN", url: "https://google.com",image: "/assets/ton_tai_san.png" },
  { name: "LUÂN CHUYỂN", url: "https://google.com",image: "/assets/luan_chuyen_tai_san.png" },
  { name: "ĐỊNH GIÁ TÀI SẢN", url: "https://google.com",image: "/assets/dinh_gia_tai_san.png" },
  { name: "THU HỒI", url: "https://google.com",image: "/assets/thu_hoi_tai_san.png" },
  { name: "THANH LÝ", url: "https://google.com",image: "/assets/thanh_ly.png" },
  { name: "BÁN TÀI SẢN", url: "https://google.com",image: "/assets/sale_assets.png" },
  { name: "THUÊ TÀI SẢN", url: "https://google.com",image: "/assets/thue_tai_san.png" },
  { name: "MƯỢN TÀI SẢN", url: "https://google.com",image: "/assets/muon_tai_san.png" },
  { name: "TÍNH KHẤU HAO", url: "https://google.com",image: "/assets/tinh_khau_hao.png" },
  { name: "VÒNG ĐỜI TÀI SẢN", url: "https://google.com",image: "/assets/vong_doi_tai_san.png" },
  { name: "BÁO CÁO", url: "https://google.com",image: "/assets/bao_cao.png" },
];

function createMenuItems() {
  const container = document.querySelector(".menu-container");
  if (!container) {
    console.error("Container element not found");
    return;
  }
  const menuContainer = document.getElementById("menuContainer");
  menuItems.forEach((item, index) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    menuItem.innerHTML = `
      <a href="${item.url}" class= "menu-link" target="_blank" rel="noopener noreferrer">
          <div class="icon-circle">
              <img src="${item.image}" alt="${item.name}">
          </div>
          <span>${item.name}</span>
      </a>`;

    // menuItem.style.animation = `orbit 20s linear infinite; animation-delay: ${
    //   -3.33 * index
    // }s;`;
    menuContainer.appendChild(menuItem);
    const angle = (index * (360 / menuItems.length) * Math.PI) / 180;
    // const angle = index * (360 / menuItems.length);
    menuItem.style.transform = `rotate(${angle}deg) translateX(200px) rotate(-${angle}deg)`;

    // Add animation
    menuItem.style.animation = `orbit 20s linear infinite`;
    // Add delay to each item
    menuItem.style.animationDelay = `${-index * (20 / menuItems.length)}s`;
    // menuItem.style.animationDirection = "reverse";
    });

    document.querySelectorAll(".menu-item").forEach((item) => {
      item.addEventListener("mouseover", () => {
        // item.style.animationPlayState = "paused";
        // document.querySelectorAll(".menu-container").
        document.querySelectorAll(".menu-item").forEach((menuItem) => {
          menuItem.style.animationPlayState = "paused";
          // menuItem.target.style.transform = 'scale(1.5)';
        });
      });
      item.addEventListener("mouseout", () => {
        // item.style.animationPlayState = "running";
        // event.target.style.transform = 'scale(1)';
        document.querySelectorAll(".menu-item").forEach((menuItem) => {
          menuItem.style.animationPlayState = "running";
        });
      });
    });

    // document.querySelectorAll(".menu-item").forEach((item) => {
    //   item.addEventListener("mouseover", (event) => {
    //     event.target.style.animationPlayState = "paused";
    //     event.target.style.transform = 'scale(1.2)';
    //   });
    // });
    // menuItem.style.animationPlayState = "paused";
    // console.log(menuItem);
  ;

  const mobileMenu = document.querySelector(".mobile-menu");
  menuItems.forEach((item) => {
    const mobileItem = document.createElement("a");
    mobileItem.href = item.url;
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

createMenuItems();
setTimeout(() => {
  document.querySelectorAll(".menu-item").forEach((item) => {
    window.onload = () => {
      item.style.animationPlayState = "running";
    }
  });
}, 5000);
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
