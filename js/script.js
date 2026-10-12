const welcomeBtn = document.getElementById("welcomeBtn");

if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function () {
        window.location.href = "portfolio.html";
    });
}

// CONTACT FORM VALIDATION
const form = document.getElementById('contactForm');

if(form){
form.addEventListener('submit', function(e){
 e.preventDefault();

 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const message = document.getElementById('message').value;

 if(name === '' || email === '' || message === ''){
   document.getElementById('formMessage').textContent =
   'Please fill in all fields.';
 } else {
   document.getElementById('formMessage').textContent =
   'Form submitted successfully!';
 }
});
}




