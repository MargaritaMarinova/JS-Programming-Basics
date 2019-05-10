function vacation(input) {
    let neededMoney = Number(input.shift());
    let actualMoney = Number(input.shift());
    let spendCounter = 0;
    let daysCounter = 0;

    while (actualMoney < neededMoney && spendCounter < 5) {
        let command = input.shift();
        let money = Number(input.shift());
            if (command == 'spend') {
                if (actualMoney < money || actualMoney < 0){
                    actualMoney = 0;
                    } else {
                    actualMoney -= money;
                    spendCounter++;
                }
            } else if (command == 'save') {
            actualMoney += money;
            spendCounter = 0;
            }
        daysCounter++;
    }
    if (spendCounter == 5) {
        console.log ("You can't save the money.");
        console.log (daysCounter);
    }
    if (actualMoney >= neededMoney) {
        console.log (`You saved the money for ${daysCounter} days.`);
    }
}