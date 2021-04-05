'use strict'

const personal = {
    name: 'Sergey',
    age: 34,
    height: 186,
    wieght: 120,
    gender: 'male',
    profession: 'engineer',
    clothes: {
        up: 'tshirt',
        down: 'pants',
        head: 'cap'
    },
    makeTest: function() {
        console.log("Это метод объекта");
    }
};

//Вызываем метод объекта
personal.makeTest();

// Деструктуризация Объекта
const {up, down: d, head} = personal.clothes;
console.log(d);

//Длинна или количество ключей объекта
console.log(Object.keys(personal).length);


// Перебор объекта методом "for in"
let conter = 0; // Переменная для подсчета кол-ва ключей объекта

for (let key in personal) {
    if (typeof(personal[key]) === 'object') {
        for (let i in personal[key]) {
            console.log(`Свойство ${i} имеет значение ${personal[key][i]}`);
            conter++;
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${personal[key]}`);
    conter++;
    }
}
console.log(conter);