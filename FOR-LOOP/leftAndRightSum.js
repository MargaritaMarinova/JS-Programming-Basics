function leftAndRightSum(input){
    let n = Number(input[0]);
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 1; i<= n; i++) {
        let num = Number(input[i]);
        leftSum +=num;
    }
    for (let j = n+1; j <= 2*n; j++) {
        let num = Number(input[j]);
        rightSum +=num;
    }
    if (leftSum == rightSum) {
        console.log (`Yes, sum = ${leftSum}`);
    } else {
        let diff = Math.abs(leftSum - rightSum);
        console.log (`No, diff = ${diff}`);
    }
}