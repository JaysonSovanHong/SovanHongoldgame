const cards = document.querySelectorAll('.box');
const startGame = document.querySelector('.startGame');
let innerBox = document.querySelector('.innerBox');
let container = document.querySelector('.container');
let firstFlip = false;
let firstPick, secondPick;
let score = 0;



startGame.addEventListener('click', () => {
    innerBox.classList.toggle('hidden');
    container.classList.toggle('hidden');

})






function flipCard() {
    function checkWin() {
        let win = document.querySelector('.result')
        let hasWon = false
        console.log(win)
        console.log(win.innerText)
        if (win.innerText === '6') {
            hasWon = true
            alert('win')
            console.log('won')

        }

    }
    this.classList.toggle('flip');
    if (firstFlip === false) {
        firstFlip = true;
        firstPick = this;
    } else {
        firstFlip = false;
        secondPick = this;

        if (firstPick.dataset.name === secondPick.dataset.name) {
            // console.log('one point');
            score++;
            result = document.querySelector('.result').innerText = score;
            firstPick.removeEventListener('click', flipCard);
            secondPick.removeEventListener('click', flipCard);
        } else {
            setTimeout(() => {
                firstPick.classList.remove('flip');
                secondPick.classList.remove('flip');
            }, 800);
        }


    }
    checkWin()
}



(function shuffle() {
    cards.forEach(cards => {
        let random = Math.floor(Math.random() * 12);
        cards.style.order = random;
    });
})();




cards.forEach(cards => cards.addEventListener('click', flipCard))