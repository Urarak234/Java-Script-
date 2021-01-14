a = prompt('Введите первое число интервала');
b = prompt('Введите второе число интервала');
let sum = 0;

for (let i = a; i <=b; ++i) {
	if(i % 2 == 0){
		sum =  +i + sum;
	}		
}
console.log('Сумма будет равна = '+ sum);