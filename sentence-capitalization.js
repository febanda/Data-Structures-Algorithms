
// function capitalize(str) {

//     const words = []


//     for(let word of str.split(' ')){
//         words.push(word[0].toUpperCase() + word.slice(1))
        
//     }

//    return words.join(' ')


// }


//solution 2 

function capitalize(str){
    let result = str[0]

    for(let i=1; i<str.length; i++){
        if(str[i-1] === ' '){
            result += str[i].toUpperCase()
        }else{
            result += str[i]
        }
    }
    
    return result 

}









function capitalize(str){
    let result = []
    for(let word of str.split(' ')){
        result.push(word[0].toUpperCase + word.slice(1))
    }
    return result.join(' ')

}



















