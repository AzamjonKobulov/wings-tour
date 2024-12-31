// Faq Accordion
document.addEventListener("DOMContentLoaded", () => {
  const accordionGroups = document.querySelectorAll(".hs-accordion-group");

  accordionGroups.forEach((group) => {
    const accordions = group.querySelectorAll(".hs-accordion");

    accordions.forEach((accordion) => {
      const toggleButton = accordion.querySelector(".hs-accordion-toggle");
      const content = accordion.querySelector(".hs-accordion-content");

      toggleButton.addEventListener("click", () => {
        const isOpen = accordion.classList.contains("active");

        // Close all other accordions in the group
        accordions.forEach((otherAccordion) => {
          if (
            otherAccordion !== accordion &&
            otherAccordion.classList.contains("active")
          ) {
            const otherContent = otherAccordion.querySelector(
              ".hs-accordion-content"
            );
            otherAccordion.classList.remove("active");
            otherContent.style.height = otherContent.scrollHeight + "px"; // Set current height to enable smooth transition
            requestAnimationFrame(() => {
              otherContent.style.height = "0px";
            });
          }
        });

        if (isOpen) {
          // Close the clicked accordion
          accordion.classList.remove("active");
          content.style.height = content.scrollHeight + "px"; // Set current height to enable smooth transition
          requestAnimationFrame(() => {
            content.style.height = "0px";
          });
        } else {
          // Open the clicked accordion
          accordion.classList.add("active");

          // Set the height explicitly to enable smooth transition
          content.style.height = content.scrollHeight + "px";
        }
      });

      // Set initial height for active accordion
      if (accordion.classList.contains("active")) {
        content.style.height = content.scrollHeight + "px";
      } else {
        content.style.height = "0px";
      }

      // Transition end event to reset height property to auto for open accordions
      content.addEventListener("transitionend", () => {
        if (accordion.classList.contains("active")) {
          content.style.height = "auto";
        }
      });
    });
  });
});

// Initialize Swiper instance
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".next-review", // Set the correct next button class
    prevEl: ".prev-review", // Set the correct prev button class
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 2.6,
      spaceBetween: 16,
    },
  },
});

const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const links = document.querySelector(".links");
const cart = document.querySelector(".cart");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("header");
    logo.classList.add("border-gray-200", "shadow-md");
    links.classList.add("border-gray-200", "shadow-md");
    cart.classList.add("shadow-md");
  } else {
    header.classList.remove("header");
    logo.classList.remove("border-gray-200", "shadow-md");
    links.classList.remove("border-gray-200", "shadow-md");
    cart.classList.remove("shadow-md");
  }
});

// Dropdown
document.addEventListener("DOMContentLoaded", () => {
  const dropdownContainers = document.querySelectorAll("[data-dropdown]");

  dropdownContainers.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-btn");
    const content = dropdown.querySelector(".dropdown-content");
    const links = content.querySelectorAll("a");

    // Toggle dropdown
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = content.classList.contains("open");
      closeAllDropdowns(); // Close other dropdowns
      if (!isOpen) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });

    // Close dropdown when clicking on a link
    links.forEach((link) => {
      link.addEventListener("click", () => {
        closeDropdown(content);
      });
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", closeAllDropdowns);

  function closeAllDropdowns() {
    dropdownContainers.forEach((dropdown) => {
      const content = dropdown.querySelector(".dropdown-content");
      closeDropdown(content);
    });
  }

  function closeDropdown(content) {
    if (content.classList.contains("open")) {
      content.classList.remove("open");
      content.style.maxHeight = null;
    }
  }
});

// Mob men accordion
document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll("[data-accordion-toggle]");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains("hidden");

      // Close all other accordions if needed
      document.querySelectorAll(".accordion-body").forEach((item) => {
        if (item !== body) {
          item.classList.add("hidden");
          item.previousElementSibling
            .querySelector(".accordion-icon")
            .classList.remove("rotate-180");
        }
      });

      // Toggle current accordion
      if (isOpen) {
        body.classList.remove("hidden");
        header.querySelector(".accordion-icon").classList.add("rotate-180");
      } else {
        body.classList.add("hidden");
        header.querySelector(".accordion-icon").classList.remove("rotate-180");
      }
    });
  });
});

// Mob Menu
const mobMenu = document.getElementById("mob-menu");
const mobMenuOpen = document.getElementById("mob-menu-toggle-btn");
const mobMenuClose = document.getElementById("mob-menu-close-btn");

mobMenuOpen.addEventListener("click", function () {
  mobMenu.classList.remove("-translate-x-full");
  document.body.classList.add("overflow-hidden");
});

mobMenuClose.addEventListener("click", function () {
  mobMenu.classList.add("-translate-x-full");
  document.body.classList.remove("overflow-hidden");
});

const menuLinks = mobMenu.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobMenu.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden");
  });
});
