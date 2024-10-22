["dragover", "drop"].forEach(function (event) {
    document.addEventListener(event, function (evt) {
        evt.preventDefault();
        return false;
    });
});

const uploadZone = document.querySelector(".upload-zone");
const uploadButton = document.querySelector(".upload-button");
const filesList = document.querySelector(".custom-input__files-list");
console.log(uploadZone);
let FILES_ARRAY = [];
const regex = /\.(jpeg|jpg|png|svg)$/i;

uploadZone.addEventListener("dragenter", (event) => {
    uploadButton.classList.add("zone-active");
});
uploadZone.addEventListener("dragleave", function () {
    uploadButton.classList.remove("zone-active");
});
uploadZone.addEventListener("drop", (event) => {
    uploadButton.classList.remove("zone-active");
    const files = event.dataTransfer?.files;

    if (files) {
        const remainingSlots = 5 - FILES_ARRAY.length;

        if (files.length > remainingSlots) {
            alert(
                `Ограничение 5 файлов. Вы можете добавить ещё ${remainingSlots} файл(а/ов).`
            );
            return;
        }

        Array.from(files).forEach((file) => {
            if (regex.test(file.name)) {
                if (FILES_ARRAY.length < 5) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const fileData = {
                            name: file.name,
                            type: file.type,
                            content: e.target.result,
                        };
                        FILES_ARRAY.push(fileData);
                        filesList.append(displayFile(file));
                    };
                    reader.readAsDataURL(file);
                }
            } else {
                alert(
                    "Неверный формат файла. Допустимые форматы: jpeg, jpg, png, svg"
                );
            }
        });
    }
});
function displayFile(file) {
    const fileItem = document.createElement("li");
    const filePreview = document.createElement("img");
    const fileTitle = document.createElement("p");
    const fileFormat = document.createElement("p");

    fileTitle.textContent = file.name;
    fileFormat.textContent = file.type;

    const reader = new FileReader();
    reader.onload = function (event) {
        filePreview.src = event.target.result;
        filePreview.style.maxWidth = "80px";
        filePreview.style.maxHeight = "80px";
        fileItem.prepend(filePreview);
    };
    reader.readAsDataURL(file);

    fileItem.classList.add("custom-input__files-item");
    fileItem.append(fileTitle);
    fileItem.append(fileFormat);

    return fileItem;
}
