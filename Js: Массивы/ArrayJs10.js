let array = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];

console.log(uniqueSorted(array));

function uniqueSorted (arr){
	let unicarray = arr.filter(function(item, index){ return arr.indexOf(item) === index}); // Находим и осталвяем торлько по 1 уникальному элементу в массив
	unicarray.sort((a,b) => a - b); //Сортируем по возрастанию
	return unicarray;
}