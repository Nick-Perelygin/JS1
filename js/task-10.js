function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("[type='number']")
const buttonCreateEl = document.querySelector("[data-create]")
const buttonDestroyEl = document.querySelector("[data-destroy]")
const divBoxesEl = document.querySelector("#boxes")

divBoxesEl.style.display = 'flex';
divBoxesEl.style.flexWrap = 'wrap';

function createBoxes(number) {
  let divArray = [];
  let sizeDefault = 30;
  for (let i = 0; i < number; i += 1) {
    sizeDefault += 10;
    const newDivBoxesEl = document.createElement('div');
    newDivBoxesEl.style.width = `${sizeDefault}px`;
    newDivBoxesEl.style.height = `${sizeDefault}px`;
    newDivBoxesEl.style.marginRight = `10px`;
    newDivBoxesEl.style.backgroundColor = getRandomHexColor();
    divArray.push(newDivBoxesEl);
    divBoxesEl.appendChild(newDivBoxesEl);
  }
  return divBoxesEl.append(...divArray)
}

buttonCreateEl.addEventListener('click', () => {
  if (Number(inputEl.value) >= 1 && Number(inputEl.value) <= 100) {
    createBoxes(Number(inputEl.value))
    inputEl.value = "";
  } else {
    inputEl.value = "";
    return alert("Bведіть число від 1 до 100");
  }
})

buttonDestroyEl.addEventListener('click', () => {
divBoxesEl.innerHTML = "";
})
