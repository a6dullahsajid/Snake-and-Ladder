const reloadlink = location.href;
function restart() {
    location.reload(reloadlink);
}
document.getElementsByClassName("play")[0].addEventListener('click',()=>{
    document.getElementsByClassName("playrestart")[0].innerHTML = `
    <button class="restart" onclick="restart()">Restart</button>`
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
document.getElementsByClassName("play")[0].addEventListener('click',()=>{
    gamestart=1;
});
function diceroll() {
    randnum=Math.floor(Math.random() * 6 ) + 1;
    document.getElementById('dice').innerHTML = `${randnum}`;
}
function redchecksnakeorladder() {
    if (redposition == 7) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=36;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 21) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=58;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 31) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=51;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 33) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=5;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 34) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=84;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 43) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=24;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 54) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=89;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 56) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=20;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 63) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=82;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 66) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=12;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 78) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=59;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
    else if (redposition == 96) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
        redposition=72;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
    }
}
function bluechecksnakeorladder() {
    if (blueposition == 7) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=36;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 21) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=58;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 31) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=51;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 33) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=5;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 34) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=84;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 43) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=24;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 54) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=89;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 56) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=20;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 63) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=82;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 66) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=12;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 78) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=59;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
    else if (blueposition == 96) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
        blueposition=72;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
    }
}
function checkwin() {
    if (blueposition == 100) {
        gamestart = 0;
        document.getElementsByClassName("players")[0].innerHTML = `Blue Win
    <button class="restart" onclick="restart()">Restart</button>`;
        document.getElementsByClassName("players")[0].style.fontSize = `30px`;
        document.getElementsByClassName("players")[0].style.color = `blue`;
    }
    if (redposition == 100) {
        gamestart = 0;
        document.getElementsByClassName("players")[0].innerHTML = `Red Win
    <button class="restart" onclick="restart()">Restart</button>`;
        document.getElementsByClassName("players")[0].style.fontSize = `30px`;
        document.getElementsByClassName("players")[0].style.color = `red`;
    }
}
function movered() {
    if (redposition !=0 && redposition!=100 && redposition+randnum <= 100) {
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '0';
    }
    if (redunlocked > 0 && redposition+randnum <= 100) {
        redposition+= randnum;
        document.getElementsByClassName(`box${redposition}`)[0].getElementsByClassName("redcounter")[0].style.opacity = '1';
        redchecksnakeorladder();
    }
    checkwin();    
}
function moveblue() {
    if (blueposition !=0 && blueposition!=100 && blueposition+randnum <= 100) {
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '0';
    }
    if (blueunlocked > 0 && blueposition+randnum <= 100) {
        blueposition+= randnum;
        document.getElementsByClassName(`box${blueposition}`)[0].getElementsByClassName("bluecounter")[0].style.opacity = '1';
        bluechecksnakeorladder();
    }
    checkwin();    
}
function checkchance() {
    if (redchance % 2 == 0) {
        document.getElementsByClassName("point")[0].style.opacity = `0`;
        if (randnum == 6) {
            redunlocked++;
            document.getElementsByClassName("point")[0].style.opacity = `1`;
            document.getElementsByClassName("redlock")[0].innerHTML =`Unlocked`;
        }
        else{
            redchance++;
            bluechance++;
            document.getElementsByClassName("point")[1].style.opacity = `1`;
        }
        movered();
        document.getElementsByClassName("redposition")[0].innerHTML=`Position:${redposition}`
        }
    else if(bluechance %2 == 0){
        document.getElementsByClassName("point")[1].style.opacity = `0`;
        if (randnum == 6) {
            blueunlocked++;
            document.getElementsByClassName("point")[1].style.opacity = `1`;
            document.getElementsByClassName("bluelock")[0].innerHTML =`Unlocked`;
        }
        else{
            redchance++;
            bluechance++;
            document.getElementsByClassName("point")[0].style.opacity = `1`;
        }
        moveblue();
        document.getElementsByClassName("blueposition")[0].innerHTML=`Position:${blueposition}`
    }
}
document.getElementById('dice').addEventListener('click',()=>{
    if (gamestart==1) {
        diceroll();
        checkchance();
    }
})