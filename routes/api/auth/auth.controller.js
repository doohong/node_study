const authService = require('../../service/auth.service');
const jwt = require('jsonwebtoken');
class AuthController {
    async login(req, res, next) {

        try {
            //console.log(req);
            const { id, pwd } = req.body;
            console.log(id, pwd);
            const member = await authService.findbyIdAndPwd([id, pwd]);
            console.log("member",member);
            let token
            if (member.m_id != undefined) {
                token = await jwt.sign(
                    {
                        id: member.id,
                        authority: member.m_authority
                    },
                    "zzz",
                    {
                        expiresIn: '7d'
                    }
                )
                console.log(token);
                res.json({
                    token: token
                })
            }else{
                res.statusCode = 400;
                res.setHeader('Content-Type', 'text/plain');
                res.json({
                    error: 'Not found user'
                });

            }


        }
        catch (error) {
            console.log(error);
        }
    }
        async singUp(req, res, next) {

            try {
                //console.log(req);
                const { id, pwd } = req.body;
                console.log(id, pwd);
                const member = await authService.findbyIdAndPwd([id, pwd]);
                console.log("member",member);
                let token
                if (member.m_id == null) {
                    res.json(await authService.setMember([id,pwd]));
                }else{
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'text/plain');
                    res.json({
                        error: 'Exist User'
                    });
    
                }
    
    
            }
            catch (error) {
                console.log(error);
            }
    }
}
module.exports = new AuthController();