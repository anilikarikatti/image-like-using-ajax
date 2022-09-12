const express = require('express');

const app= express();

const nunjucks = require('nunjucks');

const {get_data} = require('./get_image1.js');

const path = require("path");

const bodyParser = require('body-parser');

nunjucks.configure('../views', {
    autoescape: true,
    express: app
});

app.use(express.json());

let static_path = path.join(__dirname,"../images");

app.use(express.static(static_path));

// let data = get_image;
// // let d = JSON.stringify(data);

// console.log(typeof(data));
const port = 3000;

// app.set("view engine","html")
app.get('/',async (req,res)=>{
    // let data = await get_data();
    //  res.json(data)
    res.render("index.html");
    // console.log(data);

});


// app.set("view engine","html")
app.get('/data',async (req,res)=>{
    let data = await get_data();
     res.json(data)
     console.log("requested");
    // res.render("index.html",{dat : res.json(data)});
    // console.log(data);
});

app.get('/liked',async (req,res)=>{
   let d = await req.body;
   console.log(d);
})
app.listen(port,()=>{
    console.log(`server listening port ${port}`);
})