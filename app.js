const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");
app.use(express.static("public"));

var heading = new Array("Post 1");
var post = new Array("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo");


/**********************Get Requests***************************/

app.get('/',function (req,res){
  res.render("index",{heading : heading, post : post});
});

app.get('/post',function(req,res){
  res.render("post");
});

app.get('/about',function(req,res){
  res.render("about");
});

/*************************************************************/

/**************************Post Requests**********************/

app.post("/",function (req,res){
  let head = req.body.heading;
  let body = req.body.post;
  heading.push(head);
  post.push(body);
  res.redirect('/');
});

/**********************Listenning function*********************/

app.listen(3001,function (){
  console.log("server is kicking");
});

/*************************************************************/
