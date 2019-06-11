//---Directions

//Given a string, return the character that is most commenly used in the string

//--Examples
// maxChar('abcccccccd')=== 'c'

//Initial Solution 
function maxChar(str){
    const chars = {}
    let max = 0
    let maxChar = ''
    
    for(let char of str){
        if(!chars[char]){
            chars[char] = 1
        }else{
            chars[char]++
        }
    }
    
    for(let char in chars){
        if(chars[char] > max){
            max = chars[char]
            maxChar = char 
        }
    }
    return maxChar

}




function maxChar(arr){
    const chars = {}
    const count = 1

    for(let char of arr){
        if(!chars[char]){
            chars[char] = 1
        }else{
            chars[char]++
        }
    }

    for(let char in chars){
        if(chars[char] === count){
            return chars[char]
        }
    }


}


