document.addEventListener('DOMContentLoaded', () => {
    // Portfolio Slider Logic
    const track = document.querySelector('.slider-track');
    if (!track) return;

    const cards = Array.from(document.querySelectorAll('.portfolio-card'));
    // Update selector for dots specific container
    const dotsContainer = document.querySelector('.slider-dots-container');
    // If dots container doesn't exist (e.g. older HTML), fallback to main control div temporarily or return
    if (!dotsContainer) return;

    let currentIndex = 1; // Start in the middle (Slide 2)

    // Create Dots
    dotsContainer.innerHTML = '';
    cards.forEach((card, index) => {
        // Dot Logic
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            updateSlider(index);
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);

        // Card Click Logic (Navigate to card on click)
        card.addEventListener('click', () => {
            updateSlider(index);
            resetAutoSlide();
        });
    });

    const dots = Array.from(document.querySelectorAll('.slider-dot'));

    // Arrow Buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            let index = currentIndex - 1;
            if (index < 0) index = cards.length - 1;
            updateSlider(index);
            resetAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            let index = currentIndex + 1;
            if (index >= cards.length) index = 0;
            updateSlider(index);
            resetAutoSlide();
        });
    }

    function updateSlider(index) {
        currentIndex = index;

        // Remove styling transform on track (handled by absolute css now)
        track.style.transform = 'none';

        const total = cards.length;

        // Calculate Indices wrapping around
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;

        // Reset all classes
        cards.forEach(card => {
            card.classList.remove('active', 'prev', 'next');
            // Hide others by default via CSS (opacity 0)
        });

        // Assign Classes
        cards[currentIndex].classList.add('active');
        cards[prevIndex].classList.add('prev');
        cards[nextIndex].classList.add('next');

        // Update Dots
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Auto Rotation Logic
    let autoSlideInterval;

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= cards.length) {
                nextIndex = 0; // Loop back to start
            }
            updateSlider(nextIndex);
        }, 3000); // 3 Seconds
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Initialize
    // Small timeout to ensure layout is computed
    setTimeout(() => updateSlider(currentIndex), 100);
    startAutoSlide();

    // Responsive: Update on resize
    window.addEventListener('resize', () => {
        updateSlider(currentIndex);
    });
});
