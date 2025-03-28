document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in, .slide-in");
    elements.forEach(el => {
        setTimeout(() => {
            el.style.animationDelay = "0.3s";
        }, 500);
    });
});