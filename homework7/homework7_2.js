/*1. Найти в коде список ul и добавить класс “list”*/
let getUl = document.querySelector('ul');
getUl.setAttribute('class','list');
let nextLink;
/*2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link*/
for (i = 0; i < document.body.children.length; i++){
    if(getUl.nextElementSibling.tagName === 'A'){
        nextLink = getUl.nextElementSibling;
    } else {
        getUl = getUl.nextElementSibling;
    }
}

nextLink.setAttribute('id','link');

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






