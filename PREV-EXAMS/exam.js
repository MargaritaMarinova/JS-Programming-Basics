function exam(input) {
    let allStudents = Number(input.shift());
    let gradeSum = 0;
    let gradeAverage = 0;
    let excellent = 0;
    let good = 0;
    let middle = 0;
    let poor = 0;

    for (let i = 1; i <= allStudents; i++) {
        let studentGrade = Number(input.shift());

        if (studentGrade >= 5.00) {
            excellent++;

        } else if (studentGrade <= 4.99 && studentGrade >= 4){
            good++;

        } else if (studentGrade <= 3.99 && studentGrade >= 3){
            middle++;
            
        } else if (studentGrade <= 2.99){
            poor++;
        }
        gradeSum +=studentGrade;
    }
    gradeAverage = gradeSum / allStudents;
    let perExcellent = excellent / allStudents * 100;
    let perGood = good / allStudents * 100;
    let perMiddle = middle / allStudents * 100;
    let perPoor = poor / allStudents * 100;

    console.log(`Top students: ${perExcellent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${perGood.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${perMiddle.toFixed(2)}%`);
    console.log(`Fail: ${perPoor.toFixed(2)}%`);
    console.log(`Average: ${gradeAverage.toFixed(2)}`);
}


exam ([6,
    2,
    3,
    4,
    5,
    6,
    2.2  
    ]);

