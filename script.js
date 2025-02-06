let projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

//Source: MDN Web Docs - querySelectorAll
// Link: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

let form = document.getElementById('contact-form');
let confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.style.display = 'none';
    confirmationMessage.style.display = 'block';
});
