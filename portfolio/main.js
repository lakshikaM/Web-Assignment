let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');

btnMenu.onclick = function(){
    btnMenu.classList.toggle('fa-times');
    Menu.classList.toggle('active')
}

let header = document.querySelector('header');

window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
    btnMenu.classList.remove('fa-times')
    Menu.classList.remove('active')
}

// Dynamic Content
const toggleButton = document.getElementById('toggleButton');
const additionalInfo = document.getElementById('additionalInfo');
additionalInfo.style.display = 'none';

toggleButton.addEventListener('click', () => {
    if (additionalInfo.style.display === 'none') {
        additionalInfo.style.display = 'block';
        toggleButton.textContent = 'Hide';
    } else {
        additionalInfo.style.display = 'none';
        toggleButton.textContent = 'Show More';
    }
});

// slider.js
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function showSlide(index) {
    const slides = slider.querySelectorAll('img');
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slider.childElementCount;
    showSlide(currentIndex);
}

function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + slider.childElementCount) % slider.childElementCount;
    showSlide(currentIndex);
}

prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);

showSlide(currentIndex); // Display the first slide initially


// validation.js
const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

contactForm.addEventListener('submit', function (event) {
    if (!validateEmail(emailInput.value)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }

    if (phoneInput.value && !validatePhoneNumber(phoneInput.value)) {
        event.preventDefault();
        alert('Please enter a valid phone number.');
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhoneNumber(phone) {
    const phonePattern = /^\d{10}$/; // Basic 10-digit phone number pattern
    return phonePattern.test(phone);
}

// smooth-scroll.js
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const offset = targetElement.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

// Event handling (Interactive Button)
const interactiveButton = document.getElementById('interactiveButton');

interactiveButton.addEventListener('click', () => {
    alert('Message Sent!');
    // Add more functionality or actions here
});


