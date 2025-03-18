document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
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
            imageCaption.innerText = img.getAttribute('alt'); // Dodanie nazwy nad zdjęciem
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
