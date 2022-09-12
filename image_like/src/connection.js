const mysql = require('mysql2');


async function main(){
    let pool = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'image_like',
    debug    :  false
    });

    return pool;
}

module.exports = {main};