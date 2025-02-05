let projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

//Source: MDN Web Docs - querySelectorAll
// Link: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
