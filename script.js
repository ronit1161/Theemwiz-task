document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const arrowIcon = item.querySelector(".arrow-icon");

    question.addEventListener("click", () => {
      // Close all items
      faqItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".arrow-icon").src = "./assets/images/arrow-down.svg";
      });

      // Toggle current
      item.classList.add("active");
      arrowIcon.src = "./assets/images/arrow-up.svg";
    });
  });

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

// Slider scroll logic
function scrollSlider(direction) {
  const slider = document.getElementById("sliderWrapper");
  const cardWidth = slider.querySelector(".team-card").offsetWidth + 20;

  // Optional: prevent scrolling beyond the end of the slider
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  const newScrollPosition = slider.scrollLeft + direction * cardWidth;

  // Scroll only if within bounds
  if (newScrollPosition >= 0 && newScrollPosition <= maxScroll) {
    slider.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  }
}
