let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    const slideWidth = slides[0].clientWidth;
    const newTransformValue = -slideWidth * currentSlide;
    document.querySelector('.slides').style.transform = `translateX(${newTransformValue}px)`;
}
