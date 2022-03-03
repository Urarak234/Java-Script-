//https://jsoneditoronline.org/#left=cloud.bd9a391560c2474eb4fce6403f64ddcb


myJson = (async () => {
    theTable = document.querySelector(".humanTable");
    let human = await fetch("https://raw.githubusercontent.com/Urarak234/Java-Script-/main/Js%3A%20JSON/JSONexperement.json"); // СсСсСылкааааааааааааааа! @#*!
    let humanInfo = await human.json(); //асинхронное чтение в формате джисон
    console.log(humanInfo);
    for(let key_y in humanInfo){
        for(let key_x in humanInfo[key_y]){
            row = theTable.insertRow(key_y);
            valuePar = row.insertCell(key_x).innerHTML = `${humanInfo[key_y][key_x]}`; //Вытягиваем значение
            namePar = row.insertCell(key_x).innerHTML = `${key_x}`; //Вытягиваем наименование значения
        }
    }
})()

