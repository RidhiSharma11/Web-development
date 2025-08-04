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
})


let delBtns=document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par=this.parentElement;
        console.log(par);
        par.remove();
    });
}