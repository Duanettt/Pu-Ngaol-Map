const container = document.querySelector('.slideshow');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

    // Scroll step (adjust based on item width)
    const scrollAmount = 200;

    prevButton.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });