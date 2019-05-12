/*Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):*/

function sum() {
    const params = Array.prototype.slice.call(arguments);

    if (!params.length) return 0;

    return params.reduce(function (prev, next) { return prev + next; });
}

console.log(sum(1, 2, 3, 4));

/*ПЕРЕДЕЛАННЫЙ*/
const sums = (...prop) => {
    if (!prop.length) return 0;
    return prop.reduce((prev, next) => prev + next)
}

console.log(sums(1, 2, 3, 4));