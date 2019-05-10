function christmasMarket(input) {
    let neededMoney = Number(input.shift());
    let fantasyBooks = Number(input.shift());
    let horrorBooks = Number(input.shift());
    let romanceBooks = Number(input.shift());
    let sellersMoney = 0;

    let fantasyTotal = fantasyBooks * 14.90;
    let horrorTotal = horrorBooks * 9.80;
    let romanceTotal = romanceBooks * 4.30;

    let totalMoney = fantasyTotal + horrorTotal + romanceTotal;
    let vat = totalMoney * 0.20;
    let moneyAfterVat = totalMoney - vat;

    let diff = Math.abs(moneyAfterVat - neededMoney);

    if (moneyAfterVat > neededMoney) {
        sellersMoney = Math.floor(diff * 0.10);
        console.log(`${(neededMoney + (diff - sellersMoney)).toFixed(2)} leva donated.`);
        console.log(`Sellers will receive ${sellersMoney} leva.`);
    } else {
        console.log(`${diff.toFixed(2)} money needed.`);
    }  


}

christmasMarket ([200,
    15,
    10,
    5
    ]);