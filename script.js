const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    // Close all items
    faqItems.forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".arrow-icon").src = "./assets/images/arrow-down.svg";
    });

    // Toggle current
    item.classList.add("active");
    item.querySelector(".arrow-icon").src = "./assets/images/arrow-down.svg";
  });
});



// Slider scroll logic
function scrollSlider(direction) {
  const slider = document.getElementById("sliderWrapper");
  const cardWidth = slider.querySelector(".team-card").offsetWidth + 20;
  slider.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}