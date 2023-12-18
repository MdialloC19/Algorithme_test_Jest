

const reverseString=require('./reverseString');


describe('Reverse String ', ()=>{

    it('Should be a function', ()=>{
        expect(typeof reverseString).toBe('function');
    });

    it('Should return a string', ()=>{
        expect(typeof reverseString('hello')).toBe('string');
    });

    it('Should return reverse string', ()=>{
        expect(reverseString('hello')).toBe('olleh');
        expect(reverseString('bye')).toBe('eyb');
        expect(reverseString('ok')).toBe('ko');

    })
})