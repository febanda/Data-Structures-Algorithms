//---Directions

//Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantinty. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case

//---Examples

//anagrams('rail safety', 'fairy tales') --- True 
//anagrams('Hi there', 'Bye there') --- False 


//solution 1 

// function anagrams(strA, strB){


//     const aCharMap = buildCharMap(strA)
//     const bCharMap = buildCharMap(strB)

//     const aCharMapKeys = Object.keys(aCharMap)
//     const bCharMapKeys = Object.keys(bCharMap)

//     if(aCharMapKeys.length !== bCharMapKeys.length){
//         return false 
//     }

//     for(let char in aCharMap){
//         if(aCharMap[char] !== bCharMap[char]){
//             return false 
//         }
//     }

//     return true
            
// }


// function buildCharMap(str){
//     const charMap = {}
//     for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         (!charMap[char]) ? charMap[char] = 1 : charMap[char]++
//     }
//     return charMap
// }



//solution 2
function anagrams(stringA, stringB){
    return cleanUp(stringA) === cleanUp(stringB)

}


function cleanUp(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
    
}



