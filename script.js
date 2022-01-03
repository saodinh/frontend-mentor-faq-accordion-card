const dropdowns = document.querySelectorAll(".dropdown__title");

dropdowns.forEach((dropdown) =>
    dropdown.addEventListener("click", function () {
        dropdown.parentNode.classList.toggle("active");
    })
);
