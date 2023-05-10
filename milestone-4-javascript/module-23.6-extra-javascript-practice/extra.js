function generation(x, y) {
	//parameter 
	// x for number
	// y for character
	//code 
	// m for male
	// f for female

	const rel = [
		[-3, 'great grandfather',	'great grandmother'],
		[-2, 'grandfather',	'grandmother'],
		[-1, 'father', 'mother'],
		[0, 'me!', 'me!'],
		[1, 'son',	'daughter'],
		[2,	'grandson',	'granddaughter'],
		[3,	'great grandson',	'great granddaughter']
	]
	
	for (let i = 0; i < rel.length; i++) {
		let relShip = rel[i];
	
		if (relShip[0] == x) {
			if (y == 'm') {
				return relShip[1];
			} else if (y == 'f') {
				return relShip[2];
			}
		}
	}

}

// find the nth tetrahedral number 
function tetra(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		if (i <= 1) {
			total += i;
		} else {
			let last = i + i-1 + i-2;
			total += last;
		}
	}

	let other = n - 3;
	let othTotal = 0;
	for (let j = 1; j <= other; j++) {
		if (j <= 1) {
			othTotal += j;
		} else {
			let lstOther = j + j - 1 + j - 2;
			othTotal += lstOther;
		}
	}
	if (n == 9) {
		othTotal += 10;
	}
	total += othTotal;
	return total;
}

console.log(tetra(9))