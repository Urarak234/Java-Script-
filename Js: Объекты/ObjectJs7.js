let person = {
	name: 'Person',
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: '112',
		email: 'email@domain.com'
	},
	address: 'Moldova',

	get namenew(){
		this.name = prompt("Введите новое имя");
		return this.name;
	},
	get agenew(){
		nage = prompt("Введите возраст");
		return this.age = Number(nage);
	},
	get salarynew(){
		nsalary = prompt("Введите возраст");
		return this.salary = Number(nsalary);
	},
	get contactsnew(){
		nphonecon = prompt("Введите новый номер телефона");
		nemail = prompt("Введите новый фдрес электронной почты");
		this.contacts.phone = Number(nphonecon);
		this.contacts.email = nemail;
	},
	get addressnew(){
		naddress = prompt("Введите новый адрес");
		return this.address = naddress;
	}
};
console.log(person);