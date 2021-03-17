const express = require("express");
const bodyParser = require ("body-parser");
const date = require(__dirname +"/date.js");

const app = express();

var newTasks = [];
var workTasks = [];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/",function(req, res){
    let  day = date.getDate();
  res.render("list",{listTitle:day, Task:newTasks});
});

app.post("/",function(req,res){
   var newTask = req.body.addItem;
    // newTask = req.body.addItem;
  if(req.body.switch === "Work" ){
      workTasks.push(newTask);
      res.redirect("/work");
  }else{
       newTasks.push(newTask);
         res.redirect("/");
  };

});

app.get("/work", function(req,res){

  res.render("list",{listTitle:"Work List", Task:workTasks});
});

app.listen(process.env.PORT || 3000, function(){
  console.log("The server is listening on port 3000");
});
