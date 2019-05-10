function cleverLily(input) {
    let lilyAge = Number(input[0]); // 10
    let washingPrice = Number(input[1]);//170
    let toyPrice = Number(input[2]); //6
    let lilyMoney = 0;
    let toyCount = 0; //5
    let totalSum = 0;
    let brother = 0;

    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 == 0){
            brother++; //5
        } else {
            toyCount++;
        }
    }
        for (let j = 1; j <= brother; j++) {
            lilyMoney += 10*j;
        }
        totalSum = lilyMoney + (toyPrice * toyCount) - brother; //175

    if (totalSum >= washingPrice) {
        let diff = totalSum - washingPrice; //5
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        let diff = Math.abs(totalSum - washingPrice);
        console.log (`No! ${diff.toFixed(2)}`);
    }
}