function charityCampaign(input){
    let days=Number(input.shift());
    let bakersCount=Number(input.shift());
    let cakeCount=Number(input.shift());
    let wafflesCount=Number(input.shift());
    let pancakesCount=Number(input.shift());
    let cakesSum=cakeCount*45;
    let wafflesSum=wafflesCount*5.80;
    let pancakesSum=pancakesCount*3.20;
    let oneDaySum=(cakesSum+wafflesSum+pancakesSum)*bakersCount;
let totalSum=oneDaySum*days;
let result=totalSum-(totalSum*0.125);
console.log(result.toFixed(2));
}