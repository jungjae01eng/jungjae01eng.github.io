document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Fetch and render publications
    fetchPublications();
});



function toggleImage() {
    const imageContainer = document.getElementById('image-container');
    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }
}



function togglePDF2() {
    const pdfContainer = document.getElementById('pdf-container2');
    if (pdfContainer.style.display === 'none') {
        pdfContainer.style.display = 'block';
    } else {
        pdfContainer.style.display = 'none';
    }
}



function togglePDF1() {
    const pdfContainer = document.getElementById('pdf-container1');
    if (pdfContainer.style.display === 'none') {
        pdfContainer.style.display = 'block';
    } else {
        pdfContainer.style.display = 'none';
    }
}