const blocks = document.querySelectorAll('.block');
const playerText = document.getElementById('player');
const errorText = document.getElementById('error');
let player = "S";
let character = '1.Player';
let character2 = '2.Player';
let gameOver = false;
let winner;
let counter = 0;



function startGame() {
    playerText.textContent = `${character}'nin Sırası`;

    blocks.forEach(block => block.addEventListener("click", () => chooseArea(block)));
}
function chooseArea(block) {

    if (block.textContent === "") {
        block.textContent = player;
        turnPlayer();
    } else {
        errorText.textContent = "Hatalı İşlem Yaptınız,Boş Değil"
        block.style.border = "2px solid red"
        setTimeout(() => {
            errorText.textContent = ""
            block.style.border = "1px solid black"
        }, 2500)
    }


    checkWin();



    if (gameOver) {
        console.log(counter);
        if (counter % 2 == 0) {
            playerText.textContent = `Oyun Bitti, ${character2} Kazandı`;
            console.log(`${character2} kazandı`);
            blocks.forEach(block => block.style.pointerEvents = 'none');
        }
        else if (counter % 2 == 1) {
            playerText.textContent = `Oyun Bitti, ${character} Kazandı`;
            console.log(`${character} kazandı`);
            blocks.forEach(block => block.style.pointerEvents = 'none');
        }
        if (counter == 9) {
            playerText.textContent = `Oyun Bitti,  Berabere`;
        }

    }

    checkLose();

    if (counter >= 9 && gameover) {
        console.log("beraber");
    }


}
function turnPlayer() {
    if (player === 'S') {
        player = 'O';
        playerText.textContent = `${character}'nun Sırası`;
        counter++;
        return;
    } else if (player == 'O') {
        player = 'S';
        counter++;
        playerText.textContent = `${character2}'nin Sırası`

    }

}
function checkWin() {



    checkRows();
    checkColumns();
    checkDiagonals();
}
function checkLose() {
    checkRows();
    checkColumns();
    checkDiagonals();

}

function checkRows() {
    let row1 = blocks[0].textContent === 'S' && blocks[2].textContent === 'S' && blocks[1].textContent === 'O';
    let row2 = blocks[3].textContent === 'S' && blocks[5].textContent === 'S' && blocks[4].textContent === 'O';
    let row3 = blocks[6].textContent === 'S' && blocks[8].textContent === 'S' && blocks[7].textContent === 'O';


    if (row1 || row2 || row3) {
        gameOver = true;
    }

}
function checkColumns() {
    let col1 = blocks[0].textContent === 'S' && blocks[6].textContent === 'S' && blocks[3].textContent === 'O';
    let col2 = blocks[1].textContent === 'S' && blocks[7].textContent === 'S' && blocks[4].textContent === 'O';
    let col3 = blocks[2].textContent === 'S' && blocks[8].textContent === 'S' && blocks[5].textContent === 'O';


   
    if (col1 || col2 || col3) {
        gameOver = true;
    }

}
function checkDiagonals() {
    let dia1 = blocks[0].textContent === 'S' && blocks[8].textContent === 'S' && blocks[4].textContent === 'O';
    let dia2 = blocks[2].textContent === 'S' && blocks[6].textContent === 'S' && blocks[4].textContent === 'O';

    if (dia1 || dia2) {
        gameOver = true;
    }

}





startGame();




