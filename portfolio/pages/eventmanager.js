// Tryb ciemny
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Zmiana koloru cząsteczek przy zmianie trybu
    const particleColor = document.body.classList.contains('dark-mode') ? "#90caf9" : "#007bff";

    particlesJS("particles-js", {
        particles: {
            number: { value: 60 },
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
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
});

// Galeria zdjęć z efektem powiększenia
const images = document.querySelectorAll('.gallery-wrapper img');
const fullscreenOverlay = document.createElement('div');
fullscreenOverlay.className = 'fullscreen-overlay';
document.body.appendChild(fullscreenOverlay);

const fullscreenImage = document.createElement('img');
fullscreenOverlay.appendChild(fullscreenImage);

const closeButton = document.createElement('div');
closeButton.className = 'close-btn';
closeButton.innerHTML = '✖';
fullscreenOverlay.appendChild(closeButton);

images.forEach((img) => {
    img.addEventListener('click', function () {
        fullscreenImage.src = img.src;
        fullscreenOverlay.style.display = 'flex';
    });
});

closeButton.addEventListener('click', function () {
    fullscreenOverlay.style.display = 'none';
});

// Efekt tła - particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.15 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});

// Efekt animacji elementów przy przewijaniu (Scroll Reveal)

function revealOnScroll() {
    const elements = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        // Jeśli element ma już klasę "show", nie animujemy go ponownie
        if (element.classList.contains('show')) return;

        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Uruchomienie na starcie, aby wykryć już widoczne elementy



document.addEventListener('DOMContentLoaded', () => {
    const galleryContent = document.querySelector('.gallery-content');
    const images = document.querySelectorAll('.gallery-content img');
    const leftBtn = document.querySelector('.gallery-btn.left');
    const rightBtn = document.querySelector('.gallery-btn.right');
    const galleryTitle = document.querySelector('.gallery h2'); // Nowy element dla tekstu

    let index = 0;

    // Funkcja aktualizująca tekst w <h2>
    function updateGalleryTitle() {
        const currentImage = images[index];
        galleryTitle.textContent = currentImage.getAttribute('alt');
    }

    // Funkcja przewijania galerii
    function updateGallery() {
        const imageWidth = images[0].clientWidth + 15;
        galleryContent.style.transform = `translateX(-${index * imageWidth}px)`;
        updateGalleryTitle(); // Aktualizacja tekstu nad galerią
    }

    rightBtn.addEventListener('click', () => {
        if (index < images.length - 1) {
            index++;
        } else {
            index = 0;  // Powrót na początek po ostatnim zdjęciu
        }
        updateGallery();
    });

    leftBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = images.length - 1;  // Powrót na koniec po pierwszym zdjęciu
        }
        updateGallery();
    });

    // Powiększenie zdjęć po kliknięciu
    images.forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.className = 'fullscreen-overlay';
            overlay.innerHTML = `
                <img src="${img.src}" alt="${img.alt}" />
                <div class="close-btn">❌</div>
            `;
            document.body.appendChild(overlay);

            overlay.querySelector('.close-btn').addEventListener('click', () => {
                document.body.removeChild(overlay);
            });

            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                }
            });
        });
    });

    // Ustawienie pierwszego tekstu na start
    updateGalleryTitle();
});

