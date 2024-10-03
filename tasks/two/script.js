const accordions = document.querySelectorAll(".accordion");

accordions.forEach((item) => {
    item.addEventListener("click", () => {
        accordions.forEach((accordion) => {
            if (accordion !== item) {
                accordion
                    .querySelector(".panel")
                    .classList.remove("panel--opened");
            }
        });
        item.querySelector(".panel").classList.toggle("panel--opened");
    });
});
