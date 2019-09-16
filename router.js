var mariaDb = require('./maria_db')
module.exports = function(app)
{
    app.get('/boardList',function(req,res){
        mariaDb.getBoardList().then((row)=>{
            console.log(row);
            res.json(row);
        }).catch((err)=>{
            console.log(err);
        })
    });
    app.get('/about',function(req,res){
        
    });
    
}
