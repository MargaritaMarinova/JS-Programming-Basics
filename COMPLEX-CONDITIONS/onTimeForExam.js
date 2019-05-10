function onTimeForExam(input){
    let examHour = Number(input.shift());
    let examMinutes = Number(input.shift());
    let studentHour = Number(input.shift());
    let studentMinutes = Number(input.shift());
    let examMid = examHour *60 + examMinutes;
    let studentMid = studentHour * 60 + studentMinutes; 
    let realHour = 0;
    let realMinutes = 0;
    let status;
        if (examMid - studentMid > 30){
            status = 'Early';
            if (examMid - studentMid >= 60){
                realHour = Math.floor((examMid - studentMid)/60);
                realMinutes = (examMid - studentMid) % 60;
            } else {
                realMinutes = examMid - studentMid;
            }
        } else if(examMid - studentMid <=30 && examMid - studentMid>=0) {
            status = 'On time'
            realMinutes = examMid - studentMid;
        } else {
            status = 'Late';
            if (studentMid - examMid >= 60){
                realHour = Math.floor((studentMid - examMid)/60);
                realMinutes = (studentMid - examMid) % 60;
            } else {
                realMinutes = studentMid - examMid;
            } 
        }
        if (status == 'Early'){
            console.log(`Early`);
            if (realHour !==0 && realMinutes<10){
                console.log(`${realHour}:0${realMinutes} hours before the start`);
            } else if(realHour !==0 && realMinutes>10){
                console.log(`${realHour}:${realMinutes} hours before the start`);
            } else if(realHour == 0 && realMinutes < 10){
                console.log(`${realMinutes} minutes before the start`); 
            } else if(realHour == 0 && realMinutes >=10){
                console.log(`${realMinutes} minutes before the start`);
            }
        } else if(status == 'On time'){
            console.log(`On time`);
            if(realHour == 0 && realMinutes < 10){
                console.log(`${realMinutes} minutes before the start`); 
            } else if(realHour == 0 && realMinutes >=10){
                console.log(`${realMinutes} minutes before the start`);
            }
        } else if(status == `Late`){
            console.log (`Late`);
            if (realHour !==0 && realMinutes<10){
                console.log(`${realHour}:0${realMinutes} hours after the start`);
            } else if(realHour !==0 && realMinutes>10){
                console.log(`${realHour}:${realMinutes} hours after the start`);
            } else if(realHour == 0 && realMinutes < 10){
                console.log(`${realMinutes} minutes after the start`); 
            } else if(realHour == 0 && realMinutes >=10){
                console.log(`${realMinutes} minutes after the start`);
            } 
        }
    
    }

