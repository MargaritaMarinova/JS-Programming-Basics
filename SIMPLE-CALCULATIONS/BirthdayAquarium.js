function birthdayAquarium(input){
    let aquariumLenght=input.shift();
    let width=input.shift();
    let height=input.shift();
    let percent=input.shift();
    let capacity=aquariumLenght*width*height;
    let totalLiters=capacity*0.001;
    let calculatedPercent=percent*0.01;
    let needed=totalLiters*(1-calculatedPercent);
    console.log(needed.toFixed(3));
}