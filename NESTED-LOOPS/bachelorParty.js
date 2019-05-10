function bachelorParty(input){
    let sumForSinger = Number(input.shift());
    let command = input.shift();

let singlePersonPrice = 0;
let groupPrice = 0;
let totalPeople = 0;
let totalMoney = 0;

    while (command != 'The restaurant is full') {
       let currentGroup = Number(command); 
        if (currentGroup < 5) {
            singlePersonPrice = 100;            
        } else {
            singlePersonPrice = 70;
        }
        groupPrice = currentGroup * singlePersonPrice;
        totalPeople += currentGroup;
        totalMoney += groupPrice;

        command = input.shift();
    }
    if (totalMoney >= sumForSinger) {
        console.log (`You have ${totalPeople} guests and ${(totalMoney - sumForSinger)} leva left.`);
    } else {
        console.log (`You have ${totalPeople} guests and ${totalMoney} leva income, but no singer.`)
    }

}

bachelorParty ([2800,
    5,
    5,
    4,
    6,
    6,
    12,
    12,
    'The restaurant is full'
    ]);