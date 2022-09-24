const sequelize = require("sequelize");

const conn = new sequelize('mysql://devops:D3v0p5@Pr0@194.233.73.153:6606/protoft')

// const conn = new sequelize("protoft", "devops", "D3v0p5@Pr0", {
//     host     : "194.233.73.153",
//     dialect  : "mysql",
//     port:6606,
// });

// const conn = new sequelize({
//     host     : '194.233.73.153',
//     user     : 'devops',
//     password : 'D3v0p5@Pr0',
//     database : 'protoft',
//     port     : '6606',
//     dialect  : 'mysql'
// });

// conn.connect((err) => 
// {
//     if (err)
//     {
//         console.log(err.message);
//     }

//     console.log("database connected")
// });

conn.sync();

module.exports = conn;