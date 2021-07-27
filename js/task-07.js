const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.setAttribute('style', `font-size:${Number(inputEl.value) + 20}px`)

function onInput(event) {
    textEl.attributes['style'].value = `font-size:${Number(inputEl.value) + 20}px`
}

inputEl.addEventListener('input',onInput)