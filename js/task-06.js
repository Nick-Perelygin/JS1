const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
    if (validationInput.value.length === 6) {
        return validationInput.classList = "valid"
    }
    return validationInput.classList = "invalid"
})