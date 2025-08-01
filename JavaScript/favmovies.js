// const favmovie="Avatar";
// let guess=prompt("Enter my favourite movie: ");
// while((guess!=favmovie)&&(guess!="quit")){
//     guess=prompt("Wrong movie");
// }
// if(guess==favmovie){
//     console.log("Congrats! You unlocked next level");
// }
// else{
//     console.log("You quit");
// }


// let Todo = [];
// while (true) {
//     let req = prompt("Enter your request: ");
//     if (req == "quit") {
//         console.log("So sad! You quit");
//         break;
//     }
//     if (req == "list") {
//         console.log("------------");
//         for (let i = 0; i < Todo.length; i++) {
//             console.log(i, Todo[i]);
//         }
//         console.log("------------");
//     } else if (req == "add") {
//         let task = prompt("Enter the task: ");
//         Todo.push(task);
//         console.log("Task added! Now smile");
//     } else if (req == "delete") {
//         let idx = prompt("Enter the task idx: ");
//         Todo.splice(idx, 1);
//         console.log("Task Deleted!!");
//     } else {
//         console.log("Wrong!!!!!!! Request ");
//     }
// }


// const post={
//     username:"@ridhiSharma",
//     content:"This is my #firstPost",
//     likes:200,
//     reposts:4,
//     tags:["@anirudh","@ridhiiii"],
// };


// const info={
//     Ridhi:{
//         grade:"O",
//         city:"Jalandhar",
//     },
//     Anirudh:{
//         grade:"O",
//         city:"Delhi",
//     },
// };


const max=prompt("Enter the max number: ");

const random=Math.floor(Math.random()*max)+1

let guess=prompt("guess the number: ");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess=="random"){
        console.log("Congrats!You are right");
        break;
    }
    else{
        console.log("Wrong!guess, try again");
    }
}