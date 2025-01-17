class CircularMenu {
  constructor() {
    this.menuItems = [
      {
        name: "PHẦN MỀM KHO",
        url: "https://ware.vtcode.vn",
        image: "/assets/1.png",
      },
      {
        name: "PHẦN MỀM TÀI SẢN",
        url: "http://asset.vtcode.vn",
        image: "/assets/2.png",
      },
      {
        name: "PHẦN MỀM ĐẶT PHÒNG",
        url: "http://icool.booknow.vtcode.vn:24600",
        image: "/assets/3.png",
      },
      {
        name: "ĐỒNG HỒ DOANH THU",
        url: "http://icoolpos.vtcode.vn:24600/",
        image: "/assets/4.png",
      },
      {
        name: "APP NHÂN VIÊN",
        url: "http://official.icool.com.vn:8989/",
        image: "/assets/5.png",
      },
      {
        name: "RATING",
        url: "https://rating.icool.com.vn:3443/",
        image: "/assets/6.png",
      },
      {
        name: "CHUÔNG",
        url: "http://callme.icool.com.vn:8989/",
        image: "/assets/7.png",
      },
      {
        name: "CRM",
        url: "https://cms-crm.icool.com.vn",
        image: "/assets/8.png",
      },
      {
        name: "QUẢNG CÁO",
        url: "http://ads.icool.com.vn:8989",
        image: "/assets/9.png",
      },
      {
        name: "ĐẦU MÁY",
        url: "https://google.com",
        image: "/assets/10.png",
      },
      {
        name: "PHẦN MỀM KẾ TOÁN",
        url: "https://google.com",
        image: "/assets/11.png",
      },
      // {
      //   name: "MƯỢN TÀI SẢN",
      //   url: "https://google.com",
      //   image: "/assets/muon_tai_san.png",
      // },
      // {
      //   name: "TÍNH KHẤU HAO",
      //   url: "https://google.com",
      //   image: "/assets/tinh_khau_hao.png",
      // },
      // {
      //   name: "VÒNG ĐỜI TÀI SẢN",
      //   url: "https://google.com",
      //   image: "/assets/vong_doi_tai_san.png",
      // },
      // {
      //   name: "BÁO CÁO",
      //   url: "https://google.com",
      //   image: "/assets/bao_cao.png",
      // },
    ];
  }

  createMenuItems() {
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

    this.menuItems.forEach((item, index) => {
      const angle = (index * 360) / this.menuItems.length;
      const radians = (angle * Math.PI) / 180;
      const arrowRadius = 200;
      const radius = 280;
      const itemX = centerX + radius * Math.cos(radians);
      const itemY = centerY + radius * Math.sin(radians);

      const menuItem = document.createElement("a");
      menuItem.className = "menu-item";
      menuItem.style.left = `${itemX}px`;
      menuItem.style.top = `${itemY + 25}px`;
      menuItem.style.transform = `translate(-50%, -50%)`;
      menuItem.href = item.url;
      menuItem.target = "_blank";
      // menuItem.rel = "opener noreferrer";
      menuItem.innerHTML = `
        <div class="icon-circle">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <span class="text">${item.name}</span>
      `;
      container.appendChild(menuItem);

      const span_index = menuItem.querySelector(".text");
      if (angle > 90 && angle < 270) {
        span_index.style.left = "-29%";
      } else {
        span_index.style.left = "128%";
      }
      if (angle > 250 && angle < 270) {
        span_index.style.top = "-20%";
        span_index.style.left = "50%";
      }
      if (angle > 90 && angle < 100) {
        span_index.style.top = "60%";
        span_index.style.left = "50%";
      }

      const dotAngle = (angle * Math.PI) / 180;
      const dotX = Math.cos(dotAngle) * 160 + container.offsetWidth / 2;
      const dotY = Math.sin(dotAngle) * 160 + container.offsetHeight / 2;

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

      const arrowImg = document.createElement("img");
      arrowImg.src = "/assets/arrow.png";
      arrowImg.className = "arrow";
      arrowImg.style.position = "absolute";
      arrowImg.style.width = "40px";
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

    this.createMobileMenu();
    this.setupResizeHandler();
  }

  createMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    this.menuItems.forEach((item) => {
      const mobileItem = document.createElement("a");
      mobileItem.rel = "noopener noreferrer";
      mobileItem.href = item.url;
      mobileItem.target = "_blank";
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
  debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  setupResizeHandler() {
    const handleResize = debounce(() => {
      const width = window.innerWidth;

      if (width <= 480) {
        // Apply styles for mobile devices
        document.body.classList.add("mobile");
        document.body.classList.remove("tablet", "desktop");
      } else if (width <= 768) {
        // Apply styles for tablets
        document.body.classList.add("tablet");
        document.body.classList.remove("mobile", "desktop");
      } else {
        // Apply styles for desktops
        document.body.classList.add("desktop");
        document.body.classList.remove("mobile", "tablet");
      }
    }, 100);

    window.addEventListener("resize", handleResize);

    // Initial call to set the correct layout
    handleResize();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.createMenuItems();
    });
    document.addEventListener("DOMContentLoaded", () => {
      const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");

      mobileMenuItems.forEach((item) => {
        const iconCircle = item.querySelector(".icon-circle");

        item.addEventListener("mouseenter", () => {
          iconCircle.classList.add("active");
        });

        item.addEventListener("mouseleave", () => {
          iconCircle.classList.remove("active");
        });
      });
    });
  }
}

// Khởi tạo menu
const circularMenu = new CircularMenu();
circularMenu.init();
