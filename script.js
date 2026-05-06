// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal functions
function openModal() {
    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
