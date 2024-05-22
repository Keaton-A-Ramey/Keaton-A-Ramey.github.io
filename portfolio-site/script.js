document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.timeline-item')

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect()
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    const run = () => {
        items.forEach((item) => {
            if (isElementInViewport(item)) {
                item.classList.add('in-view')
            }
        })
    }

    window.addEventListener('load', run)
    window.addEventListener('resize', run)
    window.addEventListener('scroll', run)
})

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
