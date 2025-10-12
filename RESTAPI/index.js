const express=require("express");
const app=express();
const port=8083;
const path=require("path");


app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"Public")));


let posts=[
    {
        id:"1a",
        username:"Ridhisharma",
        content:"Hi! I got selected for my first internship",
    },
   {
        id:"2a",
        username:"Aahannaggarwal",
        content:"Damn! I love my girl, she is super pretty",
    },
        {
        id:"3a",
        username:"Aaruu",
        content:"I will marry her in 2032",
    },
]


app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id === p.id);
    console.log(post);
    res.render("show.ejs");
});

app.listen(port,()=>{
    console.log("Listening to port: 8083");
});