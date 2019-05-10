function christmasGifts(input) {
    let adults = 0;
    let kids = 0;
    let toys = 0;
    let sweaters = 0;

    let year = input.shift();

    while (year !== 'Christmas') {
        year = Number(year);
        if (year <= 16) {
            kids++;
            toys++;
        } else {
            adults++;
            sweaters++;
        }

        year = input.shift();
    }
    let toysPrice = toys * 5;
    let sweatersPrice = sweaters * 15;
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toysPrice}`);
    console.log(`Money for sweaters: ${sweatersPrice}`);
}

christmasGifts ([16,
    20,
    46,
    12,
    8,
    20,
    49,
    'Christmas'
    ]);