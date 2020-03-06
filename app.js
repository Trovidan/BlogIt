const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require('lodash');
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");
app.use(express.static("public"));

var heading = new Array("Post 1");
var post = new Array("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo");
var aboutBody = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

/**********************Get Requests***************************/

app.get('/',function (req,res){
  res.render("index",{heading : heading, post : post});
});

app.get('/newPost',function(req,res){
  res.render("newPost");
});

app.get('/about',function(req,res){
  res.render("about",{head: "ABOUT",post: aboutBody});
});

app.get('/post/:topic',function(req,res){
  let topicIndex = -1;
  for(let i=0;i<heading.length;i++){
    if(_.lowerCase(heading[i])===_.lowerCase(req.params.topic)){
      topicIndex=i;
    }
  };
  if(topicIndex!=-1){
    console.log(heading[topicIndex]);
    res.render("about",{head: heading[topicIndex],post: post[topicIndex]});
  }
  else{
    console.log("Not Found");
    res.render("about",{head: "Invalid Path",post: "Error 404"});
  }
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

app.listen(3001 , function (){
  console.log("server is kicking");
});

/*************************************************************/
