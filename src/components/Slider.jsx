export function initSlider(root) {
  if (!root) return;

  const track = root.querySelector(".slider-track");
  if (!track) return;

  const cards = Array.from(root.querySelectorAll(".portfolio-card"));
  const dotsContainer = root.querySelector(".slider-dots-container");
  if (!dotsContainer) return;

  let currentIndex = 0;
  let autoSlideInterval;
  const dots = [];

  // Create dots
  dotsContainer.innerHTML = "";
  cards.forEach((card, index) => {
    const dot = document.createElement("div");
    dot.classList.add("slider-dot");
    if (index === currentIndex) dot.classList.add("active");

    dot.addEventListener("click", () => {
      updateSlider(index);
      resetAutoSlide();
    });

    card.addEventListener("click", () => {
      updateSlider(index);
      resetAutoSlide();
    });

    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  const prevBtn = root.querySelector(".prev-btn");
  const nextBtn = root.querySelector(".next-btn");

  prevBtn?.addEventListener("click", () => {
    updateSlider((currentIndex - 1 + cards.length) % cards.length);
    resetAutoSlide();
  });

  nextBtn?.addEventListener("click", () => {
    updateSlider((currentIndex + 1) % cards.length);
    resetAutoSlide();
  });

  function updateSlider(index) {
    currentIndex = index;

    cards.forEach(card =>
      card.classList.remove("active", "prev", "next")
    );

    const prev = (index - 1 + cards.length) % cards.length;
    const next = (index + 1) % cards.length;

    cards[index].classList.add("active");
    cards[prev].classList.add("prev");
    cards[next].classList.add("next");

    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === index)
    );
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      updateSlider((currentIndex + 1) % cards.length);
    }, 3000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  updateSlider(currentIndex);
  startAutoSlide();

  return () => clearInterval(autoSlideInterval);
}
