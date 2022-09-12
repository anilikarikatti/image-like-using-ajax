const express = require('express');

const app= express();

const nunjucks = require('nunjucks');

const get_image = require('./get_image.js');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

let data = get_image;
// console.log(data);
const port = 4000;
app.get('/',(req,res)=>{
    res.render('index.html')
});

app.listen(port,()=>{
    console.log(`server listening port ${port}`);
})