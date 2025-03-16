document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeIcon");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.classList.replace("fa-moon", "fa-sun");
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.classList.replace("fa-sun", "fa-moon");
        }
    });
});
