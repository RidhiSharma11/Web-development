// let url="https://catfact.ninja/fact";
// async function getfacts(){
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log(data.fact);
//     } catch(e){
//         console.log("error- ",e);
//     }
//     console.log("Bye");
// }


// let btn=document.querySelector("button");
// btn.addEventListener("click",async()=>{
//     let facts=await getfacts();
//     console.log(facts);
//     let p=document.querySelector("#result");
//     p.innerText=facts;
// });
// let url="https://catfact.ninja/fact";
// async function getfacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){
//         console.log("error- ",e);
//         return "No Fact Found";
//     }
// }


let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let link=await getImage();
    console.log(link);
    let image=document.querySelector("#result");
    image.setAttribute("src",link);
    console.log(link);
});

let url="https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res=await axios.get(url);
        return res.data.message;
    }
    catch(e){
        return "/";
    }
}



// let url="http://universities.hipolabs.com/search?name=";
// let btn=document.querySelector("button");

// btn.addEventListener("click",async()=>{
//     let country=document.querySelector("input").value;
//     console.log(country);
//     let colArr= await getColleges(country);
//     show(colArr);
// });

// function show(colArr){
//     let list=document.querySelector("#list");
//     for(col of colArr){
//         console.log(col.name);
//         let li=document.createElement("li");
//         li.innerText=col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country){
//     try{
//         let res=await axios.get(url+country);
//         return res.data;
//     } catch(e){
//         console.log("error: ",e);
//         return[];
//     }
// }