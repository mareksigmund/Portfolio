function setMainImage(img) {
  const main = document.getElementById("main-image");
  const caption = document.getElementById("image-caption");
  main.style.opacity = 0;
  setTimeout(() => {
    main.src = img.src;
    main.alt = img.alt;
    caption.textContent = img.alt || "Podgląd widoku";
    main.style.opacity = 1;
  }, 100);

  document
    .querySelectorAll(".gallery-thumbnails img")
    .forEach((t) => t.classList.remove("active-thumbnail"));
  img.classList.add("active-thumbnail");
}

// Obsługa pełnego ekranu
window.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("main-image");
  const modal = document.getElementById("fullscreen-modal");
  const modalImg = document.getElementById("fullscreen-image");

  mainImage.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = mainImage.src;
    modalImg.alt = mainImage.alt;
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
  });
});
