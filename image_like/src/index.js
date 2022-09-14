const express = require('express');

const app= express();

const nunjucks = require('nunjucks');

const {get_data} = require('./get_image1.js');

const path = require("path");

const bodyParser = require('body-parser');

const connection = require('./connection.js');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.json());

let static_path = path.join(__dirname,"../images");

app.use(express.static(static_path));

// let data = get_image;
// // let d = JSON.stringify(data);

// console.log(typeof(data));
const port = process.env.PORT || 9001;

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

app.post('/liked',async (req,res)=>{
   let d = await req.body;
   let id = d.btn_id;
   id =Number(id)
   console.log(typeof(id));
   console.log(d);
    async function updateLike(){
        let conn = await connection.main();
        // console.log(conn);
        let update_promise = await conn.promise();
        // let [rows] = await update_promise.query(`select likes from likes where id =${id}`);
        // let row_like = await rows[0].likes;

        // console.log(typeof(row_like));
        let [updated_rows] = await update_promise.query(`update likes set likes= likes+1 where id = ${id}`) ;
        // update likes set likes = 2 where id =1;
        // res.json(updated_rows);

        // let result = await update_promise.execute(`select likes from likes where id = ${id}`);

        // console.log(result);
        // res.json(result);
        // console.log(updated_rows);
        // res.json({
        //     "status":200
        // })

        res.status(200).json();
    }
    updateLike();

})
app.listen(port,()=>{ 
    console.log(`server listening port ${port}`);
})