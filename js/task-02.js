const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients')

const itemsEl = ingredients.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  return itemEl;
});

listEl.append(...itemsEl)
