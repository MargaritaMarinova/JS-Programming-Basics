function tennisEquipment(input) {
    let tennisRPrice = Number(input.shift());
    let rocketsNumber = Number(input.shift());
    let shoesNumber = Number(input.shift());
    
    let shoesPrice = tennisRPrice/6;

    let allRockets = tennisRPrice * rocketsNumber;
    let allShoes = shoesPrice * shoesNumber;
    let otherEquipment = (allRockets + allShoes) * 0.2;
    let totalSum = allRockets + allShoes + otherEquipment;

    let djokovichPay = totalSum/8;
    let sponsorsPay = totalSum - djokovichPay;

    console.log(`Price to be paid by Djokovic ${Math.floor(djokovichPay)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPay)}`);

}

tennisEquipment ([850,
    4,
    2
    ]);