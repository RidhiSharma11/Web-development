const addBtn=document.getElementById("addBtn");
const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");

addBtn.addEventListener("click",()=>{
    const taskText=taskInput.value.trim();

    if(taskText===""){
        alert("Please enter a task!");
        return;
    }

    const li=document.createElement("li");
    li.innerHTML=`<span>${taskText}</span>
    <button class="delete">X</button>`;

    li.querySelector("span").addEventListener("click",()=>{
        li.classList.toggle("done");
    });

    li.querySelector(".delete").addEventListener("click",()=>{
        li.remove();
    });

    taskList.appendChild(li);
});