const dropdowns = document.querySelectorAll(".accordion__dropdown");
const dropdownButtons = document.querySelectorAll(".dropdown__title");

dropdownButtons.forEach((dropdownButton) =>
    dropdownButton.addEventListener("click", () => {
        if (dropdownButton.parentNode.classList.contains("active"))
            dropdownButton.parentNode.classList.remove("active");
        else {
            // Remove active state from other currently active dropdown. Remove this line if wanting to always open dropdown.
            dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
            dropdownButton.parentNode.classList.add("active");
        }
    })
);
