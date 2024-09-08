window.onload = () => {};
const input = document.querySelector("#input");
input.oninput = function () {
    let value = this.value.trim().toLowerCase();
    let list = document.querySelectorAll(".ol li");

    if (value) {
        list.forEach((element) => {
            
            if (element.innerText.toLowerCase().search(value) == -1) {
                element.classList.add('hidden')
            }
        });
    }else{
        list.forEach(element=>{
            element.classList.remove('hidden')
        })
    }
};
