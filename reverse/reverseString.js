
// Solution 1 without native method
// function reverseString(letter){

//     const length= letter.length;
//     let reverse='';

//     for(let i=0; i<length;i++){

//         reverse+=letter[length-1-i];
//     }
//     return reverse;
    
// }

// solution 2
// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// solution 3

function reverseString(str){
    let reversed='';
    for(let char of str){
        reversed=char+reversed;

    }
    return reversed;
}

module.exports=reverseString;