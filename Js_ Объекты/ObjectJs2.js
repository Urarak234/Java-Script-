let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let i in salaries) { //Перебираем все свойства в объекте
	sum += salaries[i];
}
console.log(sum);