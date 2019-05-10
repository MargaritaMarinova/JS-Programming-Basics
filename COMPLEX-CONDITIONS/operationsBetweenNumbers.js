function operationBetweenNumbers(input){
    let N1 = Number(input.shift());
    let N2 = Number(input.shift());
    let result = 0;
    let action = input.shift();

    if(N1 == 0){
        console.log(`Cannot divide ${N2} by zero`);
    } else if(N2 == 0){
        console.log(`Cannot divide ${N1} by zero`);  
    } 

    if (N1 !== 0 && N2 !==0){

    switch (action){
        case '+': result = N1 + N2;
        break;
        case '-': result = Math.abs(N1-N2);
        break;
        case '*': result = N1 * N2;
        break;
        case '/': result = N1 / N2;
        break;
        case '%': result = N1 % N2;
        break;
        default: '';
        }
    
    if(result % 2 == 0 && action !== '/' && action !== '%'){
        console.log(`${N1} ${action} ${N2} = ${result.toFixed(0)} - even`);
    } else if(result % 2 == 1 && action !== '/' && action !== '%'){
        console.log(`${N1} ${action} ${N2} = ${result.toFixed(0)} - odd`);
    } else if(action == '/'){
        console.log(`${N1} ${action} ${N2} = ${result.toFixed(2)}`);
    } else if(action == '%'){
        console.log(`${N1} ${action} ${N2} = ${result.toFixed(0)}`); 
    }
}
}