const cards = document.querySelectorAll('.box');
const startGame = document.querySelector('.startGame');
let innerBox = document.querySelector('.innerBox');
let container = document.querySelector('.container');
let firstFlip = false;
let firstPick, secondPick;
let score = 0;
let instruction = document.querySelector(".instruction");
let h5 = document.querySelector('h5');
// so before you start to do any thing with you have to assign the class/id etc. from html so you can use it in js, next we can also start to append from js instead of using html and hardcoding


startGame.addEventListener('click', () => {
        innerBox.classList.toggle('hidden');
        container.classList.toggle('hidden');

    })
    // this event listner lets you add the hidden class to the class that you named from linke 1-9... toggle is great because it toggle between the add and remove.. easy for hidden feature

instruction.addEventListener('click', () => {
    h5.classList.toggle('hidden');
})

// add the hidden feature to hid the h5




function flipCard() {
    function checkWin() {
        let win = document.querySelector('.result')
        let hasWon = false
        console.log(win)
        console.log(win.innerText)
        if (win.innerText === '6') {
            hasWon = true
            setTimeout(() => { alert('YOU ARE A WINNER!!!') }, 1000);
        }
        // woot woot, this one was crazy hard but i named invoke the function flipcard which allows the card to flip much more easy the css!!! also this checks to see if the card is a match or a win.  it also sets time the alert message so it doesnt appear in a nano sec.
    }
    this.classList.toggle('flip');
    if (firstFlip === false) {
        firstFlip = true;
        firstPick = this;
    } else {
        firstFlip = false;
        secondPick = this;
        // this determine the first and second flip.. this function is bascially saying if it is the firstflip then this is the first pick or if the first flip is false then this is the second pick.
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

        // new thing we picked up is dataset function, much easier then naming each class and div and trying to queryselect them, this allows me to hardcode the data and pull it out without doing all the other step!!! will deff look into this more.  this line is saying if the first pick is the same as the second then add one point and move innertext of the point to the score board, if this is true we would then remove the event listner of the card pic so they can not pic it again... you also set a time out to remove the flip and have it flipped back.. again super easier then flipping it on css
    }
    checkWin()
}
// checking to win again after all the function.. you actually only need it here but i dont wanna delete the other one because if its aint broken dont fix it.


(function shuffle() {
    cards.forEach(cards => {
        let random = Math.floor(Math.random() * 12);
        cards.style.order = random;
    });
})();

// this lets me call on a shuffle function that allows me to random the card every turn.... times it by 12 because there is now 12 card... did floor so it wont have messy decimal.


cards.forEach(cards => cards.addEventListener('click', flipCard))
    // adding an event listner to add the flip function