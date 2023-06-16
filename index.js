
const drumButtons = document.querySelectorAll(".drum");


for (let i = 0; i < drumButtons.length; i++) {

  drumButtons[i].addEventListener("click", function() {

    makeSound(this.innerHTML);

    buttonAnimation(this.innerHTML);

  })

}


document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

})


function makeSound(buttonName) {

  switch (buttonName) {
    case "w": {
      const audio = new Audio('./sounds/tom-1.mp3')
      audio.play()
      break;
    }
    case "a": {
      const audio = new Audio('./sounds/tom-2.mp3')
      audio.play()
      break;
    }
    case "s": {
      const audio = new Audio('./sounds/tom-3.mp3')
      audio.play()
      break;
    }
    case "d": {
      const audio = new Audio('./sounds/tom-4.mp3')
      audio.play()
      break;
    }
    case "j": {
      const audio = new Audio('./sounds/snare.mp3')
      audio.play()
      break;
    }
    case "k": {
      const audio = new Audio('./sounds/crash.mp3')
      audio.play()
      break;
    }
    case "l": {
      const audio = new Audio('./sounds/kick-bass.mp3')
      audio.play()
      break;
    }
    default: console.log(buttonName);
  }

}


function buttonAnimation(buttonName) {
  
  const buttonPressed = document.querySelector(`.${buttonName}`);

  buttonPressed.classList.add("pressed");

  setTimeout(() => {
    buttonPressed.classList.remove("pressed");
  }, 100);

}