function changeBureau(input){
    let bitcoinNumber = Number(input.shift());
    let uanNumber = Number(input.shift());
    let tax = Number(input.shift());

    let bitcoinsInLeva = bitcoinNumber * 1168; 
    let uanInLeva = uanNumber * 0.15 * 1.76;
    let moneyInEuro = (bitcoinsInLeva + uanInLeva) / 1.95;

    let finalMoney = moneyInEuro - (moneyInEuro * (tax/100));

    console.log(finalMoney.toFixed(2));

}

changeBureau ([20,
    5678,
    2.4
    ]);