const mysql = require("mysql");

const conn = mysql.createConnection({
    host     : '194.233.73.153',
    user     : 'devops',
    password : 'D3v0p5@Pr0',
    database : 'protoft',
    port     : '6606'
});

conn.connect((err) => 
{
    if (err)
    {
        console.log(err.message);
    }

    console.log("database connected")
});

module.exports = conn;