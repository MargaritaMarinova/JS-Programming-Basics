function numberToText(input){
    let num = Number(input.shift());
    if(num === 1){
        console.log("one");
    } else if(num === 2){
        console.log("two");
    } else if(num === 3){
        console.log("three");
    } else if(num === 4){
        console.log("four");
    } else if(num === 5){
        console.log("five");
    } else if(num === 6){
        console.log("six");
    } else if(num === 7){
        console.log("seven");
    } else if(num === 8){
        console.log("eight");
    } else if(num === 9){
        console.log("nine");
    } else {
        console.log("number too big");
    }
}

numberToText([5]);

//Да се напише програма, която чете цяло число в диапазона [1…9], въведено от потребителя и го изписва с думи на английски език. Ако числото е извън диапазона, изписва "number too big". 