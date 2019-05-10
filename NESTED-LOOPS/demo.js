function christmasSweets(input) {
    let baklavaPrice = Number(input.shift());
    let myfiniPrice = Number(input.shift());
    let kgShtolen = Number(input.shift());
    let kgBonboni = Number(input.shift());
    let kgBiskviti = Number(input.shift());

    let shtolenPrice = baklavaPrice + (baklavaPrice * 0.60);
    let bonboniPrice = myfiniPrice + (myfiniPrice * 0.80);
    let biskvitiPrice = 7.50;

    let moneyShtolen = shtolenPrice * kgShtolen;
    let moneyBonboni = bonboniPrice * kgBonboni;
    let moneyBiskviti = biskvitiPrice * kgBiskviti;

    let totalMoney = moneyShtolen + moneyBonboni + moneyBiskviti;

    console.log(totalMoney.toFixed(2));
}

christmasSweets([6.90,
    4.20,
    1.5,
    2.5,
    1
    ]);