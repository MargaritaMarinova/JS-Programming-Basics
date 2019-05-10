function multiplyTable(args) {
    let boyNumber = Number(args[0]);

    let firstNum = boyNumber % 10;
    let secondNum = Math.floor((boyNumber/10)%10);
    let thirdNum = Math.floor(boyNumber/100);
    
    for (let i = 1; i <= firstNum; i++){
        for (let j = 1; j <= secondNum; j++){
            for (let k = 1; k <= thirdNum; k++){
                console.log(`${i} * ${j} * ${k} = ${i*j*k};`);
            }
        }

    }
}

multiplyTable ([324]);