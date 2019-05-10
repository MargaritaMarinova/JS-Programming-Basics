function sumNumbers(input) {
    let n = Number (input[0]);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        sum = sum + num;
    }
    console.log(sum);
}