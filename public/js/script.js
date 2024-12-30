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
