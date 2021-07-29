const inputEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');
const buttonCreate = document.querySelector('[data-action="render"]');
const buttonClean = document.querySelector('[data-action="destroy"]');

function createBoxes(amount) {
    const array = [];
    const old = boxesEl.querySelectorAll('div').length;
    for (let i = 0; i < amount; i += 1){
        const divEl = document.createElement('div');
        let a = 30 + 10 * (i + old);
        divEl.setAttribute('style', `background-color: rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}); width: ${a}px; height: ${a}px; margin-top: 30px`);
        array.push(divEl)
        }
    boxesEl.append(...array)
}

function destroyBoxes() {
    boxesEl.querySelectorAll('div').forEach(rem => {
        boxesEl.removeChild(rem)
    })
}

function onCleanBoxes() {
    destroyBoxes();
}
    
function onCreateBoxes() {
    createBoxes(inputEl.value)
}

buttonCreate.addEventListener('click',onCreateBoxes)
buttonClean.addEventListener('click', onCleanBoxes)
