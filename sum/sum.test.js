const sum =require('./sum');
test('Should done the sum of 1 and 2, give 3', ()=>{
    expect(sum(1,2)).toEqual(3);
})