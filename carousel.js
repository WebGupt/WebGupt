const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators li');
let currentIndex = 0;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

setInterval(nextSlide, 2600); // Auto-slide every 2.6 seconds

updateCarousel();
