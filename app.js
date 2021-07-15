import { catThings, dogThings, horseThings } from "./utils.js";

const h1El = document.getElementById('animal-name');
const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');


horseEl.addEventListener('click', () => {
    horseThings ();
});

dogEl.addEventListener('click', () => {
    dogThings();
});

catEl.addEventListener('click', () => {
    catThings();
});

