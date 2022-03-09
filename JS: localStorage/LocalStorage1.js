const textArea = document.getElementById("textArea"); 
textArea.value = localStorage.getItem('textArea'); 

textArea.oninput = () => { 
 localStorage.setItem('textArea', textArea.value) 
}