
class CircularMenu {
  constructor() {
    this.menuItems = [
      {
        name: "PHẦN MỀM KHO",
        url: "https://ware.vtcode.vn",
        image: "/assets/de_xuat_chu_truong.png",
      },
      {
        name: "PHẦN MỀM TÀI SẢN",
        url: "http://asset.vtcode.vn",
        image: "/assets/de_xuat_tai_san.png",
      },
      {
        name: "PHẦN MỀM ĐẶT PHÒNG",
        url: "http://icool.booknow.vtcode.vn:24600",
        image: "/assets/nhap_tai_san.png",
      },
      {
        name: "ĐỒNG HỒ DOANH THU",
        url: "http://icoolpos.vtcode.vn:24600/",
        image: "/assets/xuat_tai_san.png",
      },
      {
        name: "APP NHÂN VIÊN",
        url: "http://official.icool.com.vn:8989/",
        image: "/assets/ton_tai_san.png",
      },
      {
        name: "RATING",
        url: "https://rating.icool.com.vn:3443/",
        image: "/assets/luan_chuyen_tai_san.png",
      },
      {
        name: "CHUÔNG",
        url: "http://callme.icool.com.vn:8989/",
        image: "/assets/dinh_gia_tai_san.png",
      },
      {
        name: "CRM",
        url: "https://cms-crm.icool.com.vn",
        image: "/assets/thu_hoi_tai_san.png",
      },
      {
        name: "QUẢNG CÁO",
        url: "http://ads.icool.com.vn:8989",
        image: "/assets/thanh_ly.png",
      },
      // {
      //   name: "BÁN TÀI SẢN",
      //   url: "https://google.com",
      //   image: "/assets/sale_assets.png",
      // },
      // {
      //   name: "THUÊ TÀI SẢN",
      //   url: "https://google.com",
      //   image: "/assets/thue_tai_san.png",
      // },
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
      const arrowRadius = 245;
      const radius = 330;
      const itemX = centerX + radius * Math.cos(radians);
      const itemY = centerY + radius * Math.sin(radians);

      const menuItem = document.createElement("a");
      menuItem.className = "menu-item";
      menuItem.style.left = `${itemX}px`;
      menuItem.style.top = `${itemY + 25}px`;
      menuItem.style.transform = `translate(-50%, -50%)`;
      menuItem.href = item.url;
      menuItem.target = "_blank";
      menuItem.rel = "noopener noreferrer";
      menuItem.innerHTML = `
        <div class="icon-circle">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <span class="text">${item.name}</span>
      `;
      container.appendChild(menuItem);

      const span_index = menuItem.querySelector(".text");
      if (angle > 90 && angle < 270) {
        span_index.style.left = "-30%";
      }
      else{
        span_index.style.left = "130%";
      }
      if (angle > 250 && angle < 270) {
        span_index.style.top = "-20%";
        span_index.style.left = "50%";
      } else if (angle > 90 && angle < 100) {
        span_index.style.top = "60%";
        span_index.style.left = "50%";
      }

      const dotAngle = (angle * Math.PI) / 180;
      const dotX = Math.cos(dotAngle) * 210 + container.offsetWidth / 2;
      const dotY = Math.sin(dotAngle) * 210 + container.offsetHeight / 2;

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
      arrowImg.src = "/assets/arrow_01.png";
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
    this.setupResizeHandler(container);
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

  setupResizeHandler(container) {
    window.addEventListener("resize", () => {
      window.location.reload();
      // const menuItems = container.querySelectorAll(".menu-item");
      // const radius =
      //   Math.min(container.offsetWidth, container.offsetHeight) * 0.35;
      // const totalItems = menuItems.length;
      // const angleStep = (2 * Math.PI) / totalItems;

      // menuItems.forEach((item, index) => {
      //   const angle = index * angleStep - Math.PI / 2;
      //   const x = radius * Math.cos(angle) + container.offsetWidth / 2 - 50;
      //   const y = radius * Math.sin(angle) + container.offsetHeight / 2 - 50;
      //   item.style.left = `${x}px`;
      //   item.style.top = `${y}px`;
      // });
    });
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
