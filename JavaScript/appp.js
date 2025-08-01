// let smallImages=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src="spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }

// console.dir(document.querySelectorAll("div a"));

// let links=document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++){
//     links[i].style.color="yellow";
// }

// let p1=document.createElement("p");
// p1.innerText="Hey! I am Ridhi Sharma";
// document.querySelector("body").append(para1);

// btn.onclick=function(){
//          console.log("button was clicked");
// };

let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.onclick=sayHello;
    btn.onmouseenter=function(){
        console.log("Oh!You entered a button!");
    }
}
function sayHello(){
    alert("Hello!")
}