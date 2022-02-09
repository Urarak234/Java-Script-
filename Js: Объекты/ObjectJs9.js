const weekDays = {
	"Luni": "Mo",
	"Marti": "Tu",
	"Miercuri": "We",
	"Joi": "Th",
	"Vineri": "Fr",
	"Simbata": "Sa",
	"Duminica": "Su"
}
weekSwapName(weekDays);
console.log(weekDays);
function weekSwapName (obj){
	let name;
	let abr;
	for (let i in obj){			//Вытаскиваем имя св. и его значение. Удаляем св. и меняем местами имя и значение.
		name = i;
		abr = obj[i];
		delete obj[i];
		i = abr;
		obj[i] = name;
	}	
} 