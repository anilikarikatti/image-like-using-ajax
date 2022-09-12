
// const mysql = require('mysql2/promise');

const connection = require('./connection.js');

async function get_data(){
    let data = await connection.main();

    let dataPromise = data.promise();

    let [rows,fields] = await dataPromise.query("select * from likes");
    
    // console.log(rows);
    return rows;

}

async function call(){
    let d = await get_data();
    // console.log(d);
    // return d;
    module.exports={d} 
}

call();