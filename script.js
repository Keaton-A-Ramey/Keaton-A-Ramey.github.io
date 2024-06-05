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

function changePDF(pdf) {
    document.getElementById('pdfViewer').src = '../pdfs/' + pdf
}

document.getElementById('run-button').addEventListener('click', function () {
    // Example: output to the terminal
    const output = 'Hello, World!'
    document.getElementById('terminal-output').innerText = output
})
