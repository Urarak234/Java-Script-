let dividers = (num) => {
	let dividers = '';
	for (var i = 0; i <= num; ++i) {
		if (num % i == 0) {
			dividers = dividers +i + ' ';
		
		}
	}
	alert(dividers);
}

dividers(prompt('Введите число'));