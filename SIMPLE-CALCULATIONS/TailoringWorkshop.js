function workshop(input) {
    let tables=Number(input.shift());
    let tablesLenght=Number(input.shift());
    let tablesWidth=Number(input.shift());
    let coversArea=tables*(tablesLenght+2*0.30)*(tablesWidth+2*0.30);
    let squaresArea=tables*(tablesLenght/2)*(tablesLenght/2);
    let priceInDollars=coversArea*7+squaresArea*9;
    let priceInLeva=priceInDollars*1.85;
    console.log(`${priceInDollars.toFixed(2)} USD`);
    console.log(`${priceInLeva.toFixed(2)} BGN`);
    }