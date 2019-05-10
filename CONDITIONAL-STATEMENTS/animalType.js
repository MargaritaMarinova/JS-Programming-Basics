function animalType(input){
    let animal = input.shift();

            switch(animal){
            case "dog": {
                console.log("mammal");
                break;
            } 
            case "snake":
            case "crocodile":
            case "tortoise": {
                console.log("reptile");
                break;
            } 
            default: {
                console.log("unknown");
                break;
            }
        }
        
}

//Напишете програма, която отпечатва класа на животното според неговото име, въведено от потребителя.