const gameElements = document.querySelectorAll("#game-elemet");
const scissors = gameElements[0];
const rock = gameElements[1];
const paper = gameElements[2];

const resultTitle = document.querySelector("#result-title");
const resultUser = document.querySelector("#result-your span");
const resultComputer = document.querySelector("#result-computer span");

const arrGameEle = ["scissors", "rock", "paper"];

function computer() {
    return Math.floor(Math.random() * 3);
}

console.log(computer());

function logic(value, comp) {
    if (value === 0 && comp === 0) {
        resultUser.textContent = arrGameEle[0];
        resultComputer.textContent = arrGameEle[0];
        return "draw";
    } else if (value === 0 && comp === 1) {
        resultUser.textContent = arrGameEle[0];
        resultComputer.textContent = arrGameEle[1];
        return "fail";
    } else if (value === 0 && comp === 2) {
        resultUser.textContent = arrGameEle[0];
        resultComputer.textContent = arrGameEle[2];
        return "win";
    } else if (value === 1 && comp === 1) {
        resultUser.textContent = arrGameEle[1];
        resultComputer.textContent = arrGameEle[1];
        return "draw";
    } else if (value === 1 && comp === 2) {
        resultUser.textContent = arrGameEle[1];
        resultComputer.textContent = arrGameEle[2];
        return "fail";
    } else if (value === 1 && comp === 0) {
        resultUser.textContent = arrGameEle[1];
        resultComputer.textContent = arrGameEle[0];
        return "win";
    } else if (value === 2 && comp === 2) {
        resultUser.textContent = arrGameEle[2];
        resultComputer.textContent = arrGameEle[2];
        return "draw";
    } else if (value === 2 && comp === 0) {
        resultUser.textContent = arrGameEle[2];
        resultComputer.textContent = arrGameEle[0];
        return "fail";
    } else if (value === 2 && comp === 1) {
        resultUser.textContent = arrGameEle[2];
        resultComputer.textContent = arrGameEle[1];
        return "win";
    }
}

function showResult(result) {
    switch (true) {
        case result == "draw":
            resultTitle.style.color = "green";
            resultTitle.textContent = `${result}!`;
            break;
        case result == "win":
            resultTitle.style.color = "white";
            resultTitle.textContent = `You ${result}!`;
            break;
        case result == "fail":
            resultTitle.style.color = "red";
            resultTitle.textContent = `${result}!`;
            break;

        default:
            break;
    }
}

scissors.addEventListener("click", () => showResult(logic(0, computer())));
rock.addEventListener("click", () => showResult(logic(1, computer())));
paper.addEventListener("click", () => showResult(logic(2, computer())));
