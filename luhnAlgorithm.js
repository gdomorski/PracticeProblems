function luhnAlgorithm(value) {

	var total = 0,
	    currentNum = 0,
	    isEven = false;

	for (var i = value.length - 1; i >= 0; i--) {
		var cDigit = value[i]
		currentNum = parseInt(cDigit, 10);

		if (isEven) {
			if ((currentNum *= 2) > 9) currentNum -= 9;
		}

		total += currentNum;
		isEven = !isEven;
	}
	return (total % 10) == 0;
}

luhnAlgorithm("378282246310005");