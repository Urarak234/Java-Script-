let arraymain = [1,2,4,5,"GodOfWar",12,17,19,225,"f","Govard"];
console.log("Main array: ", arraymain);
convert(what_A_Number, arraymain);

function convert (func, array) {
	let newarray = array.slice();
	let check;						
	for (var i = 0; i < newarray.length; i++) {			//Перебирает массив и применяет соответсвующую функцию к каждому элементу
		check = func(newarray[i]);
		newarray[i] = check;
	}
	console.log("Converted Array: ", newarray);
}

function what_A_Number(n){
	let result = (typeof(n) != "number") ? n = "Wrong Number!" : 						//Проверяет, если число, и какое оно - чётное или нет
	(n % 2 == 0) ? n = n + " - Чётное Число." : n = n + " - Нечётное Число.";
	return n;
}