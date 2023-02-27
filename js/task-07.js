


const fontSizeEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

textEl.style.fontSize = `${fontSizeEl.value}px`

fontSizeEl.addEventListener("input", () => {
    textEl.style.fontSize = `${fontSizeEl.value}px`
})

