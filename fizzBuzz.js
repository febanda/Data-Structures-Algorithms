const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




function fizzBuzz(arr){
	for(let number of arr){
	if(number % 15 === 0){
		console.log('FizzBuzz')} 
	else if(number % 5 === 0){
		console.log('Fizz')}
	else if(number % 3 === 0){
		console.log('Buzz')}
	else {
		console.log(number)}
    }
}

fizzBuzz(numbers)
