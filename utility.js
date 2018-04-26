function getRandomNumber(min,max) {
	numberOfOptions = max - min + 1;
	return randomNumber = parseInt(Math.random() * numberOfOptions) + min;
}

function getOrdinalSuffix(input) {
	temp = input % 100;
	if ((temp == 11) || (temp == 12) || (temp == 13)) {
		return "th";
	} else {
		if (input > 9) {
			temp = input % 10;
			return addSuffix(temp);
		} else {
			return addSuffix(temp);
		}
	}
}

function addSuffix(input) {
	if (input == 1) {
		return "st";
	} else if (input == 2) {
		return "nd";		
	} else if (input == 3) {
		return "rd";		
	} else {
		return "th";
	}
}