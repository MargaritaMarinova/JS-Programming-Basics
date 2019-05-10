function halfSumElement(input){
	let n = Number(input.shift());
	let sum = 0;
	let max = 0;
	
	for(let i = 0; i < n; i++){
		let numb = Number(input.shift());
		sum += numb;
		if (max < numb) {
			max = numb;
		}
	}
	sum -= max;
	let dif = Math.abs(sum-max);
	
	if(dif == 0) {
        console.log ('Yes');
        console.log ('Sum = '+max);
	} else {
        console.log('No');
        console.log('Diff = '+dif);
	}
	
}

halfSumElement(5);