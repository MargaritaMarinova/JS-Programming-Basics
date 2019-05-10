function sushiTime(input) {
    let sushiType = input.shift();
    let restorant = input.shift();
    let portions = Number(input.shift());
    let order = input.shift();
    let sushiPrice = 0;
    let totalSushiPrice = 0;
    

    if(restorant != "Sushi Zone" && restorant != "Sushi Time" && restorant != "Sushi Bar" && restorant != "Asian Pub") {
        console.log(`${restorant} is invalid restaurant!`);
    } else {
        if (restorant == "Sushi Zone"){
            switch(sushiType){
                case "sashimi": sushiPrice = 4.99; break;
                case "maki": sushiPrice = 5.29; break;
                case "uramaki": sushiPrice = 5.99; break;
                case "temaki": sushiPrice = 4.29; break;
                default:'';
            }

        } else if (restorant == "Sushi Time"){
            switch(sushiType){
                case "sashimi": sushiPrice = 5.49; break;
                case "maki": sushiPrice = 4.69; break;
                case "uramaki": sushiPrice = 4.49; break;
                case "temaki": sushiPrice = 5.19; break;
                default:'';
            }

        } else if (restorant == "Sushi Bar"){
            switch(sushiType){
                case "sashimi": sushiPrice = 5.25; break;
                case "maki": sushiPrice = 5.55; break;
                case "uramaki": sushiPrice = 6.25; break;
                case "temaki": sushiPrice = 4.75; break;
                default:'';
            }

        } else if (restorant == "Asian Pub"){
            switch(sushiType){
                case "sashimi": sushiPrice = 4.50; break;
                case "maki": sushiPrice = 4.80; break;
                case "uramaki": sushiPrice = 5.50; break;
                case "temaki": sushiPrice = 5.50; break;
                default:'';
            }
        }
        
        
        if (order !== 'Y') {
            totalSushiPrice = sushiPrice * portions;
        } else {
            totalSushiPrice = sushiPrice * portions*1.2;
        } 
        
        console.log(`Total price: ${Math.ceil(totalSushiPrice)} lv.`);   

    }


}

sushiTime(['temaki',
    'Asian Pub',
    5,
    'N']);

// sushiTime (['maki',
 //   'Sushi Zone',
 //   4,
  //  'Y']);