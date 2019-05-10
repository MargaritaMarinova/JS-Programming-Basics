function christmasDecoration(input){
    let budget = Number(input.shift());
    let item = input.shift();
    let n = item.length;

   
    
    let itemSum = 0;
    

    while (item !== 'Stop') {
                
        for (let i = 0; i < n; i++){
            itemSum += item.charCodeAt(i);
       }
        if(itemSum <=  budget) {
            console.log('Item successfully purchased!');
        } else {
            console.log ('Not enough money!');
            break;
        }
        item = input.shift();
            n = item.length;
   }
   if(budget > itemSum) {
    let diff = budget - itemSum;
   console.log(`Money left: ${diff}`);
}
}

christmasDecoration ([5000,
    'Christmas lights',
    'wreath',
    'Stop'    
        ]);