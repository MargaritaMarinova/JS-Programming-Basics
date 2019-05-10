function oddEvenSUm(input) {
    let n = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;

    for (let i=1; i<=n; i++){
        let num = Number(input[i]);
        if (i % 2 == 0) {
            evenSum +=num;
        } else {
            oddSum +=num;
        }
    }
    let diff = Math.abs(oddSum - evenSum);
    if (diff == 0) {
        console.log (`Yes`);
        console.log (`Sum = ${oddSum}`);
    } else {
        console.log (`No`);
        console.log (`Diff = ${diff}`);
    }
}