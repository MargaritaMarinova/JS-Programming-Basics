function accountBalance(input) {
	let broiVnoski = Number(input.shift());
	let counter = 0;
	let balance = 0.0;
	
	while (counter < broiVnoski) {
		let amount = Number(input.shift());
		if (amount < 0) {
			console.log(`Invalid operation!`);
			break;
		}
		balance += amount;
		console.log(`Increase: ${amount.toFixed(2)}`);
		counter ++;
	}
	console.log (`Total: ${balance.toFixed(2)}`);
}