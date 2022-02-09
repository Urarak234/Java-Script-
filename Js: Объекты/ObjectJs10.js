let person1 = {
	name: 'Person',
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: '112',
		email: 'email@domain.com'
	},
	address: 'Moldova'
};

let person2 = {
	name: 'Person',
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: '112',
		email: 'email@domain.com'
	},
	address: 'Moldova'
};

let person_common = {

Intersection: function(obj1,obj2){
	console.log(obj1);
	for(let i in obj1){
		if((obj1[i] == obj2[i]) && (typeof(obj1[i]) != "object")){ 			//Если св. имеют одинаковое значение и 
			person_common[i] = obj1[i];										//не являются объектом - записываем их в person_common
		}else if(typeof(obj1[i]) == "object" && typeof(obj2[i]) == "object"){	//Если же и тот и тот - объекты делаем то же самое, 
			if (obj1[i] == obj2[i]) {
				person_common[i] = obj1[i];
				for(let j in obj1[i]){												//что и на предыдущем шаге.
					person_common[i][j] = obj1[i][j];
				}
			} 
			
		}
	}
}
}