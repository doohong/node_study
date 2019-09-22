const db = require('./db.service');

class AuthService{
    async findbyIdAndPwd(loginArray){
        console.log(loginArray);
        const smt =
        "SELECT * FROM tbl_member WHERE m_id = ? AND m_pwd = ?";

        const list = await db.query2(smt, loginArray);
        console.log(list);
        if (list && Array.isArray(list) && list.length > 0) {
            return list[0];
        }

        return list;
    }
    async setMember(req){
        const smt = 'INSERT INTO tbl_member (m_id,m_pwd) VALUES(?,?)';
    
        const arr = [];
        for(const key of Object.keys(req.body)){
            arr.push(req.body[key]);
        }
        await db.query2(smt,arr);       
    }

}

module.exports = new AuthService();