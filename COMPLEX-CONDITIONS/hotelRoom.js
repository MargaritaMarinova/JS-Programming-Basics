function hotelRoom(input){
    let month = input.shift();
    let nights = Number(input.shift());
    let studioPerNight = 0;
    let apartPerNight = 0;
    let finalStudio = 0;
    let finalApart = 0;

    if(month == 'May' || month == 'October'){
        studioPerNight = 50;
        apartPerNight = 65;
        finalStudio = nights * studioPerNight;
        finalApart = nights * apartPerNight;
        if(nights>7 && nights <=14){
            finalStudio *= 0.95;
        } else if (nights>14) {
            finalStudio = finalStudio - (finalStudio * 0.30);
            finalApart = finalApart - (finalApart * 0.10); 
        }
    } else if(month == 'June' || month == 'September'){
        studioPerNight = 75.2;
        apartPerNight = 68.7;
        finalStudio = nights * studioPerNight;
        finalApart = nights * apartPerNight;
        if(nights>14){
            finalStudio = finalStudio - (finalStudio * 0.20);
            finalApart = finalApart - (finalApart * 0.10); 
        } 
    } else if(month == 'July' || month == 'August'){
        studioPerNight = 76;
        apartPerNight = 77;
        finalStudio = nights * studioPerNight;
        finalApart = nights * apartPerNight;
        if(nights>14){
           finalApart = finalApart - (finalApart * 0.10); 
        }  
    }

    console.log(`Apartment: ${finalApart.toFixed(2)} lv.`);
    console.log(`Studio: ${finalStudio.toFixed(2)} lv.`);
}