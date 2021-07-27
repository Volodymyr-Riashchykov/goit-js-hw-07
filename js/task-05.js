const inputEl = document.querySelector('#name-input');
const strEl = document.querySelector('#name-output')

function onInputEl(event) {
    strEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        strEl.textContent = 'незнакомец'
    }
}

inputEl.addEventListener('input',onInputEl)