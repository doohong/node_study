const app = require("./index");
const request = require("supertest");

describe('post /login',()=>{
    it('매개변수를 안보낸다.',(done)=>{
        request(app)
            .post('/api/auth/login',{id:"wnghd94",pwd:1234})
            .end((err,res) => {
                console.log(res.body);
                done();
            })
    })
})

