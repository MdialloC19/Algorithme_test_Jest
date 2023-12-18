const assert=require('assert');
const chunk=require('./arrayChunk');


describe('Array Chunking', () => {
    it('Should be a function', ()=>{
        expect(typeof chunk).toBe('function');
    })

    it('Should return a chunk array of specific size', ()=>{
        assert.deepEqual(chunk([1,2,3,4],2), [[1,2],[3,4]]);
        assert.deepEqual(chunk([1,2,3,4],3), [[1,2,3],[4]]);
    });
    
});
