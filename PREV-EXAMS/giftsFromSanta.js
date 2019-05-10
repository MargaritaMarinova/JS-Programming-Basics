function giftsFromSanta(input){
    let startNumber = Number(input.shift());
    let endNumber = Number(input.shift());
    let special = Number(input.shift());
    let finalString = '';

    for (let i = endNumber; i >= startNumber; i--) {
        if (i % 2 === 0 && i % 3 === 0) {
            if(i === special){
                break;
            } else{
            finalString += i +' ';
            }
        }
    }
    console.log(finalString);
}

giftsFromSanta ([1,
    36,
    12    
    ]);