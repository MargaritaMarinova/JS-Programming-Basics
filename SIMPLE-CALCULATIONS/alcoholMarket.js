function alcoholMarket(input){
    let whiskeyPrice=Number(input.shift());
    let beerQuantity=Number(input.shift());
    let wineQuantity=Number(input.shift());
    let rakiyaQuantity=Number(input.shift());
    let whiskeyQuantity=Number(input.shift());
    let rakiyaPrice=0.5*whiskeyPrice;
    let winePrice=rakiyaPrice-(rakiyaPrice*0.4);
    let beerPrice=rakiyaPrice-(rakiyaPrice*0.8);
    let rakiyaSum=rakiyaQuantity*rakiyaPrice;
    let wineSum=wineQuantity*winePrice;
    let beerSum=beerQuantity*beerPrice;
    let whiskeySum=whiskeyQuantity*whiskeyPrice;
    let neededMoney=rakiyaSum+wineSum+beerSum+whiskeySum;
    console.log(neededMoney.toFixed(2));

}