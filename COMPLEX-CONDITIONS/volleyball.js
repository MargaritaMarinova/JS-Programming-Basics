function volleyball(input){
    let year = input.shift();//leap
    let holidays = Number(input.shift()); //5
    let weekendsHome = Number(input.shift()); //2
    let weekendsInSofia = 48 - weekendsHome; //46
    let weekendsinSofiaToPlay = weekendsInSofia * 0.75; //34.5
    let holidaysToPLay = holidays /3 *2; //3.33
    let timeToPlay = weekendsinSofiaToPlay + weekendsHome + holidaysToPLay; //34.5+2+3.33 = 39.83
    let leapBonus = timeToPlay * 0.15; //5.97

    if(year == 'leap') {
        console.log(Math.floor(timeToPlay + leapBonus)); //45
    } else {
        console.log(Math.floor(timeToPlay));//39
    }

}