document.body.style.backgroundColor = "red"; // Nr1

setTimeout(() => document.body.style.background = "green", 3000); //Nr2

const orange_btn = document.querySelector(".btn");//Nr3


orange_btn.addEventListener("click", () => { 
	document.body.style.backgroundColor = "orange";
})

let counter = 0;//Nr4
const ol_list = document.querySelector(".list"); 

listCreation = setInterval(() => {
	
	let li = document.createElement("li");
  	li.textContent = `Элемент ${counter+1}`;
  	ol_list.append(li);
  	
  	if (counter % 2 == 0) {
  		li.style.backgroundColor = "green";
  	}else{
  		li.style.backgroundColor = "violet";
  	}

  	if (counter == 19) {

		clearInterval(listCreation);
	
	}
	counter++;
}, 100);

