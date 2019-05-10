function nameWars(input){
let name = input.shift();
let maxSum = 0;
let winner = '';

while (name != 'STOP') {
let sum = 0;
for (i = 0; i< name.length; i++){
    sum += name.charCodeAt(i);
}
if (sum > maxSum) {
 maxSum = sum;
 winner = name;
}
name = input.shift();
}
console.log (`Winner is ${winner} - ${maxSum.toFixed(0)}!`);
}

nameWars(['Petar',
'Georgi',
 'Stanimir',
 'STOP'
]);