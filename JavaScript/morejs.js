// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("para was clicked");
// })

// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("Mouse inside box");
// })

// let btn=document.querySelector("button");
// let p=document.querySelector("p");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");


// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="pink";
// }

// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);


// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("code= ",event.code);
//     if(event.code=="KeyU"){
//         console.log("Character goes up");
//     }
//     else if(event.code=="keyD"){
//         console.log("Character goes down");
//     }
// });

// let inp=document.querySelector("input");
// inp.addEventListener("keyup",function(){
//     console.log("Key was released");
// });


// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// //     alert("Your form is registered");


// let user=document.querySelector("#user");
// let pass=document.querySelector("#pass");
// console.log(user.value);
// console.log(pass.value);

// alert(`Hi my ${user.value}, your password is set to ${pass.value}`);
// })


let inp=document.querySelector("#text");
let p=document.querySelector("p");
inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText=inp.value;
})