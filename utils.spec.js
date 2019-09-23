const utils = require('./utils');
const should = require('should');
describe('utils.js 의test() 함수는',()=>{
    it('값을 그대로 반환한다.',()=>{
        const result = utils.test("test");
        result.should.be.equal('test');
    })
})