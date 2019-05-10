function skeleton(input){
    let controlMinutes = Number(input.shift());
    let controlSeconds = Number(input.shift());
    let lengthInMeters = Number(input.shift());
    let secondsForHundred = Number(input.shift());

    let controlTotalSeconds = controlMinutes * 60 + controlSeconds;
    let timeWillSlow = lengthInMeters / 120;
    let totalSlowTime = timeWillSlow * 2.5;
    let marinTime = (lengthInMeters/100) * secondsForHundred - totalSlowTime;

    let diff = Math.abs(controlTotalSeconds - marinTime);

    if (marinTime <= controlTotalSeconds) {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}

skeleton([1,
    20,
    1546,
    12    
    ]);