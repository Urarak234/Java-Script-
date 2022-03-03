let guys = [{
    "HumanData": {
      "FIO": "Porcescu Dmitri Ion",
      "BirthData": "23.04.2000",
      "Gender": "Male",
      "IDNP": 2345642345654,
      "BirthPlace": "Moldova"
    },
    "WorkerData": {
      "Mob": 067454051,
      "Mob_home": 026223457,
      "Addres": "Indelegentii 43",
      "@mail": "zapasnoi.nemail@mail.ru",
      "Post": "Junior Game-Developer",
      "StartWorkTime": "11.11.2022",
      "Salary": 10,
      "WorkerRating": 5,
      "WorkPlace": "Special Developer Squad",
      "WorkGraph": "8:00 - 17:00/dinner 12:00-13:00"
    }
  },
  {
    "HumanData": {
      "FIO": "Kurosaki Ichigo",
      "BirthData": "23.04.2000",
      "Gender": "Male",
      "IDNP": 2345642345654,
      "BirthPlace": "Moldova"
    },
    "WorkerData": {
      "Mob": 067454051,
      "Mob_home": 026223457,
      "Addres": "Indelegentii 43",
      "@mail": "zapasnoi.nemail@mail.ru",
      "Post": "Junior Game-Developer",
      "StartWorkTime": "11.11.2022",
      "Salary": 20,
      "WorkerRating": 5,
      "WorkPlace": "Special Developer Squad",
      "WorkGraph": "8:00 - 17:00/dinner 12:00-13:00"
    }
  },
  {
    "HumanData": {
      "FIO": "Shoia Isido",
      "BirthData": "23.04.2000",
      "Gender": "Male",
      "IDNP": 2345642345654,
      "BirthPlace": "Moldova"
    },
    "WorkerData": {
      "Mob": "067454051",
      "Mob_home": 026223457,
      "Addres": "Indelegentii 43",
      "@mail": "zapasnoi.nemail@mail.ru",
      "Post": "Junior Game-Developer",
      "StartWorkTime": "11.11.2022",
      "Salary": 30,
      "WorkerRating": 5,
      "WorkPlace": "Special Developer Squad",
      "WorkGraph": "8:00 - 17:00/dinner 12:00-13:00"
    }
  }]

  employers = document.querySelector(".employers").innerHTML = guys[0].HumanData.FIO + "<br>" + guys[1].HumanData.FIO + "<br>" + guys[2].HumanData.FIO;
  salaries = document.querySelector(".salaries");
  avgSalar = document.querySelector(".avgSalar");
  minSalar = document.querySelector(".minSalar");
  maxSalar = document.querySelector(".maxSalar");
  sumSalar = document.querySelector(".sumSalar");

  avgValue = 0;
  contor = 0;
  minValue = guys[0].WorkerData.Salary ;
  maxValue = 0;
  sum = 0;

  for(let key in guys){
    salaries.innerHTML += guys[key].HumanData.FIO + " : " + guys[key].WorkerData.Salary + "<br>" 
    avgValue += guys[key].WorkerData.Salary;
    sum += guys[key].WorkerData.Salary; 
    contor++;
    if(guys[key].WorkerData.Salary <= minValue ){ //MinMax
        minSalar.innerHTML = guys[key].WorkerData.Salary;
        minValue = guys[key].WorkerData.Salary;
    }
    else if(guys[key].WorkerData.Salary >= maxValue){
        maxSalar.innerHTML = guys[key].WorkerData.Salary;
        maxValue = guys[key].WorkerData.Salary;
    }
  }

  avgSalar.innerHTML += `Average Salary = <h3 style="display: inline;"> ${avgValue/contor} </h3>`;
  sumSalar.innerHTML = sum;