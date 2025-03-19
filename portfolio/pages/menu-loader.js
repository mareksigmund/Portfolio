document.addEventListener('DOMContentLoaded', function () {
    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            const menuContainer = document.createElement('div');
            menuContainer.innerHTML = html;
            document.body.insertBefore(menuContainer, document.body.firstChild);
        })
        .catch(error => console.error('Błąd ładowania menu:', error));
});
