//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    function removeColor() {
        let selectElement = document.getElementById("colorSelect");
        if (selectElement && selectElement.selectedIndex !== -1) {
            selectElement.remove(selectElement.selectedIndex);
        }
    }

    let removeButton = document.querySelector('input[type="button"][value="Select and Remove"]');
    if (removeButton) {
        removeButton.addEventListener('click', removeColor);
    }
});