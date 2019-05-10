function cookieFactory(input) {
    let batchesCount = Number(input.shift());
  

    for (let i = 1; i <= batchesCount; i++) {
    let containsEggs = false;
    let containsFlour = false;
    let containsSugar = false;
    let bakingBatch = false;
    let ingredient = '';

        while (!containsEggs || !containsFlour || !containsSugar || !bakingBatch) {
            ingredient = input.shift();
            if (ingredient == 'eggs') {
            containsEggs = true;
            } else if (ingredient == 'flour'){
            containsFlour = true;
            } else if(ingredient == 'sugar') {
            containsSugar = true;
            } else if(ingredient == 'Bake!') {
                if(containsEggs && containsFlour && containsSugar) {
                    bakingBatch = true;
                    console.log(`Baking batch number ${i}...`);
                    break;
                } else {
                    console.log ('The batter should contain flour, eggs and sugar!');
                    }
            } 
            ingredient = input.shift();
        } 
    }
}


cookieFactory([2,'flour','eggs','sugar','chocolate','Bake!','flour','eggs','sugar','caramel','peanuts','Bake!']);