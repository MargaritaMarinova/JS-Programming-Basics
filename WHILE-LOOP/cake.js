function cake(input){
    let cakeLenght = Number(input.shift());
    let cakeWidth = Number(input.shift());
    let cakePieces = cakeLenght * cakeWidth;

    let piecesTaken = 0;
    let command = input.shift();

    while (command !== 'STOP') {
        let num = Number(command);
        piecesTaken +=num;
        if (piecesTaken >= cakePieces) {
            let diff = piecesTaken - cakePieces;
            console.log (`No more cake left! You need ${diff} pieces more.`);
            break;
        } 
        command = input.shift();
    } if (command == 'STOP' && cakePieces >=piecesTaken) {
        let diff = cakePieces - piecesTaken;
        console.log (`${diff} pieces are left.`);
    }
} 