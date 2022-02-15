let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);
array.splice(array.indexOf(5), 1, Number(0), Number(0), Number(0));  //Указываем элемент и заменяем его на что-то
console.log(array);
