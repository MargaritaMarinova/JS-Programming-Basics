function cinema(input){
    let movie = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());
    let totalPlaces = rows * columns;
    let price = 0;
    if (movie == `Premiere`){
        price = 12;
    } else if (movie == `Normal`){
        price = 7.50;
    } else if (movie == `Discount`) {
        price = 5;
    }
    let fullCinema = totalPlaces * price;
    console.log (fullCinema.toFixed(2));
}

cinema('Normal');