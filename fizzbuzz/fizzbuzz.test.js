
const fizzBuzz=require('./fizzbuzz');

describe('fizzbuzz game', () => {
    it('Should be a function ', ()=>{
        expect(typeof fizzBuzz).toBe('function');
    });

    it('Should give fizzbuzz if it divisible by 3 and 5', ()=>{
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(90)).toBe('FizzBuzz');
    });

    it('Should give fizz if it divisible by 3', ()=>{
        expect( fizzBuzz(9)).toEqual('Fizz');
        expect( fizzBuzz(3)).toEqual('Fizz');
        expect( fizzBuzz(27)).toEqual('Fizz');
    });
    it('Should give buzz if it divisible by 5', ()=>{
        expect( fizzBuzz(25)).toEqual('Buzz');
        expect( fizzBuzz(10)).toEqual('Buzz');
        expect( fizzBuzz(35)).toEqual('Buzz');
    });
    
});
