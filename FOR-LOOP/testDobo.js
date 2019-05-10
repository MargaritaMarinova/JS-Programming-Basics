function testDebugger(input){
    let iter = Number(input.shift);
    for(let i = 0; i < input; i++){
        console.log('Loop: ' + i);
    }

}

testDebugger(10);