const button = document.getElementById("button");

const updateButtonText = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    button.textContent = `${windowWidth}x${windowHeight}`;
};
updateButtonText();

window.addEventListener("resize", updateButtonText);
