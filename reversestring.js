//Given a string, return a new string w/ the reversed order of characters 


// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// //Possible Solution #1
function reverse(str) {
    const newWord = str.split("").reverse().join("")
    return newWord 
}

// //Possible Solution #2 
function reverse(str){
    let reversed = ''
    
    for (let character of str){
        reversed = character + reversed 
    }

    return reversed
}

//Possible Solution #3
function reverse(str){
    return str.split('').reduce((reversed, character) => {
        return character + reversed
    }, '')

}