const mysql  = require('mysql');
const poll = mysql.createPool({
    connectionLimit:10,
    host:'mysql',
    user:'root',
    password:'root1234',
    database:'myapp',
});
exports.pool = pool;
