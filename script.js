document.addEventListener("DOMContentLoaded", () => {
    // Select all interactive buttons with data-target attributes
    const navButtons = document.querySelectorAll("[data-target]");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const pageTarget = button.getAttribute("data-target");

            if (pageTarget) {
                // Navigate to the specified URL/Page
                window.location.href = pageTarget;
            }
        });
    });
});
