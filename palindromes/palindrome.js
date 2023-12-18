
//Solution 1 without natives JS functions
// function palindrom(str){
//     const length= str.length;
//     let reverse='';
//     for(let i=0; i<length;i++){
//         reverse+=str[length-1-i];
//     }
//     return reverse===str;

// }

// Solution 2 

// function palindrom( str){

//     const reverse= str.split('').reverse().join('');
//     return reverse===str;

// }

// Solution 3

function palindrom(str){
    return str.split('').every((char,index)=>{
        return char===str[str.length-index-1];
    })
}
module.exports=palindrom;