function combinations(args){
    let num = Number(args[0]);
    let combCounter = 0;

    for (let i = 0; i <= num; i++){
        for (let j = 0; j <= num; j++) {
            for (let k = 0; k <= num; k++) {
                for (let l = 0; l <= num; l++) {
                    for (let m = 0; m <= num; m++) {
                        let sum = i + j + k + l + m;
                        if (sum == num) {
                            combCounter ++;
                        }
                    }
                }
            }
        }
    }
    console.log(combCounter);

}

combinations ([25]);