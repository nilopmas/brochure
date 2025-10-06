let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentSlideIndex += direction;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);

    setInterval(() => {
        changeSlide(1);
    }, 5000);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    });

    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.addEventListener('loadstart', function() {
            console.log('Loading audio:', this.src);
        });

        audio.addEventListener('canplay', function() {
            console.log('Audio ready to play:', this.src);
        });

        audio.addEventListener('error', function(e) {
            console.error('Audio error:', e, this.src);
        });

        audio.addEventListener('play', function() {
            audioElements.forEach(otherAudio => {
                if (otherAudio !== this) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                }
            });
        });
    });
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            changeSlide(1);
        } else {
            changeSlide(-1);
        }
    }
}

function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.remove('active');
}

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down and past 100px
        header.classList.add('hidden');
    } else {
        // Scrolling up or at top
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

