

function printSteps(n){
    for(let row = 0; row < n; row++){
        let stair = ''
        for(let column = 0; column<n; column++){
            if(column <= row){
                stair += '#'
            }else{
                stair += ' '
            }
        }
        console.log(stair)
    }

}




function printSteps(n){

    for(let c =0; c<n; c++){
        let stairs = ''
        for(let r=0; r<n; r++){
            if(c <= r){
                stairs += '#'
            }else{
                stairs += ' '
            }
        }
        console.log(stairs)
    }


}



function capitalize(str){

    const words = []

    for(let word of str.split(' ')){
        words.push(word[0] + word.slice(1))
    }
    return words.join(' ')
}




function capitalize(str){

    let results = ''

    



}



