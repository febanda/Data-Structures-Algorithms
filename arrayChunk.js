//Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

//--Examples 

//chunk([1,2,3,4], 2) --> [[1,2], [3,4]]
//chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]


function chunk(array, size){
    const chunked = []
    for(let element of array){
        const lastElement = chunked[chunked.length - 1]
        if(!lastElement || lastElement.length === size){
            chunked.push([element])
        }else{
            lastElement.push(element)
        }
    }
    return chunked 
}

