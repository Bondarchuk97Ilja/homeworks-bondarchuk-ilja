/*
1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
function Component(tagName) {
    this.tagName = tagName || 'div';
    this.node = document.createElement(tagName);
}*/

class Component{
    constructor(tagName = 'div'){this.tagName = tagName}
    get createNode(){return document.createElement(this.tagName);}
}

const comp = new Component('span');
comp.createNode;

/*2. Реализовать конструктор и методы в ES6 синтаксисе:

function Component(tagName) {
  this.tagName = tagName || 'div';
  this.node = document.createElement(tagName);
}

Component.prototype.setText = function (text) {
  this.node.textContent = text;
};
*/
class Component1{
    constructor(tagName = 'div'){
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
    putData(text = 'qwerty') {
        this.node.textContent = text;
    }
}
const comp1 = new Component1('p');
console.log(comp1);

/*3 3. Создать класс калькулятора который будет принимать
 стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и
 сеттер для получения и установки текущего числа с которым производятся вычисления.*/
const error = 'Error! Put numbers';

class Calculator{
    constructor(number = 0){
        this.number = number;
    }
    plus(value){
        if (typeof (value) !== 'number'){
            return console.log(error);
        }
        this.number += value;
        return this
    }
    minus(value){
        if ( typeof (value) !== 'number'){
            return console.log(error);
        }
        this.number -= value;
        return this
    }
    multiply(value){
        if (typeof (value) !== 'number'){
            return console.log(error);
        }
        this.number *= value;
        return this
    }
    divine(value){
        if ( typeof (value) !== 'number'){
            return console.log(error);
        }
        this.number /= value;
        return this
    }
    get numbers() {
        return this.number;
    }
    set numbers(newValue) {
        if (typeof newValue !== 'number') return console.log(error);
        this.number = newValue;
    }
}

