let counterValue = 0

const counterEl = document.querySelector('#value')
const buttonElDec = document.querySelector('[data-action = "decrement"]')
const buttonElInc = document.querySelector('[data-action = "increment"]')

function onCounterDec() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

function onCounterInc() {
    counterValue += 1;
    counterEl.textContent = counterValue;
}

buttonElDec.addEventListener('click', onCounterDec)

buttonElInc.addEventListener('click', onCounterInc)