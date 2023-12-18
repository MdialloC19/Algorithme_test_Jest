const assert=require('assert');
const anagram=require('./anagram');

describe('Array Chunking', () => {
    it('Should be a function', ()=>{
        expect(typeof anagram).toBe('function');
    })

    it('Should return a boolean', ()=>{
        expect(typeof anagram('ram', 'arm')).toBe('boolean');
    })

    it("Should return true if is anamgram", ()=>{
        expect(anagram('ram', 'arm')).toBeTruthy();
        expect(anagram('cinema', 'iceman')).toBeTruthy();
        expect(anagram('fed', 'def')).toBeTruthy();

    })


    it("Should return false if isn't anamgram", ()=>{
        expect(anagram('ram', 'aem')).toBeFalsy();
        expect(anagram('cinma', 'iceman')).toBeFalsy();
        expect(anagram('feed', 'def')).toBeFalsy();

    })
    

    
});
