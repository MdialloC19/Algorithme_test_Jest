
function chunk(myArray,size){
    const chunked=[];

    for (let elt of myArray){
        const last=chunked[chunked.length-1];

        if(!last||last.length===size){
            chunked.push([elt]);
        }else{
            last.push(elt);
        }
    }
    return chunked;

}

module.exports= chunk;