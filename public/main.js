function toggleReadMoreAccordion() {
    const accordion = document.querySelector(`[data-accordion="${event.target.dataset.target}"]`);
    accordion.classList.toggle("max-h-104");
}