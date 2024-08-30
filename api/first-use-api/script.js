function fetchImage() {

    function getRandomImage() {
        return fetch("https://api.nekosapi.com/v3/images/random", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                const imageUrl = data.items[0]["image_url"];
                return imageUrl;
            });
    }

    function displayImage(imageUrl) {
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;

        const container = document.getElementById("image-container");
        container.innerHTML = ""; // Очищаем контейнер, чтобы вставлять новые изображения
        container.appendChild(imageElement);
    }

    // Вызов функции с обработкой ошибок
    getRandomImage()
        .then((imageUrl) => {
            displayImage(imageUrl);
        })
        .catch((error) => console.error("Error fetching random image:", error));
}

const button = document.getElementById("fetch-image-button");
button.addEventListener("click", fetchImage);
