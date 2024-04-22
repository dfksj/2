// 產生一個介於1到100之間的隨機數字
let targetNumber = Math.floor(Math.random() * 100) + 1;
let guessField = document.getElementById('guessField');
let guessSubmit = document.querySelector('button');
let messageArea = document.querySelector('.message');
let guessCount = 0;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 0) {
        messageArea.textContent = '上次的猜測：';
    }
    messageArea.textContent += userGuess + ' ';

    if (userGuess === targetNumber) {
        messageArea.textContent = '恭喜你！你猜對了！';
        messageArea.style.color = 'green';
        gameOver();
    } else if (guessCount === 9) {
        messageArea.textContent = '遊戲結束！正確答案是 ' + targetNumber;
        messageArea.style.color = 'red';
        gameOver();
    } else {
        messageArea.textContent = '錯誤！';
        messageArea.style.color = 'red';
        if (userGuess < targetNumber) {
            messageArea.textContent += '太低了！';
        } else {
            messageArea.textContent += '太高了！';
        }
        guessCount++;
        guessField.value = '';
    }
}

function gameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '開始新遊戲';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 0;
    messageArea.textContent = '';
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    targetNumber = Math.floor(Math.random() * 100) + 1;
}