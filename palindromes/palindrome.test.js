const palindrome= require('./palindrome');

describe('Should test palindrom', () => {
    it('Should be a function', ()=>{
        expect(typeof palindrome).toBe('function');
    })

    it('Should return a boolean', ()=>{
        expect(typeof palindrome('hello')).toBe('boolean')
    })

    it('Should return true if is a palindrom', ()=>{
        expect(palindrome('eye')).toBeTruthy();
        expect(palindrome('323')).toBeTruthy();
        expect(palindrome('kayak')).toBeTruthy();
    })

    it("Should return false if isn't a palindrom", ()=>{
        expect(palindrome('Zeye')).toBeFalsy();
        expect(palindrome('321')).toBeFalsy();
        expect(palindrome('kayaks')).toBeFalsy();
    })

    
});
