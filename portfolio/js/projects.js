const carouselWrapper = document.querySelector('.carousel-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const cardsPerPage = window.innerWidth <= 992 ? 1 : 2;

prevBtn.addEventListener('click', () => {
    carouselWrapper.scrollBy({
        left: -carouselWrapper.clientWidth / cardsPerPage,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    carouselWrapper.scrollBy({
        left: carouselWrapper.clientWidth / cardsPerPage,
        behavior: 'smooth'
    });
});
