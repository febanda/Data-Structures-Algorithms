//---Directions 

//Given a string, return the character that is most commenly used in the string 

//--Examples 
// maxChar('abcccccccd')=== 'c'

function maxChar(str){
    const chars = {}
    for(let char of str){
        if(chars[char] != 1){
            chars[char] = 1
        }else{
            chars[char]++
        }
    }
    return chars 

}


