// const dropdowns = document.querySelectorAll(".accordion__dropdown");
const dropdownButtons = document.querySelectorAll(".dropdown__title");

dropdownButtons.forEach((dropdownButton) =>
    dropdownButton.addEventListener("click", () => {
        dropdownButton.parentNode.classList.toggle("active");
    })
);
