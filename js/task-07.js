const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.setAttribute('style', `font-size:${inputEl.value}px`)

function onInput(event) {
    textEl.attributes['style'].value = `font-size:${inputEl.value}px`
}

inputEl.addEventListener('input',onInput)