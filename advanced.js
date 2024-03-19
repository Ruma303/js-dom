/* const div = document.querySelector("#div");
const paragraph = document.querySelector("#paragraph");
const ul = document.querySelector("#ul");
const input = document.querySelector("#input");
const select = document.querySelector("#select");
const options = document.querySelectorAll("option"); */

//, textContent
/*
//paragraph.textContent = "Testo del paragrafo modificato in JavaScript";
console.log(paragraph.textContent); //Testo innerHTML dentro il tag p
console.log(paragraph.innerHTML); //Testo innerHTML <strong>dentro il tag p</strong>

paragraph.textContent = `Ciao <em style="color:blue"> a tutti </em>`;
paragraph.innerHTML = `Ciao <em style="color:blue"> a tutti </em>`;
*/


//, firstChild
/*
const first = paragraph.firstChild;
console.log(first);
*/

//, nodeValue
/*
const first = paragraph.firstChild;
console.log(first.nodeValue); //Testo innerHTML
*/

//, splitText()
/*
const firstNode = paragraph.firstChild;
const newText = paragraph.firstChild.splitText(3);
console.log(newText); //oggetto #text
console.log(firstNode.nodeValue); //Tes
console.log(newText.nodeValue); //to innerHTML
*/


//, createElement()

const h3 = document.createElement("h3");
const newParagraph = document.createElement("p");
const span = document.createElement("span");


//, append() vs appendChild()
//div.append(h3);
//div.append(h3, newParagraph, span);
/*
div.appendChild(h3);
div.appendChild(newParagraph);
div.appendChild(span);
*/

//, prepend()
/*
const h2 = document.createElement('h2');
h2.textContent = "Elemento aggiunto all'inizio";
div.prepend(h2);
*/

//, removeChild()
/*
const secondLi = ul.getElementsByTagName("li")[1];
const removedLi = ul.removeChild(secondLi);
console.log(removedLi); // <li>a</li>
*/
