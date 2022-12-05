function generateRandomNumber() {
    return Math.floor(Math.random()*6+1);
};

function rollDice() {
    let imgs = document.querySelectorAll("img");
    for (i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("src", `./images/dice${generateRandomNumber()}.png`);
    };
}