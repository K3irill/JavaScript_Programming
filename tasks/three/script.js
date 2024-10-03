const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const button = document.getElementById("button");

button.addEventListener("mouseover", () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const maxLeft = windowWidth - buttonWidth;
    const maxTop = windowHeight - buttonHeight;

    button.style.left = random(0, maxLeft) + "px";
    button.style.top = random(0, maxTop) + "px";
});
