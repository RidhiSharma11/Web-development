// function savetodb(data){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//     console.log("Your data was stored");
//     } else{
//         console.log("Data not saved");
//     }
// }


function savetodb(data){
    return new Promise((resolve ,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("Success: Data was saved");
        }
        else{
            reject("Failure: Weak Connection");
        }
    });
}

savetodb("apna college")
.then(()=>{
  console.log("Data was saved");
  return savetodb("Hello");  
})
.then(()=>{
  console.log("Data1 was saved");
  return savetodb("helloEveryone"); 
})
.catch(()=>{
    console.log("Promise was rejected");
});