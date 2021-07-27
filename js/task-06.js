const inputEl = document.querySelector('#validation-input');

function onInputBlur(event) {
    if (Number(inputEl.attributes['data-length'].value) === inputEl.value.length) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    }
    else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
}

inputEl.addEventListener('blur',onInputBlur)