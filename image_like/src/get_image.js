

let connection = require('./connection.js');

 function prom(){
    return new Promise(async(resolve, reject) => {
        let conn = await connection.main();
        // console.log(conn);
       await conn.execute("select * from likes",(err,rows)=>{
            if(err) reject(err);
            
            resolve(rows);
        })
    })
}
// prom();

async function get_data(){
    let data =await prom();
    console.log(data);
    return await data;
}

// get_data();
console.log(get_data());
// module.exports = {get_data}