const counterValue = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener('click', () => {
    counterValue.textContent -= - decrement.textContent;
})

increment.addEventListener('click', () => {
    counterValue.textContent -= - increment.textContent;
})