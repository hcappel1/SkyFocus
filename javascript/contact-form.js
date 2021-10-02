var contactBtn = document.getElementById("contact-tab");
var contactForm = document.getElementById("contact-form-id");


contactBtn.addEventListener('click', ()=> {
    contactForm.classList.toggle("show-form");
});