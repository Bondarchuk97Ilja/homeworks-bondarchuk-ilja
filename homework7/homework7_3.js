/*1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:*/
let getUl = document.querySelector('ul');
let liUl = getUl.querySelectorAll('li');

let num = 4;
let fragment = document.createDocumentFragment();
for (i = liUl.length; i - liUl.length  < num ; i++){
    let element = document.createElement('li');
    element.setAttribute('class','new-item');
    element.textContent = `item ${i}`;
    fragment.appendChild(element);
}
getUl.appendChild(fragment);

/*2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). */
let aLiUl = getUl.querySelectorAll('a');
aLiUl = Array.from(aLiUl);

aLiUl.forEach(function (elem) {
    let strong = document.createElement('strong')
    elem.insertAdjacentElement("afterbegin",strong)
});

/*3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.*/
let newImg = document.createElement("img");
newImg.setAttribute('src','img.jpg' );
newImg.setAttribute('alt','none');
document.body.insertAdjacentElement("afterbegin",newImg);

/*4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green*/
let getMark = document.querySelector('mark');
let newTxt = document.createElement("text");
newTxt.textContent = ' green';
getMark.insertAdjacentElement("beforeend", newTxt);
getMark.classList.toggle("green");


