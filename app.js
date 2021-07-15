
const h1El = document.getElementById('animal-name');
const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');

console.log(
    h1El,
    horseEl,
    dogEl,
    catEl,
    horseSound,
    dogSound,
    catSound,
);

horseEl.addEventListener('click', () => {
    horseSound.play ();
    myh1.textContent = "Horse";
});

dogEl.addEventListener('click', () => {
    dogSound.play ();
    myh1.textContent = "Dog";
});

catEl.addEventListener('click', () => {
    catSound.play ();
    myh1.textContent = "Cat";
});