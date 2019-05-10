console.log ('HOOOOPPPPP!!!!!');

function salary (input){
    let n = Number(input.shift());
    let money = Number(input.shift());
    let tax = 0;

    for (i = 1; i <= n; i++){
        let site = input.shift();
        if (site == 'Facebook') {
            tax = 150;
            money -= tax;
        } else if(site == 'Instagram') {
            tax =100;
            money -= tax;
        } else if (site == 'Reddit') {
            tax = 50;
            money -= tax;
        }
  
        if (money <=0) {
            console.log ('You have lost your salary.');
            break;
        }
    }
    if (money > 0) {
        console.log (`${money.toFixed(0)}`);
    }
}

salary ([10,750,'Facebook','Dev.bg','Instagram','Facebook','Reddit','Facebook','Facebook']);