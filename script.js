document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.fade-in-card')
    let delay = 0

    cards.forEach((card) => {
        setTimeout(() => {
            card.classList.add('show')
        }, delay)
        delay += 200 // Increase delay for each card
    })
})