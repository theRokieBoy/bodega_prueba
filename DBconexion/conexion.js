const mysql =require('mysql');
require('dotenv').config();

const conexion = mysql.createConnection({
    host :process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});

conexion.connect(err =>{
    if(err){
        console.log(err);
    }else{
        console.log('db esta conectada');
    }
});

module.exports=conexion;