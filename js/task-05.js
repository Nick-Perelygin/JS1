


const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() && nameInput.value !== '') {
    return nameOutput.textContent = nameInput.value
}
    nameOutput.textContent = 'Anonymous'
})