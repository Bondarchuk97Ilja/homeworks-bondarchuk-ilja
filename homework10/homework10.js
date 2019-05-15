/*1. Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
*/
console.log ("Task 1");

function minus(i = 0){
    return function(j = 0){
        return i-j;
    }
}

console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

/*Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)*/

console.log ("Task 2");

function multiplyMaker(num){
    return function(i){
        return num *= i
    }
}

const multiply = multiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

/*3. Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5*/

console.log ("Task 3");

let encryption =  (function  (encrypt) {
      //первый блок
    function checkEncrypt (string){
        string === '' ? string = ''
                      : string;

        typeof string === 'number' ? string = string + ""
                                   : string;
        encrypt = string;
        return encrypt;
    }
    // второй блок
    function getEncrypt (string){
        return string.valueOf();
    }
    // третий блок
    function lenEncrypt(){
        return encrypt.length;
    }
    // четвертый блок
    function encrypting (string){
        let encryptedCode = "";
        encrypt = string;

        for (let i = encrypt.length - 1; i >= 0; i--){
            encryptedCode += encrypt[i];
        }
        return encryptedCode;
    }
    return {
        checkEncrypt,
        getEncrypt,
        lenEncrypt,
        encrypting
    }
})();

let code = 'qwerty';

console.log(encryption.checkEncrypt(code));
console.log(encryption.getEncrypt(code));
console.log(encryption.lenEncrypt());
console.log(encryption.encrypting(code));

/*4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100*/

console.log ("Task 4");

let error = 'Put the number';

let calculator = (function() {
    let num = 0;
    function putNum(value){
        if (typeof value !== 'number')
            return error;
        num = value;
        return this;
    }
    function plus(value){
        if (typeof value !== 'number')
            return error;
        num += value;
        return this;
    }
    function multiply(value){
            if (typeof value !== 'number')
                return error;
            num *= value;
            return this;
    }
    function minus(value){
        if (typeof value !== 'number')
            return error;
        num -= value;
        return this;
    }
    function degree(value){
        if (typeof value !== 'number')
            return error;
        num = Math.pow(num,value);
        return this;
    }
    function getValue(){
        num = Math.round(num);
        return num;
    }
    return{
        putNum,
        plus,
        minus,
        multiply,
        degree,
        getValue
    }
})();

calculator.putNum(10).minus(6).multiply(10);

console.log(calculator.getValue());
