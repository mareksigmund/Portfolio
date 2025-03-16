document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(item => item.classList.remove("active"));
                const activeItem = [...navItems].find(item => 
                    item.dataset.target === entry.target.id
                );
                activeItem.classList.add("active");
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetSection = document.getElementById(item.dataset.target);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
