function magicNumbers(args){
    let magicNumber = Number(args[0]);
    let formatString='';
    
        for (let i = 1; i <= 9; i++) {
            for (let j = 0; j <= 9; j++){
                for (let k = 0; k <= 9; k++){
                    for (let l = 0; l <= 9; l++){
                        for (let m = 0; m <= 9; m++){
                            for (let n = 0; n <= 9; n++){
                                let sumOfMultiply = i * j * k * l * m * n;
                                if (sumOfMultiply == magicNumber) {
                                    formatString += `${i}${j}${k}${l}${m}${n} `;
                                    }
                            }
                        }
                    }
                }
    
            }
        }
        console.log(formatString);
    }