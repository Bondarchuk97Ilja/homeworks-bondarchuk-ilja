/*1. Найти параграф и получить его текстовое содержимое (только текст!)*/
let getParag = document.querySelector('p');
console.log(getParag.textContent);

/*2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).*/
function getInfo(element) {
    let childrenLenght = element.children.length;
    let nodeTyped = element.nodeType;
    let nodeNamed = element.nodeName;
    return {
        childrenLenght,
        nodeTyped,
        nodeNamed
    }
}

console.log(getInfo(document.body.children[0]));
console.log(getInfo(document.body.children[1]));

/*3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]*/

let getUl = document.querySelector('ul');
getUl = getUl.children;
let getTextFromUl = [];
for (i = 0; i < getUl.length; i++){
    getTextFromUl.push(getUl[i].textContent);
}
console.log(getTextFromUl);

/*4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-*/
let arrNodes = getParag.childNodes;
//arrNodes = Array.from(arrNodes);

for (i = 0; i < arrNodes.length; i++) {
    if (arrNodes[i].nodeType === 3) {
        arrNodes[i].textContent = '-text-'
    }
}


