/*1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
*/
let someArr = [1,2,3,5,8,9,10];
let newArr = [];
someArr.forEach(function (currentEl,i){
    newArr.push({});
    newArr[i]['digit'] = currentEl;
    newArr[i]['odd'] = !!(currentEl % 2);
});
console.log(newArr) ;
/*2. Проверить, содержи ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да -
вернуть false*/

let secArr = [12, 4, 50, 1, 0, 18, 40];
function isZero(number){
    return number === 0;
}
console.log(secArr.some(isZero));

/*3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной
больше 3х букв. Если да - вернуть true
*/

let thirdArr =  ['yes', 'hello', 'no', 'easycode', 'what'];
function longWord(string) {
    return string.length > 3;
}
console.log(thirdArr.some(longWord));

/*4 Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения
в строке {буква: “a”, позиция_в_предложении: 1}:
*/

let fourthArr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

let goodArr = fourthArr.sort(function (prev,next) {
    return prev['index'] - next['index']
});
let result = goodArr.reduce(function (phrase, word) {
    return phrase + word.char ;
},'');

console.log(result);

/*5 Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
(размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd']
]

/*let fifthArr = [ [14, 45], [1], ['a', 'c', 'd'] ];
console.log(fifthArr.sort(function (prev,next) {
    return prev.length - next.length
}));

/*6 Отсортировать их по возрастающему количеству ядер (cores).*/

let sixthArr = [
    {cpu: 'intel', info: {cores:2, cache: 3}},
    {cpu: 'intel', info: {cores:4, cache: 4}},
    {cpu: 'amd', info: {cores:1, cache: 1}},
    {cpu: 'intel', info: {cores:3, cache: 2}},
    {cpu: 'amd', info: {cores:4, cache: 2}}
];
console.log(sixthArr.sort(function (prev,next) {
    return prev['info']['cores'] - next['info']['cores']
}));

/*7 Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна
вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к
дорогим:*/
let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];
let msg = ['prod3','prod8','prod4'];
let filterCollection = function (spis, low, max) {
    let finArr = products.map(function (currentEl) {
        let res;
        currentEl.price >= low && currentEl.price <= max && spis.some(function (item) {
           return currentEl.title === item
        })
            ? res = currentEl
            : false
        return res

  });

    return finArr.sort(function (prev,next) {
        return prev.price - next.price
    });
}
console.log(filterCollection(msg,15,30));