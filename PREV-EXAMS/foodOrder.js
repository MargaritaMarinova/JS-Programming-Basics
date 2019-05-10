function foodOrder(input) {
    let budget = Number(input.shift());
    let foodCount = 0;
    let currentSum = 2.50;
    
    let food = input.shift();
    let foodPrice = Number(input.shift());

    while (food !== 'Order') {
        currentSum += foodPrice;
        foodCount++; 
          
        if (currentSum > budget) {
        console.log('You will exceed the budget if you order this!');
        currentSum -= foodPrice;
        foodCount--;
        }

        food = input.shift();
        foodPrice = Number(input.shift());
    }

console.log(`You ordered ${foodCount} items!`);
console.log(`Total: ${currentSum.toFixed(2)}`);
}

foodOrder([30,
    'Salad',
    5.50,
    'Steak',
    7.90,
    'Potatoes',
    4.50,
    'Order'    
    ]);