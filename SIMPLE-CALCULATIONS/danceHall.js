function danceHall(input){
let hallLenght=Number(input.shift());
let hallWidth=Number(input.shift());
let wardrobeSide=Number(input.shift());
let hallArea=(hallLenght*100)*(hallWidth*100);
let wardrobeArea=(wardrobeSide*100)*(wardrobeSide*100)
let benchArea=hallArea/10;
let freeSpace=hallArea-wardrobeArea-benchArea;
let dancerCount=Math.floor(freeSpace/(40+7000));
console.log(dancerCount.toFixed(0));
}