/*1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while.*/
let string = 'i am in the easycode';
let newString = '';
let j = null;
for (i = 0; i < string.length; i++) {
    let loop = string[i];
    if (i === 0) {
        newString = newString + loop.toUpperCase();
    } else if (i === j) {
        continue;
    } else if (loop === ' ') {
        newString = newString + loop;
        newString = newString + string[i + 1].toUpperCase();
        j = i + 1;
    } else {
        newString = newString + loop;
    }
}
console.log("1st task ");
console.log(newString);
/*2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).*/
let shifter = 'tseb eht ma i';
let normalWord = '';
for (i = 1; i < shifter.length + 1; i++) {
    normalWord = normalWord + shifter[shifter.length - i]
}
console.log("2nd task ");
console.log(normalWord);
/*3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.*/
let num = 10;
let factorial = 1;
for (i = 1; i < num + 1; i++) {
    factorial = factorial * i;
}
console.log("3rd task ");
console.log(factorial);
/*4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.*/
let string1 = 'JavaScript is a pretty good language';
let newString1 = '';
let j1 = null;
for (i = 0; i < string1.length; i++) {
    let loop = string1[i];
    if (i === 0) {
        newString1 = newString1 + loop.toUpperCase();
    } else if (i === j1) {
        continue;
    } else if (loop === ' ') {
//newString = newString + loop;  //almost like first task
        newString1 = newString1 + string1[i + 1].toUpperCase();
        j1 = i + 1;
    } else {
        newString1 = newString1 + loop;
    }
}
console.log("4th task ");
console.log(newString1)
/*5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
 Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.*/
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let oddArray = [];
let j2 = 0;
for (let value of newArray) {
    if (value%2 > 0) {
        oddArray[j2] = value;
        j2++;
    }
}
console.log ("5th task ");
console.log ( oddArray);
/*6. Дан объект:
let list = {
     name: ‘denis’,
     work: ‘easycode’,
     age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.*/
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};
for (let prop in list) {
    if (typeof list[prop] === 'string') {
        list[prop] = list[prop].toUpperCase();
    }
}
console.log ("6th task");
console.log (list);