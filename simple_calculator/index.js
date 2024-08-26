"use scrict";

const inputANode = document.querySelector(".js-input-a");
const inputBNode = document.querySelector(".js-input-b");
const selectOperationNode = document.querySelector(".js-select-operation");
const btnResultNode = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");

btnResultNode.addEventListener("click", function () {
    const a = +inputANode.value;
    const b = +inputBNode.value;
    const operation = selectOperationNode.value;
    const result = calculator({
        a,
        b,
        operation,
    });

    outputNode.innerHTML = `Output: ${result}`;
});
