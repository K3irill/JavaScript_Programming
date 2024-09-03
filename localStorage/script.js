const button = document.querySelector("button");
const resultBlock = document.querySelector(".results");
const values = document.querySelectorAll("#itext");

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

button.addEventListener("click", requset);

function requset(params) {
  let numPage = values[0].value;
  let limitPage = values[1].value;
  if (numPage < 1 || numPage > 10) {
    return alert(`«Номер страницы вне диапазона от 1 до 10»`);
  } else if (limitPage < 1 || limitPage > 10) {
    return alert(`«Лимит вне диапазона от 1 до 10»`);
  } else {
    let url = `https://jsonplaceholder.typicode.com/photos?_page=${numPage}&_limit=${limitPage}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resultBlock.innerHTML = "";
        data.forEach((photo) => {
          const imgElement = document.createElement("img");
          imgElement.src = photo.thumbnailUrl;
          imgElement.alt = photo.title;
          resultBlock.appendChild(imgElement);
        });
        localStorage.setItem(
          "lastRequest",
          JSON.stringify({ numPage, limitPage, data })
        );
      })
      .catch((err) => console.log("Ошибка запроса: ", err));
  }
}

//
function loadFromLocalStorage() {
  const lastRequest = localStorage.getItem("lastRequest");

  if (lastRequest) {
    const { numPage, limitPage, data } = JSON.parse(lastRequest);

    values[0].value = numPage;
    values[1].value = limitPage;
    resultBlock.innerHTML = "";
    data.forEach((photo) => {
      const imgElement = document.createElement("img");
      imgElement.src = photo.thumbnailUrl;
      imgElement.alt = photo.title;
      resultBlock.appendChild(imgElement);
    });
  }
}
