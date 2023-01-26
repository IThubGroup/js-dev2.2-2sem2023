// console.log(document.childNodes);
let html = document.childNodes[1];
// console.log(html.childNodes);
let headChildren = html.childNodes[0].childNodes;
// console.log(headChildren);

// document.childNodes[1].childNodes[0].childNodes

/* *
* nodeType - порядковый номер типа узла
*   1 - узел элемента (html-тег)
*   3 - текстовый узел
*   8 - узел комментария
*   9 - сам document
*   10 - doctype
*
* https://developer.mozilla.org/ru/docs/Web/API/Node/nodeType
* nodeName - имя узла (название тегов пишется капслоком)
* nodeValue - значение (не для всех узлов работает)
*
* */

// let style = [...headChildren].filter(el => el.nodeName === "STYLE")[0];
let style = Array.from(headChildren).filter(el => el.nodeName === "STYLE")[0];
// console.log(style.childNodes[0].nodeValue);


// console.log(document.body);

/* *
* node.firstChild (первый ребёнок)
* node.lastChild (последний ребёнок)
* node.nextSibling (младше чем)
* node.previousSibling (старше чем)
* node.parentNode (родительский узел)
* */

let h1 = document.body.firstChild.nextSibling.nextSibling.nextSibling;
// console.log(h1);

// console.log(h1.firstChild.nodeValue);
// h1.firstChild.nodeValue = "Ololo"

h1.firstChild.textContent = "Hey! This is my Text!";

h1.textContent = "Ha-ha! This is changed Text!"

// document.body.textContent = "O_o"

/* *
* node.firstElementChild
* node.lastElementChild
* node.nextElementSibling
* node.previousElementSibling
* node.parentElement
* */

h1 = document.body.firstElementChild
console.log(h1);

// TODO: Поменять текст внутри тега span;

let span = h1.nextElementSibling.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild;
console.log(span);

span.textContent = "Aaaaaahhhhhh!!!!!!! Grgrgrgrgrgr";