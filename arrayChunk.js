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



function tictactoe(arr){
    for(let i = arr.length - 1; i>0; i--){
        let j = Math.floor(Math.random() * (i+1)); //random index from 0 to i 
        [arr[i], arr[j]] = [arr[j], arr[i]] // swap elements 
    }


    for(var i = 0; i<arr.length; i++){
        if(arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]){
            return true 
        }else if(arr[i+1] === arr[i + 2] && arr[i + 2] === arr[i + 3]) {
            return true 
        }else if(arr[i+2] === arr[i + 3] && arr[i + 3] === arr[i + 4]){
            return true
        }else{
            return false 
        }
    }
}