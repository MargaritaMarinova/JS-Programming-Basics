function sumPrimeNonPrime(input) {
    let command = input.shift();
    let isPrime = true;
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command != 'stop') {
      let num = Number[command];
        if (num < 0) {
          console.log('Number is negative.');
          continue;
        } 
        if (num == 1) {
          isPrime = false;
        } else {
            for (let i = num; i>= 1; i--) {
              if (num % i == 0 && i != num) {
               isPrime = false;
               break;   
              }
            }
        }
          
          if (isPrime) {
            sumPrime += num;  
          } else {
              sumNonPrime += num;
             }
    
    }
    console.log(`Sum of all prime numbers is ${sumPrime}`);
    console.log(`Sum of all non prime numbers is ${sumNonPrime}`);

}

sumPrimeNonPrime([3,
    9,
    0,
    7,
    19,
    4,
    'stop'
    ])