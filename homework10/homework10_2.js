/*1. Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и
второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
var lexus = new Car(‘lexus’, 2);
lexus.получитьМарку(); // “Lexus”
lexus.получитьГодВыпуска(); // 2017 (2019-2);
Марка машины всегда должна возвращаться с большой буквы!
*/
function Car (mark, age){
    //название марки
    this.getMark = function () {
        return mark.substring(0, 1).toUpperCase() + mark.substring(1);
    };
    //год выпуска
    this.getYear = function () {
        let now = new Date();
        let year = now.getFullYear();
        return year - age;
    };
}

let lexus = new Car('lexus', 2);

console.log(lexus.getMark());
console.log(lexus.getYear());


/*Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получает строку и имеет следующие методы:
	a. показать оригинальную строку
b. показать зашифрованную строку
Строки не должны быть доступны через this, только с помощью методов.*/

function Crypt(string) {
    //показ строки
    this.getString  = function (){
        return string
    };
    //показ зашифрованной строки
    this.makeCrypt = function (){
        let cryptString = '';
        for (let i = string.length-1; i >= 0; i--){
            cryptString+= string[i];
        }
        return cryptString;
    };
}

let goCrypt = new Crypt('qwerty');

console.log(goCrypt.getString());
console.log(goCrypt.makeCrypt());