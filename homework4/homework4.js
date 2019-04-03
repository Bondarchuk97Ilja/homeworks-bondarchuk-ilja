/* 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать
их произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0*/
let multiplay = function () {
    let result = 1;
    let a;
    if (arguments[0] === undefined){
      return 0;

    } else {
       for (i = 0; i < arguments.length; i++){
           typeof arguments[i] === 'number'
               ? result *= arguments[i]
               : result = 'error'
        }
       return result;
    }
};

console.log('1 try = ' + multiplay());
console.log('2 try = ' + multiplay(1,2,4,1));
console.log('3 try = ' + multiplay('dflkdfkd', 'sdsdsdsd'));

/*2.Создать функцию, которая принимает строку и возвращает строку-перевертыш:
reverseString(‘test’) // “tset”.*/
let shiftWord = function(shifter){
let normalWord = '';
for (i = 1; i < shifter.length + 1; i++) {
    normalWord = normalWord + shifter[shifter.length - i]
}
    return normalWord};

console.log(shiftWord('tset'));

/*3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
где каждый символ разделен пробелом и заменен на юникод-значение символа:
getCodeStringFromText(‘hello’) // “104 101 108 108 111”*/
let getCodeStringFromText = function (word) {
    let uniCode = '';
   for (i =0; i < word.length;i++ ) {
       uniCode += word.charCodeAt(i) + ' ';
   }
   return uniCode;
}
console.log(getCodeStringFromText('Hello'));
/*4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что
число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с
переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали
ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные
числа.*/
let letsPlay = function (num) {
    if (num > 0 && num < 11) {
        let min = 1;
        let max = 10;
        var answer = '';
        let randomNumber = Math.round(Math.random() * (max - min) + min);
        (num === randomNumber) ?
            answer = 'Вы выиграли' : answer = 'Вы не угадали ваше число ' + num + ' а выпало число ' + randomNumber;
    } else {
    answer = 'Загадайте число от 1 до 10';
    }
    return answer;
}
console.log(letsPlay(2) );

/*5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до
n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]*/
let getArray = function (max) {
    let arr = [];
    for (i= 0; i < max;i++){
        arr[i] = i+1;
    }
    return arr;
}
console.log(getArray(10));

/*6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными
элементами входного массива:
doubleArray([1,2,3]) // [1,2,3,1,2,3]*/
let doubleArray = function (massive) {
    let len = massive.length;
        for (j = 0; j < len; j++){
           massive[len + j] = massive[j]
        }
        return massive;
    }

console.log(doubleArray([1,2,3]));

/*7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого
массива первый элемент, а возвращает массив из оставшихся значений:
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.*/
let changeCollection = function () {
    for (i = 0; i < arguments.length; i++){
        arguments[i].shift();
    }
    return arguments
};

console.log(changeCollection([1,2,3],['a','b','c'],[10,9,8]));

/*8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и
значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый
массив с пользователями соответсвующие указанным параметрам.
funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]*/
let user = [{name: "Denis", age:29, gender:"male"},{name: "Ilja", age:21, gender:"male"}];

let funcGetUsers = function (users,type, value) {
    if (users !== undefined && type !== undefined && value !== undefined) {
        let newUsers = [];
        let j = 0;
        for (i = 0; i <users.length;i++) {
            if (users[i][type] === value) {
                newUsers[j++] = users[i];
            }
        }
        return newUsers
    } else {
        return 'Вы не ввели все аргументы'
    }
}

console.log(funcGetUsers(user,'age',21));