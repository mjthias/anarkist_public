function toggleReadMoreAccordion() {
    const accordion = document.querySelector(`[data-accordion="${event.target.dataset.target}"]`);
    accordion.classList.toggle("max-h-104");
    // if (accordion.getAttribute("data-hidden") == "true") {
    //     accordion.classList.add("max-h-104");
    //     accordion.setAttribute("data-hidden", "false");
    // } else {
    //     accordion.classList.remove("max-h-104");
    //     accordion.setAttribute("data-hidden", "true");
    // }
}