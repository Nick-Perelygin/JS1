
const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
    if (validationInput.value.length === Number(validationInput.attributes[2].value)) {
        validationInput.classList.remove('invalid');
        return validationInput.classList.add('valid');
    }
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid')
})