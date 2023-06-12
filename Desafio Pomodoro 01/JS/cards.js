import { cardTrees, cardRain, cardCoffee, cardFire, inputOne, inputTwo, inputTree, inputFour, number, numberTwo, numberTree, numberFour} from "./variables.js"

number.textContent = inputOne.value
numberTwo.textContent = inputTwo.value
numberTree.textContent = inputTree.value
numberFour.textContent = inputFour.value


function stopAll(sound) {
  
  sound.CoffeePause()
  sound.RainPause()
  sound.FirePause()
  sound.TreePause()
  
  cardCoffee.classList.remove("coffeeColor")
  cardFire.classList.remove("fireColor")
  cardRain.classList.remove("rainColor")
  cardTrees.classList.remove('treesColor')
  
  cardCoffee.classList.remove("colorIcon")
  cardRain.classList.remove("colorIcon")
  cardFire.classList.remove("colorIcon")
  cardTrees.classList.remove("colorIcon")
}

export function Cards({sound}) {

  window.addEventListener('DOMContentLoaded', () => {
    sound.soundTrees.volume = 0.5;
    sound.soundRain.volume = 0.5;
    sound.soundCoffee.volume = 0.5;
    sound.soundFire.volume = 0.5;
  });
  
  inputOne.addEventListener('input', (e) => {
    let volume = inputOne.value / 100
    sound.soundTrees.volume = volume
    number.textContent = inputOne.value
    e.stopPropagation()
  })

  inputTwo.addEventListener('input', (e) => {
   let volume = inputTwo.value / 100
   sound.soundRain.volume = volume
   numberTwo.textContent = inputTwo.value
   e.stopPropagation()
  })

  inputTree.addEventListener('input', (e) => {
    let volume = inputTree.value / 100
    sound.soundCoffee.volume = volume
    numberTree.textContent = inputTree.value
    e.stopPropagation()
   })

   inputFour.addEventListener('input', (e) => {
    let volume = inputFour.value / 100
    sound.soundFire.volume = volume
    numberFour.textContent = inputFour.value
    e.stopPropagation()
   })

  cardTrees.addEventListener("click", (e) => {

    if (e.target !== cardTrees) {
      return }

    if (cardTrees.classList.contains('treesColor')) {
      stopAll(sound)
      return
    }
    stopAll(sound)
    cardTrees.classList.add('treesColor', 'colorIcon')
    sound.Tree()
  })


  cardCoffee.addEventListener("click", (e) => {
    if (e.target !== cardCoffee) {
      return }

    if (cardCoffee.classList.contains('coffeeColor')) {
      stopAll(sound)
      return
    }
    stopAll(sound)
    cardCoffee.classList.add('coffeeColor', 'colorIcon')
    sound.Coffee()
  })

  cardRain.addEventListener("click", (e) => {
    if (e.target !== cardRain) {
      return }

    if (cardRain.classList.contains('rainColor')) {
      stopAll(sound)
      return
    }
    stopAll(sound)
    cardRain.classList.add('rainColor', 'colorIcon')
    sound.Rain()

  })

  cardFire.addEventListener("click", (e) => {
    if (e.target !== cardFire) {
      return }

    if (cardFire.classList.contains('fireColor')) {
      stopAll(sound)
      return
    }
    stopAll(sound)
    cardFire.classList.add('fireColor', 'colorIcon')
    sound.Fire()
  })
}