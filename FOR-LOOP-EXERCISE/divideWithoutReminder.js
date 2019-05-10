function divideWithoutReminder(input){
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 0; i < n; i++){
        let num = Number(input[i]);

        if (num % 2 === 0) {
            p1++;
        }
        if (num % 3 ==0) {
            p2++;
        }
        if (num % 4 == 0) {
            p3++;
        }
    }
    let p1Perc = p1 / n *100;
    let p2Perc = p2 / n *100;
    let p3Perc = p3 / n *100;

    console.log(`${p1Perc.toFixed(2)}%`);
    console.log(`${p2Perc.toFixed(2)}%`);
    console.log(`${p3Perc.toFixed(2)}%`);
}