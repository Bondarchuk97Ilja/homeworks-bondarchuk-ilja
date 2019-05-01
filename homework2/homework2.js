/*1-ый блок
1. let a = 0 || 'string';
a = 'string', поскольку 0 - false
2. let a = 1 && 'string';
a = 'string', берет значение потому что оно последнее и значение true
3. let a = null || 25;
a = 25, потому что null - false, а 25 true, при ИЛИ выбирается true
4. let a = null && 25;
a = null, потому что выражение false, а здесь оператор И
5. let a = null || 0 || 35;
a = 35, потому что все другие значение false а оператор ИЛИ
6. a = null && 0 && 35;
a = null, потому что строка false и берет первое значение

2-ой блок
1. 12 + 14 + '12' = '2612' - арифметическое сложение, потом конкатенация
2. 3 + 2 - '1' = 4 - минус арифметическая операция
3. '3' + 2 - 1 = 31 - сначала конкатенация, потом арифметическая операция
4. true + 2 = 3 - true = 1 при арифметической операции
5. +'10' + 1 = 11 - унарное преобразование
6. undefined + 2 = NaN - из-за undefined
7. null + 5 = 5 - null преобразуется в  0
8. true + undefined = NaN - true = 1, но undefined NaN
*/
/*
//3-ий блок
//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let a = 'hidden';
if (a =='hidden'){
    a = 'visible';
} else {a = 'hidden'}
;
alert(a);
//2. Используя if, записать условие:
// a. если переменная равна нулю, присвоить ей 1;
// b. если меньше нуля - строку “less then zero”;
// c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10
// (использовать краткую запись).

let b = 0;
if (b ==0){
    b = 1;
} else if(b<0) {
    b= 'less then zero';
} else if (b>0) {
    b*=10;
};
alert(b);

//3.Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need
// Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
if (car["age"] > 5) {
    console.log('Need repair');
    car["needRepair"] = true;
} else {
    car["needRepair"] = false;
}
alert(  car["needRepair"]);

//4.Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать
// поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите
// внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить
// расчет. иначе если поля discount нет то вывести просто поле price в консоль.
let item = { name: 'Intel core i7', price: '100$', discount: '15%'};
if (item.discount){
    item["priceWithDiscount"]=parseInt(item["price"])-parseInt(item["price"])*(parseInt(item["discount"])/100)
    alert (item["priceWithDiscount"]+"$");
} else {
    console.log(item["price"])
};
//5.Дан следующий код:
// let product = {
// name: “Яблоко”,
// price: “10$”
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной
// цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {name:"Яблоко",price:"10$"};
let min = 10;
let max = 20;
if (parseInt(product["price"])>=min && parseInt(product["price"])<=max){
    console.log(product["name"]);
}else {console.log("Товаров не найдено")};
*/
//4-ый блок

let obj = {name:'iphone'};
obj["price"] = 1000;
obj["currency"] = 'dollar';
let details2 = {model:'7s', color:'black'};
obj["details"] = details2;
