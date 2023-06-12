export function Sound () {
  
  const soundPlay = new Audio ("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  
  const soundFinished = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')
  
  const soundTrees = new Audio("sounds/Floresta.wav")
  
  const soundRain = new Audio("sounds/Chuva.wav")
  
  const soundCoffee = new Audio("sounds/Cafeteria.wav")
  
  const soundFire = new Audio("sounds/Lareira.wav")
  
  
  function Play () {
    soundPlay.play()
  }
  
  function Final () {
    soundFinished.play()
  }
  
  function Tree() {
    soundTrees.play()
  }
  
  function TreePause() {
    soundTrees.pause()
  }
  
  
  function Rain() {
    soundRain.play()
  }
  
  function RainPause() {
    soundRain.pause()
  }
  
  function Coffee() {
    soundCoffee.play()
  }
  
  function CoffeePause() {
    soundCoffee.pause()
  }
  
  function Fire() {
    soundFire.play()
  }
  
  function FirePause() {
    soundFire.pause()
  }
  
  
  return({
    Tree,
    Rain,
    Coffee, 
    Fire,
    Play,
    Final,
    TreePause,RainPause, CoffeePause, FirePause,
    soundTrees, soundCoffee, soundFire, soundRain
  })
}

