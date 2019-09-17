const authService = require('../../service/auth.service');
const jwt = require('jsonwebtoken');
export class Controller{
    login(req,res,next){
        try{
            const {id,pwd} = req.body;
            
            const member = authService.findbyIdAndPwd(id,pwd);
            if(member != null){
                jwt.sign(
                    {
                        id: id,
                    }
                )
            }
        }
        catch(error){
            
        }
    }
}
export default new AuthController();