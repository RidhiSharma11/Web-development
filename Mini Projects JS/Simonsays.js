let gameSeq=[];
let userSeq=[];

let btns=["pink","yellow","green","purple"];
let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started= true;

        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function levelUp(){
    level++;
    let h2=document.querySelector("h2");
    h2.innerText=`Level is ${level}`;
    let randIdx=Math.floor(Math.random()*3); // WHY??
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    btnflash(randBtn);
}