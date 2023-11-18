document.addEventListener('DOMContentLoaded', function () {
    var dropdownItems = document.querySelectorAll('.dropdown-content a');

    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function () {
            item.style.backgroundColor = (item.style.backgroundColor === 'blue') ? 'white' : 'blue';
            item.style.color = (item.style.color === 'white') ? 'black' : 'white';
        });
    });
});
