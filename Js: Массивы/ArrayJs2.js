let database = [
	{
		name: "Leosa Masambicovich",
		marks: [2,4,6,8]
	},
	{
		name: "Jora Cucos",
		marks: [5,6,6,9,10]
	},
	{
		name: "Alexandr Cepuslescu",
		marks: [5,7,7,8,9,8]
	},
	{
		name: "Ion Gromootvod",
		marks: [3,9,4,9,5]
	},
	{
		name: "Dima Flutescu",
		marks: [6,7,2,2,5,10]
	},
	{
		name: "Maxim Mombaboa",
		marks: [1,1,2,5,2,5,7,10]
	}
]

media();
smallerthen5();
maxminmark();
sort();
MVS();

// ---------------------------Functions------------------------------

function media (){
	let avmark = 0;
	console.log('----------------------Average marks--------------------');
		for (let j = 0; j < database.length; j++){						//Проходит по эелементам основного массива
			for (let i = 0; i < database[j].marks.length; i++) {		//Проходит по элементам вложенного массива
			 avmark += database[j].marks[i];
			}
			avmark = avmark / database[j].marks.length;
			console.log(database[j].name + ' = ' + avmark.toFixed(2)); //Ограничивает вывод до 2 знаков
			avmark = 0;
		}
}

function smallerthen5 () {
	let avmark = 0;
	console.log('--------------------Average marks < 5-----------------');
		for (let j = 0; j < database.length; j++){				//Проходит по эелементам основного массива
			for (let i = 0; i < database[j].marks.length; i++) {		//Проходит по элементам вложенного массива
			 avmark += database[j].marks[i];
			}
			avmark = avmark / database[j].marks.length;
			if (avmark < 5) {
				console.log(database[j].name + ' = ' + avmark.toFixed(2));
			}
			avmark = 0;
		}
}

function maxminmark() {
	let avmark = 0;
	let themarks = [];   		//Массив для выгрузки данных по оценкам
	let min;
	let max = 0;
	let namemin;
	let namemax;
	console.log('------------The lowest and the highest mark-----------');
		for (let j = 0; j < database.length; j++){						//Проходит по эелементам основного массива
			for (let i = 0; i < database[j].marks.length; i++) {		//Проходит по элементам вложенного массива
			 avmark += database[j].marks[i];
			}
			avmark = avmark / database[j].marks.length;
			themarks[j] = avmark;
			avmark = 0;
		}
		min = themarks[0];
		for (let i = 0; i < themarks.length; i++) {
			if (themarks[i] < min) {
				min = themarks[i];
				namemin = database[i].name;
			} 
			if (themarks[i] > max) {
				max = themarks[i];
				namemax = database[i].name;
			}
		}
		console.log('The lowest mark have ' + namemin + ' with mark of: ' + min.toFixed(2));
		console.log('The highest mark have ' + namemax + ' with mark of: ' + max.toFixed(2));
}

function sort () {
	let avmark = 0;
	let clonedata = JSON.parse(JSON.stringify(database)); //Метод для создания глубокой копии массива
	for (let j = 0; j < clonedata.length; j++){						//Проходит по эелементам основного массива
			for (let i = 0; i < clonedata[j].marks.length; i++) {		//Проходит по элементам вложенного массива
			 avmark += clonedata[j].marks[i];
			}
			avmark = avmark / clonedata[j].marks.length;
			clonedata[j].marks = avmark;
			avmark = 0;
		}
	clonedata.sort(function(a,b){return b.marks - a.marks}); 		//Сортируем по критерию средних оценок
	console.log('----------------Sorted marks [+ to -]-----------------');
	for (let j = 0; j < clonedata.length; j++){				

		console.log(clonedata[j].name + ' = ' + clonedata[j].marks.toFixed(2));
	}
}

function MVS () { 				//MVS - Most Valued Student
		let avmark = 0;
		let counter = 0;
		let avmclass = 0;
		let clonedata = JSON.parse(JSON.stringify(database));
		console.log('------------------Average marks > ACM-----------------');
		for (let j = 0; j < clonedata.length; j++){				     	//Проходит по эелементам основного массива
			for (let i = 0; i < clonedata[j].marks.length; i++) {		//Проходит по элементам вложенного массива
				avmark += clonedata[j].marks[i];
			}
			avmark = avmark / clonedata[j].marks.length;
			clonedata[j].marks = avmark;
			avmclass += avmark;
			avmark = 0;
		}
		avmclass = avmclass / clonedata.length;
		for (let j = 0; j < clonedata.length; j++){				     	//Сравнивает элементы между собой и выводит нужные
			if (clonedata[j].marks > avmclass) {
				console.log(clonedata[j].name + ' = ' + clonedata[j].marks.toFixed(2));
			}
		}
}

