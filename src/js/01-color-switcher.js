function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector(`[data-start]`);
const stopBtn = document.querySelector(`[data-stop]`);
let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(changeBgColor, 1000)
    startBtn.setAttribute("disabled", "disabled")
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId)
    startBtn.removeAttribute("disabled")
});
function changeBgColor (){
    const random = getRandomHexColor()
    document.body.style.backgroundColor = `${random}`
}