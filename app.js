// cat function
const catSound = document.getElementById('cat-sound');
// const playCat = document.getElementById('play-cat');
// playCat.addEventListener('click', ()=>{
//     catSound.play();
// });
const cat = document.getElementById('cat');
cat.addEventListener('click', ()=>{
  catSound.play();
});
// dog function
const dogSound = document.getElementById('dog-sound');
const dog = document.getElementById('dog');
dog.addEventListener('click', ()=>{
dogSound.play();
});

// horse funstion
const horseSound = document.getElementById('horse-sound');
const horse = document.getElementById('horse');
horse.addEventListener('click', ()=> {
  horseSound.play();
});

// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
