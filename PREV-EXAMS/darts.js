function darts(input) {
    let player = input.shift();
    let part = input.shift();
    let score = Number(input.shift());
    let currentPoints = 301;
    let shotsCount = 0;
    let unsuccessfullShots = 0;
   

    while (part !== 'Retire'){
        if(currentPoints !== 0){
            if(part === 'Double'){
            score *=2;
            } else if (part === 'Triple'){
            score *=3;
            } else if(part === 'Single'){
            score=score;
            }

            if (score <= currentPoints){
                currentPoints -= score;
                shotsCount++;
            } else {
                unsuccessfullShots++;
            }

            
        } else {
            break;
        }

        part = input.shift();
        score = Number(input.shift());

    }

    if(currentPoints === 0){
        console.log(`${player} won the leg with ${shotsCount} shots.`);
    } else {
        console.log(`${player} retired after ${unsuccessfullShots} unsuccessful shots.`);
    }
}

darts(['Rob Cross',
    'Triple',
    20,
    'Triple',
    20,
    'Triple',
    20,
    'Triple',
    20,
    'Double',
    20,
    'Triple',
    20,
    'Double',
    5,
    'Triple',
    10,
    'Double',
    6,
    'Retire'    
    ]);