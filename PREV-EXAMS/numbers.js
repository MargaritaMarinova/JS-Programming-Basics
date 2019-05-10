function numbers(input) {
    let number = Number(input.shift());
    let currentHundreds = 0;
    let currentTens = 0;
    let currentOnes = 0;

    let hundreds = Math.floor(number/100);
    let tens = Math.floor((number - (hundreds*100))/10);
    let ones = number % 10;
    let currentNumber = number;

    let rows = hundreds + tens;
    let columns = hundreds + ones;
    let columnString = '';

    for (let n = 1; n <= rows; n++){
        columnString = '';
        for (let m = 1; m <= columns; m++){
            currentHundreds = Math.floor(currentNumber/100);
            currentTens = Math.floor((currentNumber - (currentHundreds*100))/10);
            currentOnes = currentNumber % 10;
            if (currentNumber % 5 === 0){
                currentNumber -= hundreds;
            } else if (currentNumber % 3 === 0) {
                currentNumber -= tens;
            } else {
                currentNumber += ones;
            }
            columnString += currentNumber + ' ';
        }
        console.log(columnString);
        
    }
}

numbers([132]);