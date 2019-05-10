function bus(input) {
    let currentTravellers = Number(input.shift());
    let stops = Number(input.shift());
    let peopleIn = 0;
    let peopleOut = 0;
  

    for (let i = 1; i <= stops; i++){
        peopleOut = Number(input.shift());
        peopleIn = Number(input.shift());
        if (i % 2 !== 0){
            peopleIn +=2;
        } else {
            peopleOut +=2;
        }
       currentTravellers = currentTravellers + peopleIn - peopleOut;
               
    }

      console.log(`The final number of passengers is : ${currentTravellers}`);
}

//bus ([20,
//    2,
 //   10,
 //   5,
 //   5,
  //  3
 //   ]);

 bus ([17,
    3,
    6,
    7,
    8,
    9,
    3,4]);