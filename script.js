document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    const year = document.querySelector("[data-current-year]");

    if (navToggle && nav) {
        navToggle.addEventListener("click", function () {
            nav.classList.toggle("open");
        });
    }

    if (year) {
        year.textContent = String(new Date().getFullYear());
    }
});