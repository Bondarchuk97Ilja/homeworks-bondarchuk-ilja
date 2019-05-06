/*1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.*/
const divAddeventListener = document.getElementById('btn-msg');
const attrData = divAddeventListener.getAttribute('data-text');
divAddeventListener.addEventListener('click', () => alert(attrData));


/*2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.*/

divAddeventListener.addEventListener('mouseover', () => divAddeventListener.setAttribute('class','go_green'));
divAddeventListener.addEventListener('mouseout', () => divAddeventListener.removeAttribute('class','go_green'));

/*3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.*/

document.addEventListener('click',event => document.getElementById('tag').innerText += ' ' + event.target.tagName);

/*4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д*/
let getUl = document.querySelector('ul');
let liUl = getUl.querySelectorAll('li');
const divAddeventListenerGenerate = document.getElementById('btn-generate');
function addLi (){
    let element = document.createElement('li');
    let i =document.querySelector('ul').querySelectorAll('li').length + 1;
    element.textContent = `Item ${i}`;
    getUl.appendChild(element);
}
divAddeventListenerGenerate.addEventListener('click', () => addLi());

