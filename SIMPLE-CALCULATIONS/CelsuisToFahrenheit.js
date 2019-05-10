function celsuisToFahrenheit (input){
    let c=Number(input.shift());
    let f=(c*9)/5+32;
    console.log(f.toFixed(2));
}