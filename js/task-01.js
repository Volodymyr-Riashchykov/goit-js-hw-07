const itemsList = document.querySelectorAll('.item');

console.log(`В списке ${itemsList.length} категории.`);

itemsList.forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').textContent}`)
    console.log(`Количество элементов: ${item.querySelectorAll('.item li').length}`)
})