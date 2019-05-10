function fromOneHundredToTwoHundred(input){
    let num = Number(input.shift());
    if(num<100){
        console.log("Less than 100");
    } else if(num>=100&&num<=200){
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

fromOneHundredToTwoHundred([290]);

//Да се напише програма, която чете цяло число, въведено от потребителя и проверява, дали е под 100, между 100 и 200 или над 200. Да се отпечатат съответно съобщения, като в примерите по-долу:
