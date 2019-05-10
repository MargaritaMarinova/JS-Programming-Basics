function examPreparation(input) {
	let badGrades = Number(input.shift());
	let countBadGrades = 0;
	let sumGrades = 0;
	let countForGrades = 0;
	let lastProblem = "";
	
	while (countBadGrades < badGrades) {
		let nameOfExercise = input.shift();
		let grade = Number(input.shift());
		if (nameOfExercise == "Enough") {
			let average = sumGrades / countForGrades;
			console.log(`Average score: ${average.toFixed(2)}`);
			console.log(`Number of problems: ${countForGrades}`);
			console.log(`Last problem: ${lastProblem}`);
			break;
		}
		sumGrades +=grade;
		countForGrades++;
		if (grade <=4) {
			countBadGrades++;
		}
		lastProblem = nameOfExercise;
	}
	if (countBadGrades == badGrades) {
		console.log(`You need a break, ${countBadGrades} poor grades.`);
	}
}