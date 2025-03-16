document.addEventListener("DOMContentLoaded", () => {
    particlesJS("particles-js", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                attract: { enable: false }
            }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const typewriterElement = document.getElementById("typewriter");
    const cursorElement = document.querySelector(".cursor");

    const textArray = [
        "Cześć! Jestem Marek",
        "Jestem studentem IT i AI",
        "Tworzę aplikacje internetowe",
        "Rozwijam się w obszarze AI i ML"
    ];

    let textIndex = 0;
    let charIndex = 0;

    function typeWriterEffect() {
        if (charIndex < textArray[textIndex].length) {
            typewriterElement.innerHTML += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriterEffect, 100);
        } else {
            cursorElement.classList.add("blink");
            setTimeout(eraseEffect, 2000); 
        }
    }

    function eraseEffect() {
        cursorElement.classList.remove("blink");
        if (charIndex > 0) {
            typewriterElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeWriterEffect, 500); 
        }
    }

    typeWriterEffect();
});
