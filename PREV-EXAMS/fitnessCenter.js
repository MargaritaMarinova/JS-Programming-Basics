function fitnessCenter(input) {
let visitors = Number(input.shift());
let backCount = 0;
let chestCount = 0;
let legCount = 0;
let absCount = 0;
let shakeCount = 0;
let barCount = 0;
let trainCount = 0;
let proteinCount = 0;
let trainPercent = 0;
let proteinPercent = 0;

for (let i = 1; i <= visitors; i++){
    let activity = input.shift();
    switch(activity){
        case 'Back': 
            backCount++; 
            trainCount++; 
            break;
        case 'Chest': 
            chestCount++; 
            trainCount++; 
            break;
        case 'Legs': 
            legCount++; 
            trainCount++; 
            break;
        case 'Abs': 
            absCount++; 
            trainCount++; 
            break;
        case 'Protein shake': 
            shakeCount++; 
            proteinCount++; 
            break;
        case 'Protein bar': 
            barCount++; 
            proteinCount++; 
            break;
    }
}
trainPercent = trainCount / visitors * 100;
proteinPercent = proteinCount / visitors * 100;

console.log(`${backCount} - back`);
console.log(`${chestCount} - chest`);
console.log(`${legCount} - legs`);
console.log(`${absCount} - abs`);
console.log(`${shakeCount} - protein shake`);
console.log(`${barCount} - protein bar`);
console.log(`${trainPercent.toFixed(2)}% - work out`);
console.log(`${proteinPercent.toFixed(2)}% - protein`);

}

fitnessCenter([10,
    'Back',
    'Chest',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    'Protein shake',
    'Protein bar',
    'Legs',
    'Abs'
    ]);