function seaTrip (input){
    let foodMoney = Number(input.shift());
    let giftMoney = Number(input.shift());
    let hotelMoney = Number(input.shift());

    let travelMoney = 420/100*7*1.85;
    let moneyforAllTimeGifts = 3*giftMoney;
    let moneyForAllTimeFood = 3*foodMoney;
    let moneyForHotel = (hotelMoney * 0.9) + (hotelMoney * 0.85) + (hotelMoney * 0.80);
    let totalSum = travelMoney + moneyForAllTimeFood + moneyforAllTimeGifts + moneyForHotel;

    console.log(`Money needed: ${totalSum.toFixed(2)}`);

}

seaTrip ([100, 50, 500])