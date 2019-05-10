function gymnastics(input){
    let country = input.shift();
    let type = input.shift();
    let hard = 0;
    let intro = 0;
    let countryGrade = 0;
    let percentNeeded = 0;

    if(country === 'Russia'){
        switch(type){
            case 'ribbon':
                hard = 9.100;
                intro = 9.400;
                break;
            case 'hoop':
                hard = 9.300;
                intro = 9.800;
                break;
            case 'rope':
                hard = 9.600;
                intro = 9.000;
                break;
            default:'';
        }

    } else if(country === 'Bulgaria'){
        switch(type){
            case 'ribbon':
                hard = 9.600;
                intro = 9.400;
                break;
            case 'hoop':
                hard = 9.550;
                intro = 9.750;
                break;
            case 'rope':
                hard = 9.500;
                intro = 9.400;
                break;
            default:'';
        }

    } else if (country === 'Italy'){
        switch(type){
            case 'ribbon':
                hard = 9.200;
                intro = 9.500;
                break;
            case 'hoop':
                hard = 9.450;
                intro = 9.350;
                break;
            case 'rope':
                hard = 9.700;
                intro = 9.150;
                break;
            default:'';
        }

    }

    countryGrade = hard + intro;
    percentNeeded = ((20 - countryGrade)/20)*100;

    console.log(`The team of ${country} get ${countryGrade.toFixed(3)} on ${type}.`);
    console.log(`${percentNeeded.toFixed(2)}%`);


}

gymnastics(['Russia',
    'rope'    
    ]);