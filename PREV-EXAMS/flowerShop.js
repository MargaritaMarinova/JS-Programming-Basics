function flowerShop(input){
    let hrizantemi = Number(input.shift());
    let roses = Number(input.shift());
    let tulips = Number(input.shift());
    let season = input.shift();
    let hollidayOrNot = input.shift();
    let allFlowers = hrizantemi + roses + tulips;
    let hrizantemiPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let flowersPrice = 0;

    if(season === 'Spring'){
        hrizantemiPrice = 2;
        rosesPrice = 4.10;
        tulipsPrice = 2.50;
        flowersPrice = (hrizantemi * hrizantemiPrice) + (roses * rosesPrice) + (tulips * tulipsPrice);
        if(hollidayOrNot === 'Y') {
            flowersPrice = flowersPrice + (flowersPrice * 0.15);
        }
        if(tulips >= 7) {
            flowersPrice = flowersPrice - (flowersPrice * 0.05);
        }
        if (allFlowers > 20) {
            flowersPrice = flowersPrice - (flowersPrice * 0.20);
        }

    } else if(season === 'Summer') {
        hrizantemiPrice = 2;
        rosesPrice = 4.10;
        tulipsPrice = 2.50;
        flowersPrice = (hrizantemi * hrizantemiPrice) + (roses * rosesPrice) + (tulips * tulipsPrice);
        if(hollidayOrNot === 'Y') {
            flowersPrice = flowersPrice + (flowersPrice * 0.15);
        }
        
        if (allFlowers > 20) {
            flowersPrice = flowersPrice - (flowersPrice * 0.20);
        }

    } else if(season === 'Autumn') {
        hrizantemiPrice = 3.75;
        rosesPrice = 4.50;
        tulipsPrice = 4.15;
        flowersPrice = (hrizantemi * hrizantemiPrice) + (roses * rosesPrice) + (tulips * tulipsPrice);
        if(hollidayOrNot === 'Y') {
            flowersPrice = flowersPrice + (flowersPrice * 0.15);
        }
        
        if (allFlowers > 20) {
            flowersPrice = flowersPrice - (flowersPrice * 0.20);
        }

    } else if (season === 'Winter') {
        hrizantemiPrice = 3.75;
        rosesPrice = 4.50;
        tulipsPrice = 4.15;
        flowersPrice = (hrizantemi * hrizantemiPrice) + (roses * rosesPrice) + (tulips * tulipsPrice);
        if(hollidayOrNot === 'Y') {
            flowersPrice = flowersPrice + (flowersPrice * 0.15);
        }
        if(roses >= 10) {
           
            flowersPrice = flowersPrice - (flowersPrice * 0.10);
        }
        if (allFlowers > 20) {
            flowersPrice = flowersPrice - (flowersPrice * 0.20);
        }

    }

let totalPrice = flowersPrice +2;
console.log(totalPrice.toFixed(2));

}

flowerShop ([3,
    10,
    9,
    'Winter',
    'N'    
    ]);