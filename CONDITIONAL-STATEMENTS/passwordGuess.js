function passwordGuess(input){
    let password = input.shift();
    if(password=="s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    } else{
        console.log("Wrong password!");
    }
}

passwordGuess(magi);

//Да се напише програма, която чете парола (един ред с произволен текст), въведена от потребителя и проверява, дали въведеното съвпада с фразата "s3cr3t!P@ssw0rd". При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!". 
