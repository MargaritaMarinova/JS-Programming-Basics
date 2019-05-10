function dayOfWeek(input){
    let day = input.shift();
    if(day < 1 || day > 7){
        console.log("Error");
    } else {
        switch(day){
            case"1": {
            console.log("Monday");
            break;
        }   case"2": {
            console.log("Tuesday");
            break;
        }   case"3": {
            console.log("Wednesday");
            break;
        }   case"4": {
            console.log("Thursday");
            break;
        }   case"5": {
            console.log("Friday");
            break;
        }   case"6": {
            console.log("Saturday");
            break;
        }   case"7": {
            console.log("Sunday");
            break;
        }
    }
        
    }
}

//Напишете програма, която чете цяло число, въведено от потребителя, и отпечатва ден от седмицата (на английски език), в граници [1...7] или отпечатва "Error" в случай, че въведеното число е невалидно. 