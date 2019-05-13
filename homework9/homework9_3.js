/*1. Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};
*/
const rectangle = {
    width: 10,
    height: 15,
    getSquare: function (){return this.height * this.width}
}

console.log(rectangle.getSquare());

/*2.Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:*/
const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price
    },
    getPriceWithDiscount: function () {
        return this.price - this.price * parseInt(this.discount) / 100
    }};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

/*3. Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:*/

const square = {
    width: 10,
    height: 10,
    upWidth
};

function upWidth() {
    return ++this.width
}

console.log(square.width);
square.upWidth();
console.log(square.width);

/*4. Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:*/

const numerator = {
    value: 1,
    double,
    plusOne,
    minusOne
}

function double(){
    this.value = this.value * 2;
    return this
};


function plusOne(){
   ++this.value;
    return this
};


function minusOne(){
 --this.value;
    return this
};

numerator.double().plusOne().plusOne().minusOne();

console.log(numerator.value);

