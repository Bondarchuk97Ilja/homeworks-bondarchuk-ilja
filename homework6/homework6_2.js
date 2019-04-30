
/*1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:*/
function isParent(parent,child) {
    if (!parent) return console.log("Введите значение родителя");
    if (!child) return console.log("Введите значение последователя");
    return parent.contains(child);
    };

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.body.children[1], document.querySelector('mark')));
console.log(isParent(document.body.children[1], document.querySelector('li')));

/*2. Получить список всех ссылок, которые не находятся внутри списка ul*/

let allLinks = document.links;
let getUlSelector = document.querySelector('ul');
let allLinksWithoutUl = [];
allLinks = Array.from(allLinks);
for (i =  0; i < allLinks.length; i++){
    if (!getUlSelector.contains(allLinks[i])){
        allLinksWithoutUl.push(allLinks[i])
    }
}
console.log(allLinksWithoutUl);

/*3. Найти элемент, который находится перед и после списка ul*/
let prevUl = getUlSelector.previousElementSibling;
let nextUl = getUlSelector.nextElementSibling;
console.log(prevUl);
console.log(nextUl);

/*4. Посчитать количество элементов li в списке*/
let numElementsLi = getUlSelector.children;
console.log(numElementsLi.length);


/*КОД С УРОКА*/


// Task manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. очистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива
// 3. редактировать задачу
//      а. взять данные из массива
//      б. поместить в форму
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. офистить форму

// task = {
//     id: {
//         type: 'String',
//         required: true
//     },
//     title: {
//         type: 'String',
//         required: true
//     },
//     text: {
//         type: 'String',
//         required: true
//     }
// }


let storage = {
    todos: []
};

function generateId() {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let char of words) {
        let index = Math.floor(Math.random() * words.length);
        id += words[index];
    }

    return id;
}

function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Введите заголовок задачи');
    if (!text) return console.log('Введите текст задачи');

    const newTask = {
        title,
        text,
        id: generateId()
    };

    storage.todos.push(newTask);

    return storage.todos;
}

addNewTodoToStorage('My title 1', 'My text 1');
addNewTodoToStorage('My title 2', 'My text 2');
addNewTodoToStorage('My title 3', 'My text 3');
addNewTodoToStorage('My title 4', 'My text 4');

function deleteTodoFromStorage(id) {
    if (!id) return console.log('Передайте id задачи');

    const taskIndex = storage.todos.findIndex((task) => task.id === id)

    if (taskIndex === -1) return console.log('id несуществуе');

    const removedTask = storage.todos.splice(taskIndex, 1);

    return removedTask;
}

function editTaskStorage(id, title, text) {
    if (!id) return console.log('Передайте id задачи');
    if (!title) return console.log('Введите новый заголовок задачи');
    if (!text) return console.log('Введите новый текст задачи');

    const taskIndex = storage.todos.findIndex((task) => task.id === id)

    if (taskIndex === -1) return console.log('id несуществуе');

    storage.todos[taskIndex].title = title;
    storage.todos[taskIndex].text = text;

    return storage.todos;
}

// эти строки лучше выполнять в консоли браузера, когда вы сможете
// из массива storage.todos взять уникальный id тасочки
// editTaskStorage('some id', 'new title', 'new text')
// console.log(storage.todos)

// или можете практиковаться на storage.todos[0].id :)

/*6 Подумать и улучшить функцию generateId();*/

function newGenerateId() {
    return Date.now();
}