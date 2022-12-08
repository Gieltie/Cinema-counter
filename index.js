// document.getElementById("compteur").innerText = 5

// let first = 5;
// let second = 7;
// let count = first + second;
// console.log(count);

// let myAge = 40;
// let humanDogRatio = 7;
// let myDogAge = myAge / humanDogRatio;

// console.log(myDogAge);

let countEl = document.getElementById("compteur");
let saveEl = document.getElementById("save-el");
let count = 0;

function ajout() {
    count += 1;
    countEl.textContent = count;
}

function enleve() {
    count -= 1;
    countEl.textContent = count;
}

function sauve() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count)
    count = 0;
    countEl.textContent = count;
}

function reset() {
    count = 0;
    saveEl.textContent = "";
    countEl.textContent = count;
}