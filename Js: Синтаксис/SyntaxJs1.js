n = prompt('Введите цифру от 0 до 9');

switch(n){
	case '0': alert('Вы ввели Ноль');
	break;
	case '1': alert('Вы ввели Один');
	break;
	case '2': alert('Вы ввели Два');
	break;
	case '3': alert('Вы ввели Три');
	break;
	case '4': alert('Вы ввели Четыре');
	break;
	case '5': alert('Вы ввели Пять');
	break;
	case '6': alert('Вы ввели Шесть');
	break;
	case '7': alert('Вы ввели Семь');
	break;
	case '8': alert('Вы ввели Восемь');
	break;
	case '9': alert('Вы ввели Девять');
	break;

	default: alert('Ошибка! Нужно было ввести число от 0 до 9');
	break;
}