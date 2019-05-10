function stadionIncome(input){
    let sectors = Number(input.shift());
    let capacity = Number(input.shift());
    let singleTicketPrice = Number(input.shift());

    let profit = capacity * singleTicketPrice;
    let oneSector = profit / sectors;
    let charityMoney = (profit - (oneSector * 0.75))/8;

    console.log(`Total income - ${profit.toFixed(2)} BGN`);
    console.log (`Money for charity - ${charityMoney.toFixed(2)} BGN`);
}

stadionIncome([4, 5000, 5]);