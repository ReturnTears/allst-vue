import mysql from 'mysql'

// var mysql = require('mysql');

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: 'mysql',
    user: 'root',
    password: '123456',
})

// var connection = mysql.createConnection({
//     host     : 'localhost',   // 你要连接的数据库服务器的地址
//     port     :  3306,// 端口号
//     user     : 'root',        // 连接数据库服务器需要的用户名
//     password : 'root',        // 连接数据库服务器需要的密码
//     database : 'mysql'      //你要连接的数据库的名字
//   });

export default pool

// export default connection
