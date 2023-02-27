


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body")
const buttonChangeColor = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")


buttonChangeColor.addEventListener("click", () => {
  let color = getRandomHexColor()
  bodyEl.style.backgroundColor = color;
  spanColor.textContent = `${color}`;
})