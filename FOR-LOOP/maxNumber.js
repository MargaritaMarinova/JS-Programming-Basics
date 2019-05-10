function maxNumber(input) {
    let n = Number(input[0]);
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++){
        let num = Number(input[i]);
        if (num > max) {
            max = num;
        }
    }
    console.log(max);
}