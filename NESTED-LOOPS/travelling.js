function travelling (input) {
    let destination = input.shift();
    
    while (destination != 'End') {
        let minMoney = Number(input.shift());
        let currentMoney = 0;
        while (currentMoney < minMoney) {
            let money = Number(input.shift());
            currentMoney +=money;
        }
        console.log(`Going to ${destination}!`);
        destination = input.shift();
    }
    
}

travelling (['Greece',
    1000,    
    200,    
    200,    
    300,    
    100,    
    150,    
    240,
    'Spain',
    1200,    
    300,    
    500,    
    193,    
    423,    
    'End'
    ]);