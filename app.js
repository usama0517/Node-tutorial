const express = require("express");
//express app
const app = express();
const morgan = require("morgan");//apps\blogRoutes.js
const mongoose = require("mongoose");
const blogRoutes= require("./routes/blogRoutes");
//database Connection string

const dataurl="mongodb+srv://Usama:test1234@cluster0.pmy14yj.mongodb.net/";

mongoose.connect(dataurl)
  .then((result)=>app.listen(3000))
  .catch((err)=>console.log(err));
//const blogs=[{title:"abcd", snippet:"pargraph1"} ,{title:"abcd" ,snippet:"pargraph2"}]
//const blogs = [];
//listen for requests
//app.listen(3000);
//register view engine
app.set('view engine','ejs')


app.use(morgan('dev'));
//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.get('/',(req,res)=>{
    res.redirect("/blogs")
   }) 
  
   app.get('/about',(req,res)=>{
    //req.send("<p>about page</p>");
    res.render("blogs/about");
   })
    //blog routes
    app.use("/blogs",blogRoutes);

   //404 page
   app.use((req,res)=>{
    res.status(404).render("404");
   
   })