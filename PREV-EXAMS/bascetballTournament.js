function bascekballTournament(input) {
let tournament = input.shift();
let matchesCount = 0;
let winCount = 0;
let lostCount = 0;
let matchNumber = 0;

while (tournament !== 'End of tournaments') {
    let matches = Number(input.shift());
    matchNumber = 0;
    for (let i = 1; i <= matches; i++){
        matchesCount++;
        matchNumber++;
        let mimiPoints = Number(input.shift());
        let otherPoints = Number(input.shift());
        let diff = mimiPoints - otherPoints;
        if (diff > 0) {
            winCount++;
            console.log(`Game ${matchNumber} of tournament ${tournament}: win with ${diff} points.`);
        } else {
            lostCount++;
            console.log(`Game ${matchNumber} of tournament ${tournament}: lost with ${Math.abs(diff)} points.`);
        }
    }

    tournament = input.shift();
}

let winPercent = winCount/matchesCount*100;
let lostPercent = lostCount/matchesCount*100;

console.log(`${winPercent.toFixed(2)}% matches win`);
console.log(`${lostPercent.toFixed(2)}% matches lost`);

}

bascekballTournament(['Dunkers',
    2,
    75,
    65,
    56,
    73,
    'Fire Girls',
    3,
    67,
    34,
    83,
    98,
    66,
    45,
    'End of tournaments'
    ]);