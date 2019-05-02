/*1. Найти в коде список ul и добавить класс “list”*/
let getUl = document.querySelector('ul');
getUl.classList.toggle('list');
let nextLink;
/*2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link*/
let getA = document.querySelector('ul ~ a');

getA.setAttribute("id","link")

/*3. На li через один (начиная с самого первого) установить класс “item”*/
let getAllLis = document.querySelectorAll('li');
getAllLis = Array.from(getAllLis);

for (i = 0; i < getAllLis.length; i++){
    if (i%2){
        getAllLis[i].setAttribute('class','item')
    }
}

/*4. На все ссылки в примере установить класс “custom-link”*/
let getAllLinks = document.querySelectorAll('a');

getAllLinks.forEach(function (elem) {
    elem.classList.toggle('custom-link')
});






