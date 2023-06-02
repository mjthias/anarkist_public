function toggleReadMoreAccordion() {
    const accordion = document.querySelector(`[data-accordion="${event.target.dataset.target}"]`);
    accordion.classList.toggle("max-h-104");
}

function toggleBurgerMenu() {
    const burger = document.querySelector("#burger");
    const burgerClose = document.querySelector("#burger-close");
    burger.classList.toggle("rotate-180");
    burgerClose.classList.toggle("rotate-180");
    burger.querySelector("svg").classList.toggle("opacity-0");
    burgerClose.querySelector("svg").classList.toggle("opacity-0");

    const menu = document.querySelector(".burger-menu");
    menu.classList.toggle("!translate-x-0");
}