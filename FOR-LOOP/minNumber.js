function minNumber(input) {
    let n = Number(input[0]);
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <=n; i++) {
        let num = Number(input[i]);
        if (num < min) {
            min = num;
        }
    }
    console.log(min);
}