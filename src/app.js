const express = require("express");
const path = require("path")
const app = express();

require("./db/conn")
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path))

// document.getElementById("submit").onclick = function(){myfunction()};
// function myfunction(){
//     document.getElementById("submit").innerHTML=alert("jjd")
// }
// const route = express.Router()
// route.get('/sub',(req,res)=>{
//     res.status(3000).json("hiiii john nsjs")
// })


app.get('/',(req,res) =>{
    res.send("hello hii bye ")
})
app.get('/public/app.js',(req,res) =>{
    res.render("hello hii bye ")
})
app.post('/public/app.js',(req,res) =>{
    res.render("cong")
})
app.listen(port,()=>{
    console.log(`application is started on ${port}`)
})

