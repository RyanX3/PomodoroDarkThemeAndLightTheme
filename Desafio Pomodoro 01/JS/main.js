import { Sound } from "./sounds.js"
import { Buttons } from "./btn.js"
import { Cards } from "./cards.js"
import {buttonPlay,  buttonStopped, buttonPause, minutesDisplay, secondsDisplay} from "./variables.js"

let originalMinutes = minutesDisplay.textContent;
let originalSeconds = secondsDisplay.textContent
let pausedTimer

const sound = Sound()
let cards = Cards({sound}) 

let button = Buttons({ sound,
  countdown,
  pausedTimer,
  clearTimeout,
  updateDisplay,
  originalMinutes,
  originalSeconds})

  function updateDisplay(minutes, seconds) {

    minutesDisplay.textContent = String(minutes).padStart(2, "0") 
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function clearAll() {
    buttonPlay.classList.remove("hide")
    buttonStopped.classList.add("hide")
    
    sound.Final()
    
    minutesDisplay.textContent = originalMinutes
    secondsDisplay.textContent = originalSeconds
  }
  
  function countdown() {
    
    pausedTimer = setTimeout(() => {
      
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      
      if(minutes <= 0 && seconds <= 0 ) {
        clearAll()
        return
      }
      
      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }
      
      updateDisplay(minutes, String(seconds - 1))
      
      countdown()
    }, 1000)}
  
  
  buttonStopped.addEventListener("click", () => {
    buttonPlay.classList.toggle("hide")
    buttonStopped.classList.toggle("hide") 
    
    originalMinutes 
    originalSeconds 
    
    clearTimeout(pausedTimer)
  })
  
  buttonPause.addEventListener("click", () => { 
    buttonStopped.classList.add("hide")
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("click")
    
    clearTimeout(pausedTimer)

    minutesDisplay.textContent = originalMinutes
    secondsDisplay.textContent = originalSeconds 
    
    return
  })
  
  


