function trainTheTrainers(input){
    let n = Number(input.shift());
    let totalSum = 0;
    let count = 0;
    let line = input.shift();

    while (line != 'Finish') {
        let sumOfGrades = 0;
        for (let i = 0; i < n; i++) {
            let grade = Number(input.shift());
            sumOfGrades += grade;
            count++;
        }
        totalSum += sumOfGrades;
        let avg = sumOfGrades / n;
        console.log(`${line} - ${avg.toFixed(2)}.`);
        line = input.shift()
    }
    let average = totalSum / count;
    console.log(`Student's final assessment is ${average.toFixed(2)}.`);
}