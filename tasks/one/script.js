const body = document.body;

function createButton() {
    const button = document.createElement("button");
    button.innerText = "Нажми на меня";
    body.append(button);

    button.addEventListener("click", function handleClick() {
        createButton();
        button.removeEventListener("click", handleClick);
        button.setAttribute("disabled", true);
    });
}
createButton();
