
/*Зная структуру html, с помощью изученных
методов получить (в консоль):
1. head*/
let getHead = document.head;
console.log(getHead);
/*2. body*/
let getBody = document.body;
console.log(getBody);
/*3. все дочерние элементы body и вывести их в
консоль.*/
let childrenBody = getBody.children;
console.log(childrenBody);
/*4. первый div и все его дочерние узлы
а) вывести все дочерние узлы в консоль
*/
let getFirstDiv = document.querySelector('div');
let childrenFirstDiv = getFirstDiv.children;
console.log(childrenFirstDiv);
/*б) вывести в консоль все дочерние узлы,
кроме первого и последнего
*/
childrenFirstDiv = Array.from(childrenFirstDiv);
childrenFirstDiv.shift();
childrenFirstDiv.pop();
console.log(childrenFirstDiv);

