// JavaScript to toggle the dropdown menu
const dropdownLink = document.querySelector('.universal02-nav_ul .dropdown a');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Close the dropdown if a click occurs anywhere outside of it
document.addEventListener('click', function (event) {
    const isClickInsideDropdown = dropdownContent.contains(event.target);
    const isClickOnDropdownLink = dropdownLink.contains(event.target);
    
    if (!isClickInsideDropdown && !isClickOnDropdownLink) {
        dropdownContent.style.display = 'none';
    }
});