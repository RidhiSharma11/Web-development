let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    // console.log(inp.value);
    let text=document.createElement("li");
    text.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="x";
    delBtn.classList.add("x");

    text.appendChild(delBtn);

    ul.appendChild(text);
     inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});


// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }