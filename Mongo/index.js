const mongoose = require('mongoose');
main()
    .then(()=>{
        console.log("Connection is successfull");
    })

    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const Employee=mongoose.model("Employee",userSchema);

const User=mongoose.model("User",userSchema); //DB test kai andr naya collection user create krr rahe hai

User.find()
  .then(users => {
    console.log(users);
  })
  .catch(err => console.log(err));

const user1= new User({
    name:"Adam",
    email:"adam@gmail.com",
    age:28,
})

user1.save();

const user2 = new User({
   name:"Eve",
   email:"eve@gmail.com",
   age:29,
})

user2.save().then(res=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:21},
//     {name:"Toy",email:"toy@gmail.com",age:22},
//     {name:"Ton",email:"ton@gmail.com",age:24},
// ]).then((res)=>{
//     console.log(res);
// });


// User.find({age:{$gt: 28}})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


User.findOneAndUpdate({name:"Eve"},{age: 20})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})