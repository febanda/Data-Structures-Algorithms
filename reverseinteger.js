//Given an integer, return an integer that is the reverse ordering of numbers. 

//--Examples 
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(-15) === -51

function reverseInt(n){
    if(Math.sign(n) === -1){
        const stringNumber = n.toString().split('').reverse().join('')
        console.log(-parseInt(stringNumber))
    }else if(Math.sign(n) === 1){
        const stringNumber = n.toString().split('').reverse().join('')
        console.log(parseInt(stringNumber))
    }else{
        console.log(n)
    }
}