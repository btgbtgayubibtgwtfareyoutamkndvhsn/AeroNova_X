// Image Slider Logic
let currentIndex = 0;

function updateSlider() {
    const images = document.querySelectorAll('.gallery-images img');
    images.forEach((img, index) => {
        if (index === currentIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

function moveSlide(step) {
    const images = document.querySelectorAll('.gallery-images img');
    const totalImages = images.length;

    currentIndex = (currentIndex + step + totalImages) % totalImages; // Wrap around at the ends
    updateSlider();
}

// Automatically change slide every 4 seconds
setInterval(() => moveSlide(1), 4000);

// Initialize slider
updateSlider();

// Menu Toggle
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        valid = false;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    return valid;
}

// Submit form event listener
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Smooth Scroll Logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll smoothly to the section
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
