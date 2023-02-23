const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    if (nameInput.value != '') {
    return nameOutput.textContent = nameInput.value
}
    return nameOutput.textContent = 'Anonymous'
})