const db = require('./db.service');

class BoardService{
    async write(args){
        const smt = 'INSERT INTO tbl_board (b_m_id,b_title,b_content) VALUES(?,?,?)';
        console.log(args,args);
        await db.query2(smt,args);       
    }
}
module.exports = new BoardService();