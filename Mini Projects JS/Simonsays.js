let gameSeq=[];
let userSeq=[];

let btns=["pink","yellow","green","purple"];
let started=false;
let level=0;


let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started= true;

        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText=`Level is ${level}`;
    let randIdx=Math.floor(Math.random()*3); // WHY??
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameflash(randBtn);
}

function btnPress(){
    console.log(this);
    let btn=this;
    userflash(btn);
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}