const express=require("express");
const app=express();
console.dir(app);

let port=3000;
app.listen(port,() =>{
    console.log(`app is listening on port ${port}`);
});


app.get("/",(req,res)=>{
    res.end("Hi i am Ridhi");
});

app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    let htmlline=`<h1>Welcome to the page of @${username}!!</h1>`
    res.end(htmlline);
});


app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("Nothing searched");
    }
    res.send(`<h1>search results for query:${q}<h1>`);
})



app.get("/apple",(req,res)=>{
    res.end("Hi i am cutie apple");
});

app.get("/mango",(req,res)=>{
    res.end("Hi i am mango");
});

app.get("/orange",(req,res)=>{
    res.end("Hi i am orange");
});


// app.get("*",(req,res)=>{
//     res.end("This path does not exist");
// });

// app.use((req,res)=>{
//     console.log("Yeah great work");
//     res.send("This is a response");
// });