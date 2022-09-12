
// const mysql = require('mysql2/promise');

const connection = require('./connection.js');

async function get_data(){
    let data = await connection.main();

    let dataPromise = data.promise();

    let [rows,fields] = await dataPromise.query("select * from likes");
    
    // console.log(rows);
    return rows;

}


module.exports = {get_data}