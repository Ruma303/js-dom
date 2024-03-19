//, Scrivere direttamente nel DOM
/* document.write("Ciao da ");
document.writeln("JavaScript");
console.log(window)
console.log(document) */


//, Oggetto Window
/* console.log(window.innerWidth);
// Larghezza della finestra in pixel
console.log(window.innerHeight);
// Altezza della finestra in pixel */

/* alert("Messaggio di avviso");
const result = confirm("Vuoi continuare?");
const name = prompt("Come ti chiami?");
console.log(`Il tuo nome è: ${name}`); */


//! Elementi del DOM selezionati

//* querySelector
/* const tag = document.querySelector("h1");
const p = document.querySelector("p");
const classe = document.querySelector(".color");
const id = document.querySelector("#text"); */

//console.log(tag)

//, Selezionare gli elementi DOM con getElementBy...()
/* const tag = document.getElementsByTagName("h1");
const classe = document.getElementsByClassName("color");
const id = document.getElementById("text"); */


//, innerHTML
/* const tag = document.querySelector("h1");
tag.innerHTML = "Titolo h1 modificato"; */

/* const singoloLi = document.querySelector("li");
singoloLi.innerHTML = "Testo modificato nel primo Li"; */

//, Selezionare tutti gli elementi DOM con querySelectAll()
/*  const tuttiGliLi = document.querySelectorAll("li");
for(let i = 0; i < tuttiGliLi.length; i++) {
tuttiGliLi[i].innerHTML = "Testo modificato in tutti gli Li";
} */


//, classList
//classe.classList.add("class2");
//classe.classList.remove("color");
//class.classList.toggle("color");

/* if (classe.classList.contains("color")) {
console.log("l'elemento ha la classe 'color'")
} */

//console.log(classe.classList.length)


//, className
/* console.log(classe.className)
classe.className += " class2";
//classe.className = classe.className.replace(" class2", " replacedClass");
console.log(classe.className) */


//, style
// let par = document.querySelector("#par");

//? Modificare il colore di sfondo di un elemento:
//par.style.background-color = "red";
//par.style.backgroundColor = "red";

//? Impostare la larghezza e l'altezza di un paro:
/*
par.style.width = "500px";
par.style.height = "50px";
par.style.color = "blue"; */

//? Nascondere un elemento impostando la sua proprietà display a "none":

//par.style.display = "none";



//, value
/*  let input = document.querySelector("#input");

//? Ottenere il valore di un campo di input:

let inputValue = input.value;
console.log(inputValue)

//? Modificare il valore di un campo di input:

input.value = "Valore inserito da JavaScript";

//? Ottenere il testo inserito in un campo di testo multilinea (textarea):
let textarea = document.querySelector("#textarea");
var textareaValue = textarea.value;
console.log(textareaValue) */

/* const select = document.querySelector("#select");
const options = document.querySelectorAll("option");

console.log(select.value); // value dell'option selezionato
console.log(options.value); // undefined */


/* const checkbox = document.querySelector('input[type="checkbox"]');
if (checkbox.checked) {
    console.log("La checkbox è selezionata");
} */