const boardService = require('../../service/board.service');

class Controller{
    async write(req, res, next) {
        try {
            //console.log(req);
            const { title, content } = req.query;
            console.log(req.decoded);
            const id = req.decoded.id;
            console.log(title,content,id);
            const member = await boardService.write([id, title,content]);
            
        }catch(error){
            console.log(error);
        }
    }
}
module.exports = new Controller();