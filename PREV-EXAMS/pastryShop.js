function pastryShop(input) {
    let candyType = input.shift();
    let candyNumber = Number(input.shift());
    let date = Number(input.shift());
    let finalPrice = 0;
    let singlePrice = 0;
    let discount = 0;
    let earlyDiscount = 0;

    if (date >= 1 && date <= 15){
        switch(candyType) {
            case 'Cake': singlePrice = 24; break;
            case 'Souffle': singlePrice = 6.66; break;
            case 'Baklava': singlePrice = 12.60; break;
            default:'';

        }
        earlyDiscount = 0.10;
        finalPrice = singlePrice * candyNumber;
        if(finalPrice >= 100 && finalPrice <=200) {
            discount = 0.15;
        } else if(finalPrice > 200){
            discount = 0.25;
        }
        finalPrice = finalPrice - (finalPrice *discount);
        finalPrice = finalPrice - (finalPrice * earlyDiscount);

    } else if(date > 15 && date <= 22){
        switch(candyType) {
            case 'Cake': singlePrice = 28.7; break;
            case 'Souffle': singlePrice = 9.8; break;
            case 'Baklava': singlePrice = 16.98; break;
            default:'';

        }
        finalPrice = singlePrice * candyNumber;
        if(finalPrice >= 100 && finalPrice <=200) {
            discount = 0.15;
        } else if(finalPrice > 200){
            discount = 0.25;
        }
        finalPrice = finalPrice - (finalPrice *discount);
        

    } else if(date > 22 && date <=31) {
        switch(candyType) {
            case 'Cake': singlePrice = 28.7; break;
            case 'Souffle': singlePrice = 9.8; break;
            case 'Baklava': singlePrice = 16.98; break;
            default:'';

        }
        finalPrice = singlePrice * candyNumber;
        
    }

    console.log(finalPrice.toFixed(2));

}

pastryShop (['Souffle',
    20,
    24
    ]);