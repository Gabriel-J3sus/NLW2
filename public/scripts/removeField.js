document.querySelector("#delete-time").addEventListener("click", deleteField)

function deleteField() {
    const fieldContainer = document.querySelector('.schedule-item')

    document.querySelector("#schedule-items").removeChild(fieldContainer)
}