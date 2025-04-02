"use strict";

const dodger = document.getElementById("dodger");
const container = document.getElementById("game");
//Få størrelsen på container og dodger
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
const dodgerWidth = dodger.clientWidth;
const dodgerHeight = dodger.clientHeight;
//Placer dodger i midten af containeren
dodger.style.left = (containerWidth - dodgerWidth) / 2 + "px";
dodger.style.bottom = (containerHeight - dodgerHeight) / 2 + "px";

//Lyd efter figuren rykker sig
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
    if (event.key === "ArrowUp") {
        moveDodgerUp();
    }
    if (event.key === "ArrowDown") {
        moveDodgerDown();
    }
});
// Flyt dodger til venstre
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = (left - 30) + "px";
        if (movementSound) movementSound.play();
    } else {
        if (gameOverSound) gameOverSound.play();
    }
}
// Flyt dodger til højre
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left + dodgerWidth + 30 <= containerWidth) {
        dodger.style.left = (left + 30) + "px";
        if (movementSound) movementSound.play();
    } else {
        if (gameOverSound) gameOverSound.play();
    }
}
// Flyt dodger opad
function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom + dodgerHeight + 30 <= containerHeight) {
        dodger.style.bottom = (bottom + 30) + "px";
        if (movementSound) movementSound.play();
    } else {
        if (gameOverSound) gameOverSound.play();
    }
}
// Flyt dodger nedad
function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = (bottom - 30) + "px";
        if (movementSound) movementSound.play();
    } else {
        if (gameOverSound) gameOverSound.play();
    }
}
// henter lyde fra HTML
const movementSound = document.getElementById("movementSound");
const gameOverSound = document.getElementById("gameOverSound");
