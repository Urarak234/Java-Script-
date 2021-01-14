alert('Следующие действия АПАСНЫ! Все трюки выполненны не проффессионалами!');

username = prompt('Введите ваш логин');
password = prompt('Введите ваш пароль');

let checkProfile = (username == 'Urarak' & password == 'qwerty') ? alert('Привет') : 
(username != 'Urarak' & password == 'qwerty') ? alert('Неправильный username') : 
	alert('Неправильный password');
