function equalWords(input){
    let firstWord = input.shift();
    let secondWord = input.shift();
    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase();
    if(firstWord==secondWord){
        console.log("yes");
    } else{
        console.log("no");
    }
}

//Да се напише програма, която чете две думи, въведени от потребителя, и проверява дали са еднакви. Да не се прави разлика между главни и малки думи. Да се изведе "yes" или "no". 