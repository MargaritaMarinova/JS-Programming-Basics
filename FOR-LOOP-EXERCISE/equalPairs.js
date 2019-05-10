function equalPairs(input){
    let n = Number(input.shift());
    let maxDiff = 0;
    let lastSum = 0;

    for (let i = 0; i < n; i++) {
        let num1 = Number(input.shift());
        let num2 = Number(input.shift());
        let currSum = num1 + num2;

        if (i > 0) {
            let diff = Math.abs(currSum - lastSum);
                if (maxDiff < diff) {
                    maxDiff = diff;
                }
        }
        lastSum = currSum;
    }
 
    if (maxDiff == 0) {
        console.log (`Yes, value=${lastSum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
    