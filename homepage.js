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
              <img src="noel3.png" alt="${item.name}">
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
      item.addEventListener("mouseover", (event) => {
        item.style.animationPlayState = "paused";
        document.querySelector(".menu-container").style.animationPlayState = "paused";
        event.target.style.transform = 'scale(1.5)';

      });
      item.addEventListener("mouseout", (event) => {
        item.style.animationPlayState = "running";
        event.target.style.transform = 'scale(1)';
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
              <img src="noel3.png" alt="${item.name}">
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
