const reloadlink = location.href;
function restart() {
    location.reload(reloadlink);
}

document.getElementsByClassName("play")[0].addEventListener('click', () => {
    gamestart = 1;
    document.getElementsByClassName("playrestart")[0].innerHTML = `
        <button class="restart">Restart</button>`;
    document.querySelector(".restart").addEventListener("click", restart);
    document.getElementsByClassName("point")[0].style.opacity = `1`;
});

let gamestart = 0;
let randnum;
let redchance = 2;
let redposition = 0;
let redunlocked = 0;
let bluechance = 1;
let blueposition = 0;
let blueunlocked = 0;

function diceroll() {
    if (gamestart == 1) {
        randnum = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice').innerHTML = `${randnum}`;
    }
}

function checkSnakeOrLadder(position, color) {
    const snakesLadders = {
        7: 36, 21: 58, 31: 51, 33: 5, 34: 84, 43: 24,
        54: 89, 56: 20, 63: 82, 66: 12, 78: 59, 96: 72
    };
    
    if (snakesLadders[position]) {
        document.getElementsByClassName(`box${position}`)[0]
            .getElementsByClassName(`${color}counter`)[0].style.opacity = '0';
        position = snakesLadders[position];
        document.getElementsByClassName(`box${position}`)[0]
            .getElementsByClassName(`${color}counter`)[0].style.opacity = '1';
    }
    return position;
}

function checkwin() {
    if (blueposition === 100 || redposition === 100) {
        gamestart = 0;
        const winner = blueposition === 100 ? "Blue" : "Red";
        document.getElementsByClassName("players")[0].innerHTML = `${winner} Wins
            <button class="restart">Restart</button>`;
        document.querySelector(".restart").addEventListener("click", restart);
        document.getElementsByClassName("players")[0].style.fontSize = `30px`;
        document.getElementsByClassName("players")[0].style.color = winner.toLowerCase();
        document.getElementsByClassName("players")[0].style.textShadow = `-1px 1px 1px white`;
    }
}

function mover(color) {
    let position, unlocked;
    if (color === 'red') {
        position = redposition;
        unlocked = redunlocked;
    } else {
        position = blueposition;
        unlocked = blueunlocked;
    }

    if (position !== 0 && position !== 100 && position + randnum <= 100) {
        document.getElementsByClassName(`box${position}`)[0]
            .getElementsByClassName(`${color}counter`)[0].style.opacity = '0';
    }

    if (unlocked > 0 && position + randnum <= 100) {
        position += randnum;
        document.getElementsByClassName(`box${position}`)[0]
            .getElementsByClassName(`${color}counter`)[0].style.opacity = '1';
        position = checkSnakeOrLadder(position, color);
    }

    if (color === 'red') redposition = position;
    else blueposition = position;

    checkwin();
}

function checkchance() {
    if (redchance % 2 === 0) {
        document.getElementsByClassName("point")[0].style.opacity = `0`;
        if (randnum === 6) {
            redunlocked++;
            document.getElementsByClassName("point")[0].style.opacity = `1`;
            document.getElementsByClassName("redlock")[0].innerHTML = `Unlocked`;
        } else {
            redchance++;
            bluechance++;
            document.getElementsByClassName("point")[1].style.opacity = `1`;
        }
        mover('red');
        document.getElementsByClassName("redposition")[0].innerHTML = `Position: ${redposition}`;
    } else if (bluechance % 2 === 0) {
        document.getElementsByClassName("point")[1].style.opacity = `0`;
        if (randnum === 6) {
            blueunlocked++;
            document.getElementsByClassName("point")[1].style.opacity = `1`;
            document.getElementsByClassName("bluelock")[0].innerHTML = `Unlocked`;
        } else {
            redchance++;
            bluechance++;
            document.getElementsByClassName("point")[0].style.opacity = `1`;
        }
        mover('blue');
        document.getElementsByClassName("blueposition")[0].innerHTML = `Position: ${blueposition}`;
    }
}

document.getElementById('dice').addEventListener('click', () => {
    if (gamestart === 1) {
        diceroll();
        checkchance();
    }
});
