age = prompt('Введите возраст');

// if (age<=14 & age>=90) {
// 	alert('Ты либо мелкий поц, либо старый поц!');
// }else{
// 	alert('Возраст приемлим! (Не находится в диапазоне)');
// }

// ---------------------------------Второе условие с исползьзованием ! (Выделите код, а затем Ctrl+/ для включения) -----------------------

if(age = !!(age<=90 & age>=14)){
	alert('Мммм, а твои булочки находятся в АПАСНОМ диапазоне!');
}else{
	alert('Возраст приемлим! (Не находится в диапазоне)');
}