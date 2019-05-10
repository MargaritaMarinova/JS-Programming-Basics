function OddEvenPosition(inputParameters)
{
oddSum = 0
evenSum = 0
oddMin = Number.POSITIVE_INFINITY
oddMax = Number.NEGATIVE_INFINITY
evenMin = Number.POSITIVE_INFINITY
evenMax = Number.NEGATIVE_INFINITY
for (let i = 1; i < inputParameters.length; i++)
{
if (i % 2 == 0)
{
evenSum += Number(inputParameters[i])
        

let currentNumber = Number(inputParameters[i])
        

if (currentNumber < evenMin)
{
evenMin = currentNumber

}
if (currentNumber > evenMax)
{
evenMax = currentNumber            

}
}
else
{
oddSum += Number(inputParameters[i])
        

let currentNumber = Number(inputParameters[i])
if (currentNumber < oddMin){
oddMin = currentNumber
}
if (currentNumber > oddMax){
oddMax = currentNumber
}
}



}



console.log('OddSum=' + oddSum.toFixed(2)+',')
if (oddSum == 0){
console.log("OddMin=No,")
console.log("OddMax=No,")
} else {
if (oddMin == oddSum){
console.log('OddMin=' + oddMax.toFixed(2)+',')
} else {
console.log('OddMin=' + oddMin.toFixed(2)+',')
}
console.log('OddMax=' + oddMax.toFixed(2)+',')
}

console.log('EvenSum=' + evenSum.toFixed(2)+',')
if (evenSum == 0)
{
console.log('EvenMin=No,')
console.log('EvenMax=No')
} else {
if (evenMin == evenSum) {
console.log('EvenMin=' + evenMax.toFixed(2)+',')
} else {
console.log('EvenMin=' + evenMin.toFixed(2)+',')
}

console.log('EvenMax=' + evenMax.toFixed(2))
}
}