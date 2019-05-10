function coins(input){
    let resto = Number(input.shift());
    let counter = 0;
    let restoCoins = resto * 100;

    while (restoCoins >= 200) {
        restoCoins -=200;
        counter++;
    }
    while (restoCoins >= 100) {
        restoCoins -=100;
        counter++;
    }
    while (restoCoins >= 50) {
        restoCoins -=50;
        counter++;
    }
    while (restoCoins >= 20) {
        restoCoins -=20;
        counter++;
    }
    while (restoCoins >= 10) {
        restoCoins -=10;
        counter++;
    }
    while (restoCoins >= 5) {
        restoCoins -=5;
        counter++;
    }
    while (restoCoins >= 2) {
        restoCoins -=2;
        counter++;
    }
    while (restoCoins >= 1) {
        restoCoins -=1;
        counter++;
    }
    
    console.log(counter);
}