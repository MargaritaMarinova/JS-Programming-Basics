function oldBooks(input) {
	let searchedBook = input.shift();
	let numberOfBooks = Number(input.shift());
	let counter = 0;
	let bookIsfound = false;
	
	let nextBookName = input.shift();
	while (counter < numberOfBooks) {
		if (nextBookName == searchedBook) {
			bookIsfound = true;
			break;
		} counter++;
		nextBookName = input.shift();
	}
	if (bookIsfound == false) {
		console.log(`The book you search is not here!`);
		console.log(`You checked ${numberOfBooks} books.`);
	} else {
		console.log(`You checked ${counter} books and found it.`);
	}
}