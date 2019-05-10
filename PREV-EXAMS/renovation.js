function renovation(input){
    let budget = Number(input.shift());
    let floorWidth = Number(input.shift());
    let floorLength = Number(input.shift());
    let triangleSide = Number(input.shift());
    let triangleHigh = Number(input.shift());
    let singlePrice = Number(input.shift());
    let workPrice = Number(input.shift());

    let wholeFloor = floorWidth * floorLength;
    let wholeTriangles = triangleSide * triangleHigh/2;
    let trianglesNeeded = Math.ceil(wholeFloor / wholeTriangles) +5;

    let moneyNeeded = trianglesNeeded * singlePrice + workPrice;

    let diff = Math.abs(budget - moneyNeeded);

    if(budget >= moneyNeeded) {
        console.log(`${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`You'll need ${diff.toFixed(2)} lv more.`);
    }
}

renovation([1000,
    5.55,
    8.95,
    0.90,
    0.85,
    13.99,
    321    
    ]);