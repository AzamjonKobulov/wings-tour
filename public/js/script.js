// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const accordionGroups = document.querySelectorAll(".hs-accordion-group");

  accordionGroups.forEach((group) => {
    const accordions = group.querySelectorAll(".hs-accordion");

    accordions.forEach((accordion) => {
      const toggleButton = accordion.querySelector(".hs-accordion-toggle");
      const content = accordion.querySelector(".hs-accordion-content");
      const icon = toggleButton.querySelector("img");

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
            const otherIcon = otherAccordion.querySelector(
              ".hs-accordion-toggle img"
            );
            otherAccordion.classList.remove("active");
            otherContent.style.height = "0px"; // Close the other accordion
            otherIcon.classList.remove("rotate-45"); // Reset icon rotation
          }
        });

        if (isOpen) {
          // Close the clicked accordion
          accordion.classList.remove("active");
          content.style.height = "0px"; // Close the current accordion
          icon.classList.remove("rotate-45"); // Reset icon rotation
        } else {
          // Open the clicked accordion
          accordion.classList.add("active");
          content.style.height = content.scrollHeight + "px"; // Set content to its full height
          icon.classList.add("rotate-45"); // Rotate the plus icon
        }
      });

      // Set initial height for active accordion
      if (accordion.classList.contains("active")) {
        content.style.height = content.scrollHeight + "px";
      } else {
        content.style.height = "0px";
      }
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

// Initialize Swiper instance
var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".next-review", // Set the correct next button class
    prevEl: ".prev-review", // Set the correct prev button class
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 3.1,
      spaceBetween: 16,
    },
  },
});

const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const links = document.querySelector(".links");
const cart = document.querySelector(".cart");
const menuBtn = document.querySelector(".menu-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("header");
    logo.classList.add("border-gray-200", "shadow-md");
    links.classList.add("border-gray-200", "shadow-md");
    cart.classList.add("border-brand-dark-purple", "shadow-md");
    menuBtn.classList.add("border-gray-200", "shadow-md");
  } else {
    header.classList.remove("header");
    logo.classList.remove("border-gray-200", "shadow-md");
    links.classList.remove("border-gray-200", "shadow-md");
    cart.classList.remove("border-brand-dark-purple", "shadow-md");
    menuBtn.classList.remove("border-gray-200", "shadow-md");
  }
});

// Dropdown
document.addEventListener("DOMContentLoaded", () => {
  const dropdownContainers = document.querySelectorAll("[data-dropdown]");

  dropdownContainers.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-btn");
    const content = dropdown.querySelector(".dropdown-content");
    const svgIcon = button.querySelector(".angle-icon"); // Select the SVG icon
    const links = content.querySelectorAll("a");

    // Toggle dropdown
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = content.classList.contains("open");
      closeAllDropdowns(); // Close other dropdowns
      if (!isOpen) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
        svgIcon.classList.add("rotate-180"); // Add rotation class
      }
    });

    // Close dropdown when clicking on a link
    links.forEach((link) => {
      link.addEventListener("click", () => {
        closeDropdown(content, svgIcon);
      });
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", closeAllDropdowns);

  function closeAllDropdowns() {
    dropdownContainers.forEach((dropdown) => {
      const content = dropdown.querySelector(".dropdown-content");
      const svgIcon = dropdown.querySelector(".angle-icon");
      closeDropdown(content, svgIcon);
    });
  }

  function closeDropdown(content, svgIcon) {
    if (content.classList.contains("open")) {
      content.classList.remove("open");
      content.style.maxHeight = null;
      svgIcon.classList.remove("rotate-180"); // Remove rotation class
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

// Tags container scrolling func
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".tags-container");
  let isDragging = false;
  let startX, scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    container.classList.add("cursor-grabbing");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDragging = false;
    container.classList.remove("cursor-grabbing");
  });

  container.addEventListener("mouseup", () => {
    isDragging = false;
    container.classList.remove("cursor-grabbing");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    container.scrollLeft = scrollLeft - walk;
  });
});

// Select the button and the paragraph
const button = document.getElementById("toggle-info");
const paragraph = document.getElementById("additional-info");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Toggle the "hidden" class on the paragraph
  paragraph.classList.toggle("hidden");

  // Update the button text based on the paragraph's visibility
  if (paragraph.classList.contains("hidden")) {
    button.textContent = "Подробнее"; // Set to "More details"
  } else {
    button.textContent = "Скрыть"; // Set to "Hide"
  }
});

const hideBtnPriceInfo = document.getElementById("toggle-info");
const additionalInfo1 = document.getElementById("additional-info");

hideBtnPriceInfo.addEventListener("click", () => {
  additionalInfo1.classList.toggle("hidden");

  if (additionalInfo1.classList.contains("hidden")) {
    hideBtnPriceInfo.textContent = "Смотреть весь список"; // View Full List
  } else {
    hideBtnPriceInfo.textContent = "Скрыть"; // Hide
  }
});

// Footer Accordion
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll("[data-accordion]");

  accordions.forEach((accordion) => {
    const button = accordion.querySelector(".accordion-btn");
    const content = accordion.querySelector(".accordion-content");
    const icon = accordion.querySelector(".angle-icon");

    button.addEventListener("click", () => {
      // Check if accordion is open
      const isOpen =
        content.style.maxHeight && content.style.maxHeight !== "0px";

      if (isOpen) {
        // Close the accordion
        content.style.maxHeight = "0px";
      } else {
        // Open the accordion (set max-height to content's scrollHeight)
        content.style.maxHeight = content.scrollHeight + "px";
      }

      // Rotate the icon
      icon.classList.toggle("rotate-180");
    });

    // Ensure the accordion starts closed
    content.style.maxHeight = "0px";
  });
});
