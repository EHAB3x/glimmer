document.addEventListener("DOMContentLoaded", function () {
  const sidebarHeader = document.querySelector(".sidebar__header");
  const sidebarMainMenu = document.getElementById("sidebarMainMenu");
  const sidebarSubmenus = document.querySelectorAll(".sidebar__submenu");

  // Open sidebar
  document.querySelector(".bars__icon").addEventListener("click", function () {
    document.getElementById("mobileSidebar").style.display = "block";
    sidebarMainMenu.style.display = "block";
    sidebarSubmenus.forEach((el) => (el.style.display = "none"));
    sidebarHeader.classList.remove("hide");
  });

  // Close sidebar
  document
    .getElementById("sidebarCloseBtn")
    .addEventListener("click", function () {
      document.getElementById("mobileSidebar").style.display = "none";
      sidebarHeader.classList.remove("hide");
    });

  // Open submenu
  document.querySelectorAll(".sidebar__submenu-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      sidebarMainMenu.style.display = "none";
      sidebarSubmenus.forEach((el) => (el.style.display = "none"));
      document.getElementById(btn.dataset.submenu).style.display = "block";
      sidebarHeader.classList.add("hide");
    });
  });

  // Back to main menu
  document.querySelectorAll(".sidebar__back-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      sidebarMainMenu.style.display = "block";
      btn.closest(".sidebar__submenu").style.display = "none";
      sidebarHeader.classList.remove("hide");
    });
  });

  // close sidebar when clicking outside panel
  document
    .getElementById("mobileSidebar")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
        sidebarHeader.classList.remove("hide");
      }
    });

  const indicators = document.querySelectorAll(".offers__section .indicator");
  const offerCard = document.querySelector(".offers__section .offer__card");
  const offerTime = document.querySelector(".offers__section .offer__time");

  const images = [
    {
      cardImage: "assets/media/images/offers/product1.png",
      backgroundImage: "assets/media/images/offers/cover1.png",
    },
    {
      cardImage: "assets/media/images/offers/product2.png",
      backgroundImage: "assets/media/images/offers/cover2.jpg",
    },
  ];

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      if (index === 0) {
        indicators[0].classList.add("disabled");
      } else {
        indicators[0].classList.remove("disabled");
      }

      if (index === indicators.length - 1) {
        indicators[indicators.length - 1].classList.add("disabled");
      } else {
        indicators[indicators.length - 1].classList.remove("disabled");
      }

      offerTime.classList.add("fade-out");
      offerCard.classList.add("fade-out");

      setTimeout(() => {
        offerTime.style.backgroundImage = `url(${images[index].backgroundImage})`;
        const productImage = offerCard.querySelector(".product__image img");
        productImage.src = images[index].cardImage;

        offerTime.classList.remove("fade-out");
        offerTime.classList.add("fade-in");
        offerCard.classList.remove("fade-out");
        offerCard.classList.add("fade-in");

        setTimeout(() => {
          offerTime.classList.remove("fade-in");
          offerCard.classList.remove("fade-in");
        }, 300);
      }, 300);

      indicators.forEach((ind) => ind.classList.remove("active"));
      indicator.classList.add("active");
    });
  });
});
