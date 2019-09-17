const db = require('./db.service');

class AuthService{
    findbyIdAndPwd(loginObj){
        const smt =
        'SELECT * FROM tbl_member WHERE m_id = ? AND m_pwd = ?'
        return db.excute(smt,[loginObj]);
    }
}
export default new AuthService();