// Jungjae Lee, Personal Portfolio


// Navigation
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav_links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
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