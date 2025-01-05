document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel-placeholder');
    if (carouselContainer) {
        fetch('carousel.html')
            .then(response => response.text())
            .then(data => {
                carouselContainer.innerHTML = data;
                // Load CSS and JS for the carousel
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'carousel.css';
                document.head.appendChild(link);

                const script = document.createElement('script');
                script.src = 'carousel.js';
                document.body.appendChild(script);
            });
    }
});
