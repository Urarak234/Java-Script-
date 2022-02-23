const ucFirst = function (str){

alert(`Начальное слово:  ${str} 
Слово с изменнёной первой буквой: ${str[0].toUpperCase() + str.slice(1)}`);
}

ucFirst(prompt('Введите слово, начинающееся с маленькой буквы '));
