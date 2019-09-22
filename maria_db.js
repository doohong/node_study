// const mariadb = require('mariadb');

 
// const pool = mariadb.createPool({
//     host: '127.0.0.1', port:3306,
//     user: 'root', password: 'root',
//     database: 'nodeStudy'
//     ,connectionLimit: 5
// });
 
// async function GetBoardList(){
//     let conn, rows;
//     try{
//         conn = await pool.getConnection();
//         rows = await conn.query('SELECT * FROM tbl_board');
//         conn.release();
//     }
//     catch(err){
//         throw err;
//     }
//     finally{
//         if (conn) conn.end();
//         return rows[0];
//     }
// }
 
// module.exports = {
//     getBoardList: GetBoardList
// }

