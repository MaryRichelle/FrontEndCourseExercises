function add (a, b) {
	return a + b;
	
}

function subtract ( a , b) {
	return a - b;
	
}

function sum ( numbers ) {
	return numbers.reduce((a, b) => {
		return a + b;
	}, 0);
	
	
	
}

function multiply ( numbers) {
	return numbers.reduce((a, b) => {
		return a * b;
	})
	
}

function power(a , b) {
	return a**b;
	
}

function factorial( numbers) {
	let factor = 1;
	for (let i = 1; i <= numbers; i++) {
		factor = i * factor;
	}
	return factor;
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}