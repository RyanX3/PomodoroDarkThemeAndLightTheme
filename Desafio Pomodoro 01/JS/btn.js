import { buttonPlay, buttonStopped, buttonPause, buttonMore, buttonLess, minutesDisplay, secondsDisplay, whiteMode, darkMode, dark } from "./variables.js"


function handleButtons() {
  buttonPlay.classList.toggle("hide")
  buttonStopped.classList.toggle("hide")
  buttonPause.classList.remove("clicked")
}


export function Buttons({ sound,
  countdown,
  pausedTimer,
  clearTimeout,
  updateDisplay,
  originalMinutes,
  originalSeconds }) {


  whiteMode.addEventListener('click', () => {
    darkMode.classList.toggle('hide')
    whiteMode.classList.toggle('hide')
    dark.click()
  })

  darkMode.addEventListener('click', () => {
    whiteMode.classList.toggle('hide')
    darkMode.classList.toggle('hide')
    dark.click()
  })

  buttonPlay.addEventListener('click', () => {
    handleButtons()
    countdown()
    sound.Play()
  })


  buttonPause.addEventListener("click", () => {
    handleButtons()

    minutesDisplay.textContent = originalMinutes
    secondsDisplay.textContent = originalSeconds

    clearTimeout(pausedTimer)
  })

 
  buttonMore.addEventListener("click", () => {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
  
    updateDisplay(minutes += 5, seconds)
  })


  buttonLess.addEventListener("click", () => {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
  
    if (minutes <= 0) {
      minutes
      return
    }

    updateDisplay(minutes -= 5, seconds)
  })
}