function spaceShip(input) {
    let spaceWidth = Number(input.shift());
    let spaceLength = Number(input.shift());
    let spaceHight = Number(input.shift());
    let manAvg = Number(input.shift());

    let roomHight = manAvg + 0.4;
    let spaceship = spaceWidth * spaceHight * spaceLength;
    let room = roomHight*2*2;
    let numberAstronauts = Math.floor(spaceship / room);

    if (numberAstronauts < 3){
        console.log('The spacecraft is too small.');
    } else if(numberAstronauts > 10) {
        console.log('The spacecraft is too big.');
    } else {
        console.log(`The spacecraft holds ${numberAstronauts} astronauts.`);
    }
}

spaceShip([3.5, 4, 5, 1.70]);