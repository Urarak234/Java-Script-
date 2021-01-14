let extractCurrencyValue = (str) => str = +str.slice(1);

alert(extractCurrencyValue('$120') === 120);
