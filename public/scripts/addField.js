//searching for the button
document.querySelector('#add-time')
.addEventListener("click", cloneField);

function cloneField() {
    //Duplicating field
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //taking fields
    const fields = newFieldContainer.querySelectorAll('input');

    //for each field clean
    fields.forEach(function (field) {
        field.value = "";
    });

    //print
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
