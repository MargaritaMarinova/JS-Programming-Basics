function tradeCommisions(input){
    let city = (input.shift()).toLowerCase();
    let sales = Number(input.shift());
    let commision = -1;
    if (city == `sofia`){
        if (sales>=0 && sales <=500){
            commision = sales * 0.05;
        } else if (sales>500 && sales <=1000) {
            commision = sales * 0.07;
        } else if (sales>1000 && sales <=10000) {
            commision = sales * 0.08;
        } else if (sales>10000) {
            commision = sales * 0.12;
        } 
    } if (city == `varna`){
        if (sales>=0 && sales <=500){
            commision = sales * 0.045;
        } else if (sales>500 && sales <=1000) {
            commision = sales * 0.075;
        } else if (sales>1000 && sales <=10000) {
            commision = sales * 0.10;
        } else if (sales>10000) {
            commision = sales * 0.13;
        } 
    } if (city == `plovdiv`){
        if (sales>=0 && sales <=500){
            commision = sales * 0.055;
        } else if (sales>500 && sales <=1000) {
            commision = sales * 0.08;
        } else if (sales>1000 && sales <=10000) {
            commision = sales * 0.12;
        } else if (sales>10000) {
            commision = sales * 0.145;
        } 
    } if (commision > -1){
        console.log(commision.toFixed(2));
        } else {
        console.log(`error`);
    }
}