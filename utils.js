const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');

export function horseThings() {
    horseSound.play ();
    myh1.textContent = "Horse";
}
export function dogThings() {
    dogSound.play ();
    myh1.textContent = "Dog";
}
export function catThings() {
    catSound.play ();
    myh1.textContent = "Cat";
}