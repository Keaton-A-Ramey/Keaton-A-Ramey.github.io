document.addEventListener('DOMContentLoaded', function() {
const items = document.querySelectorAll('.timeline-item');

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const run = () => {
    items.forEach(item => {
    if (isElementInViewport(item)) {
        item.classList.add('in-view');
    }
    });
};

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
});
