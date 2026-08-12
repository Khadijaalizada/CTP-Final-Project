emailjs.init("ASz3B4rvbAmcIvXY9");

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_qtglfwb', 'template_ykt3e55', this)
      .then(function() {
        alert('Seccessfully submitted');
      }, function(error) {
        alert('Error ' + JSON.stringify(error));
      });
  });

  ////////////// Nav-Menu/////////////////

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('active');
});