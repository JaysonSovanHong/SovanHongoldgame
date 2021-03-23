let faceDown = ['C0', 'C0', 'C1', 'C1'];
let firstPick = null;
let secondPick = null;
let score = 0;

let result = document.querySelector('.result').innerText = score;




const handleClick = (id) => {
    if (firstPick === null) {
        firstPick = id
        document.querySelector(`#card${id}`).innerText = faceDown[id]
    } else {
        secondPick = id
        document.querySelector(`#card${id}`).innerText = faceDown[id]
        if (faceDown[firstPick] === faceDown[secondPick]) {
            console.log('one point');
            score++;
        } else {
            console.log('no');
        }
    }
}




document.querySelector("#card0").addEventListener('click', () => {
    handleClick(0)
})
document.querySelector("#card1").addEventListener('click', () => {
    handleClick(1)
})
document.querySelector("#card2").addEventListener('click', () => {
    handleClick(2)
})
document.querySelector("#card3").addEventListener('click', () => {
    handleClick(3)
})