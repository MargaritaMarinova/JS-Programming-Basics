function journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let realCost = 0;
    let destination;
    let place;
    if (budget<=100){
        destination = `Bulgaria`;
        if (season == `summer`){
            realCost = budget * 0.30;
            place = `Camp`;
        } else if(season == `winter`){
            realCost = budget * 0.70;
            place = `Hotel`;
        }
    } else if(budget <=1000) {
        destination = `Balkans`;
        if (season == `summer`){
            realCost = budget * 0.40;
            place = `Camp`;
        } else if(season == `winter`){
            realCost = budget * 0.80;
            place = `Hotel`;
        }
    } else if(budget>1000){
        destination = `Europe`
        realCost = budget * 0.90;
        place = `Hotel`;
    }
console.log(`Somewhere in ${destination}`);
console.log(`${place} - ${realCost.toFixed(2)}`);

}