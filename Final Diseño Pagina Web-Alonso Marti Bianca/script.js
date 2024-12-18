const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slides.length;

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;

    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentIndex].classList.add('active');
}


prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));