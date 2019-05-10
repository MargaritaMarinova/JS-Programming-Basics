function histogram(input) {
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i < n; i++){
       let num = Number(input[i]);
       
        if (num < 200) {
            p1++;
        } else if (num <= 399) {
            p2++;
        } else if (num <= 599) {
            p3++;
        } else if (num <= 799) {
            p4++;
       } else if (num >= 800) {
            p5++;
       }
    }
    let p1Perc = p1 / n * 100;
    let p2Perc = p2 / n * 100;
    let p3Perc = p3 / n * 100;
    let p4Perc = p4 / n * 100;
    let p5Perc = p5 / n * 100;
    
    console.log(`${p1Perc.toFixed(2)}%`);
    console.log(`${p2Perc.toFixed(2)}%`);
    console.log(`${p3Perc.toFixed(2)}%`);
    console.log(`${p4Perc.toFixed(2)}%`);
    console.log(`${p5Perc.toFixed(2)}%`);
}