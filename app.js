let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "red", "purple", "green"];
let started = false;

let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

function checkAns(idx) {
    // console.log("current level", level)

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `game over! your score was <b>${level}</b>  <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout (function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }

}


function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn) {
    btn.addEventListener("click", btnPress);
}


function reset() {
    started =false;
    userSeq = [];
    gameSeq = [];
    level = 0;

}