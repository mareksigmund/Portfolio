// Przełączanie motywu
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

// Galeria zdjęć
const images = document.querySelectorAll('.gallery-content img');
const imageCaption = document.createElement('div');
imageCaption.className = 'image-caption';
document.querySelector('.gallery-content').appendChild(imageCaption);

const fullscreenOverlay = document.createElement('div');
fullscreenOverlay.className = 'fullscreen-overlay';
document.body.appendChild(fullscreenOverlay);

const fullscreenImage = document.createElement('img');
fullscreenOverlay.appendChild(fullscreenImage);

const closeButton = document.createElement('div');
closeButton.className = 'close-btn';
closeButton.innerHTML = '✖';
fullscreenOverlay.appendChild(closeButton);

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, idx) => {
        img.style.display = idx === index ? 'block' : 'none';
        if (idx === index) {
            imageCaption.innerText = img.getAttribute('alt');
        }
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

// Powiększenie zdjęcia na pełnym ekranie
images.forEach((img) => {
    img.addEventListener('click', function () {
        fullscreenImage.src = img.src;
        fullscreenOverlay.style.display = 'flex';
    });
});

closeButton.addEventListener('click', function () {
    fullscreenOverlay.style.display = 'none';
});

// Pokaż pierwszy obraz na start
showImage(currentIndex);

// Efekt cząsteczek na starcie
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        color: { value: "#007bff" },
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


// Funkcja do wykrywania elementów na ekranie
function revealOnScroll() {
    const elements = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        // Dodanie klasy "show", jeśli element jest widoczny na ekranie
        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

// Nasłuchiwanie na zdarzenie przewijania
window.addEventListener('scroll', revealOnScroll);

// Uruchomienie funkcji na start, aby wykryć już widoczne elementy
revealOnScroll();
