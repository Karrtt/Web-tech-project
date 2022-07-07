const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { stringify } = require("querystring");


app.use(bodyParser.urlencoded({extended : true}));

mongoose.connect("mongodb+srv://admin:admin@cluster0.34j3v.mongodb.net/myFirstDatabase",{useNewUrlParser : true}, {useUnifiedTopology : true})

const notesSchema = {
    name : String,
   email : String,
   
}

const Note = mongoose.model("Note", notesSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname + "/Query.html");
})
app.get('/Query.css', function(req, res) {
    res.sendFile(__dirname + "/" + "Query.css");
  });

app.post("/", function (req,res){
    let newNote = new Note({
        name:req.body.name,
        email : req.body.email
    })
    newNote.save();
    res.redirect("/");
})
app.listen(3000, function (){
    console.log("server is running on 3000")
})