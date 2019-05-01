/*5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)*/
let getUl = document.querySelector('ul');
let liUl = getUl.querySelectorAll('li');
liUl = Array.from(liUl);
liUl.reverse();
let fragment = document.createDocumentFragment();

for (i = 0; i < liUl.length; i++){
    let a = document.createElement("li");
    a = liUl[i];
    fragment.appendChild(a);
}

getUl.innerText = '';
getUl.appendChild(fragment)

//getUl.replaceChild(liUl,Array.from(getUl.querySelectorAll('li')))
