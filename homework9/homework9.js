/*1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:*/

const func = function (a, ...other){
    return {
        first: a,
        other
    }
}

console.log(func(1,2,3,4,5,5));

/*2. Организовать функцию getInfo, которая принимает объект вида
{ name: ...,  info: { employees: [...], partners: [ … ]  } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:*/


const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   }
};

const getInfo = function ({name = 'Unknown',info : {employees:[...emp],partners:[...part]} = 'Unknown'}) {
return console.log(`${name} ${part[0]} ${part[1]} `)
}

console.log(getInfo(organisation));