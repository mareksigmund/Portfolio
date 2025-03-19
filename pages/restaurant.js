// Przełączanie motywu
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    const particleColor = document.body.classList.contains('dark-mode')
        ? "#ff4081"
        : "#e91e63";

    particlesJS("particles-js", {
        particles: {
            number: { value: 50 },
            color: { value: particleColor },
            shape: { type: "circle" },
            opacity: { value: 0.15 },
            size: { value: 3 },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true
            }
        }
    });
});

// Galeria zdjęć
const images = document.querySelectorAll('.gallery-content img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, idx) => {
        img.style.display = idx === index ? 'block' : 'none';
    });
}

document.querySelector('.gallery-btn.left').addEventListener('click', function () {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

document.querySelector('.gallery-btn.right').addEventListener('click', function () {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});

// Uruchomienie galerii na starcie
showImage(currentIndex);

// Efekt cząsteczek na starcie
particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        color: { value: "#e91e63" },
        shape: { type: "circle" },
        opacity: { value: 0.15 },
        size: { value: 3 },
        move: { enable: true, speed: 1.5 }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-content img');
    const imageTitle = document.querySelector('.image-title');

    let currentIndex = 0;

    function updateTitle() {
        const imageName = images[currentIndex].alt || 'Obraz';
        imageTitle.textContent = imageName;
    }

    document.querySelector('.gallery-btn.left').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images.forEach((img, idx) => img.style.display = idx === currentIndex ? 'block' : 'none');
        updateTitle();
    });

    document.querySelector('.gallery-btn.right').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        images.forEach((img, idx) => img.style.display = idx === currentIndex ? 'block' : 'none');
        updateTitle();
    });

    // Inicjalizacja tytułu na starcie
    updateTitle();
});


// Funkcja do wykrywania elementów na ekranie
function revealOnScroll() {
    const elements = document.querySelectorAll('.hidden');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        // Dodanie klasy "show" tylko raz
        if (elementTop < window.innerHeight - 100 && !element.classList.contains('show')) {
            element.classList.add('show');
        }
    });
}

// Nasłuchiwanie na zdarzenie przewijania
window.addEventListener('scroll', revealOnScroll);

// Uruchomienie funkcji na start, aby wykryć już widoczne elementy
revealOnScroll();

