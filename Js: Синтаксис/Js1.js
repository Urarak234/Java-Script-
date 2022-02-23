// ----------------------------------------------------1 Exercise--------------------------------------
alert('Hi. the first code! And it is mine! \n new text from new line!');

// ----------------------------------------------------2 Exercise--------------------------------------

// let name,
// admin;
// let earth_planet,
// user;

// name = 'Джон';
// admin = name;
// alert(admin);

// ----------------------------------------------------3 Exercise--------------------------------------

// let count = prompt('В магазине всего 50 пуль. Пуль было потрачено: ');


// alert(`Всего осталось ${50-count} пуль в магазине!`);

// let n2 = 123, m1=3;
// n2 = String(n2);
// m1 = String(m1);

// alert(n2+m1);
// ----------------------------------------------------4 Exercise--------------------------------------
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12
// ----------------------------------------------------5 Exercise--------------------------------------

// let enemies = prompt('Сколько врагов вы сегодня убили?');
// if (enemies >= 10 & enemies <= 15 & enemies != 13) {
// 	alert('Молодцы, это хороший результат!');
// } else if (enemies == 13) {
// 	alert('Вы убили ровно половину врагов');
// } else if (enemies > 15) {
// 	alert('ДА вы просто непобедимы!');
// }else{
// 	alert('Хмм, маловато, но сойдёт :3');
// }
// ----------------------------------------------------6 Exercise--------------------------------------

// let question1 = prompt('Какое официальное название JavaScript?');
// if (question1 == 'ECMAScript'){
// 	alert('Верно!');
// }else {
// 	alert('Не знаете? ECMAScript!');
// }

// let f1 = prompt('Введите число');
// if (f1 > 0){
// 	alert(1);
// }else if (f1 == 0){
// 	alert(0);
// }else{
// 	alert(-1);
// }

// let login = prompt('Introduce login');
// let b1 = prompt('Introduce B');

// message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : 'Нет Логина';
// alert(message);
// ----------------------------------------------------7 Exercise--------------------------------------

// login2 = prompt('Introduce login from 2 Exercise');


// if (login2 == 'Админ') {
// password = prompt('Introduce Password');
// 	if (password == 'Я главный') {
// 		alert('Здравствуйте!');
// 	}else if (password == '' || password == null) {
// 		alert('Отменено.');
// 	}else{
// 		alert('Неверный пароль!');
// 	}
// } else if (login2 == '' || login2 == null) {
// 	alert('Отменено.');
// }else {
// 	alert('Я вас не знаю');
// }

// ----------------------------------------------------8 Exercise--------------------------------------
// alert( `For Cicle` );

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// alert( `While Cicle` );
// let i = 0;

// while(i<3){
// 	alert( `number ${i}!` );
// 	++i;
// }
// number = prompt('Introduce number >100 pls');

// while(number<=100){
	
// 	if (number>100 || number == '' || number == null) {break;}
// 	if (number<=100 || number != '' || number != null) { alert('Wrong Number! Pls introduce new one.'); }
// 	number = prompt('Introduce number >100 pls');
// }

// if(number == '' || number == null){
// 	alert('Break instruction was activated');
// }else{
// 	alert(`Introduced number is ${number}`);
// }

// let n;
// do{
// 	n = prompt("Introduce number >100", 0);
// }while(n <=100 && n);

int = prompt('Introduse last number of interval');

// for (let i = int; i>=2;--int) {
// 	// alert(`Simple Namber ${int}`);
// 	if (int <2 ) break;
// 	if(int % 2 != 0 && int % 3 != 0){
// 		alert(`Simple Namber ${int}`);
// 	}
	
// }

mark: for (let i = int; i>=2; --i) {
	for (let j = i; j>2; --i) {
		if(i==0) break;
		alert(`Simple Namber ${j}`);
	}
	alert(`Final Namber ${i}`);
}


// ----------------------------------------------------9 Exercise--------------------------------------

// browser = prompt('Browser?');

// if(browser == 'Edge'){
// 	alert( "You've got the Edge!" );
// }else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
// 	alert( 'Okay we support these browsers too' );
// }else{
// 	alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');

// switch(number){
// 	case 0: alert('Вы ввели число 0');
// 		break;
// 	case 1: alert('Вы ввели число 1');
// 		break;
// 	case 2: 
// 	case 3:
// 	alert('Вы ввели число 2, а может и 3');
// 		break;
// } 

// ----------------------------------------------------10 Exercise--------------------------------------
// age = prompt('Introduce age');

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }


// checkAge(age);

// let checkAge = (age > 18) ? true: confirm('Родители разрешили?');
// let checkAge2 = (age>18 || confirm('Родители разрешили?'));

// ----------------------------------------------------11 Exercise--------------------------------------

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

let ask =  (question, yes, no) => {
	let answer = (confirm(question)) ? yes() : no();
	return answer;
}


ask('Вы согласны с утверждением?', 
	() => alert("Вы согласились."),
	() => alert("Вы отменили выполнение."));
	

// ask = ('Вы согласны с утверждением?', ?
  
//   () => alert("Вы согласились."):
//   () => alert("Вы отменили выполнение.");
// );


