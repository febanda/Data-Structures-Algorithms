//Given an integer, return an integer that is the reverse ordering of numbers. 

//--Examples 
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(-15) === -51

//My initial soluton
function reverseInt(n){
    if(Math.sign(n) === -1){
        const stringNumber = n.toString().split('').reverse().join('')
        console.log(parseInt(stringNumber) * -1)
    }else if(Math.sign(n) === 1){
        const stringNumber = n.toString().split('').reverse().join('')
        console.log(parseInt(stringNumber))
    }else{
        console.log(n)
    }
}


//Course Solution
function reverseInt(n){
    const reversed = n.toString().split('').reverse().join('')
   return parseInt(reversed) * Math.sign(n)

}