//? hoome work

// 1 задание
// Найти первый элемент в массиве, который больше 10.
// let arr = [1, 2, 5, 3, 6, 8, 40, 9, 70];
// output: 40
// let arr = [1, 2, 5, 3, 6, 8, 40, 9, 70];
// let res = arr.find((el) => el > 10);
// console.log(res);

// 2 задание
//  Проверить, все ли элементы массива являются положительными числами.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: false
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// let res = arr.every((el) => el > 0);
// console.log(res);

// 3 задание
// Проверить, есть ли в массиве хотя бы один элемент, равный 0.
// let arr = [5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28];
// output: true
// let arr = [5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28];
// let res = arr.some((el) => el === 0);
// console.log(res);

// 4 задание
// Найти первое четное число в массиве.
// let arr = [3, 5, 7, 1, 33, 77, 44];
// output: 44
// let arr = [3, 5, 7, 1, 33, 77, 44];
// let res = arr.find((el) => el % 2 === 0);
// console.log(res);

// 5 задание
// Проверить, все ли строки в массиве содержат более 5 символов.
// let person = ["Yntymak", "Malika", "Azima", "Abdylaziz", "Aitunuk","Aidana", "Elvira"];
// output: false
// let person = [
//   "Yntymak",
//   "Malika",
//   "Azima",
//   "Abdylaziz",
//   "Aitunuk",
//   "Aidana",
//   "Elvira",
// ];
// let res = person.every((el) => el.length > 5);
// console.log(res);

// 6 задание
// Проверить, есть ли в массиве хотя бы одно отрицательное число.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: true
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// let res = arr.some((el) => el <= 0);
// console.log(res);

// 7 задание
// Найти первую строку в массиве, которая начинается с буквы "M".
// let person = ["Yntymak", "Malika", "Azima", "Abdylaziz", "Aitunuk","Aidana", "Elvira"];
// output: Malika
// let person = [
//   "Yntymak",
//   "Malika",
//   "Azima",
//   "Abdylaziz",
//   "Aitunuk",
//   "Aidana",
//   "Elvira",
// ];
// let res = person.find((el) => el[0] === "M");
// console.log(res);

// 8 задание
// Проверить, все ли элементы массива являются четными числами.
// let arr = [3, 5, 7, 1, 33, 77, 44];
// output: false
// let arr = [3, 5, 7, 1, 33, 77, 44];
// let res = arr.every((el) => el % 2 === 0);
// console.log(res);

// 9 задание
// Проверить, есть ли в массиве хотя бы одна строка, содержащая только цифры.
// let person = ["Yntymak", "Malika", "Azima", "Abdy1aziz", "Aitunuk","Aidana", "Elvira"];
// output: false
// let person = [
//   "Yntymak",
//   "Malika",
//   "Azima",
//   "Abdy1aziz",
//   "Aitunuk",
//   "Aidana",
//   "Elvira",
// ];
// let res = person.some((str) => !isNaN(str));
// console.log(res);

// 10 задание
// Найти первый элемент массива, который делится на 3 без остатка.
// let arr = [5, 7, 1, 8, 9, 77, 44];
// output: 9
// let arr = [5, 7, 1, 8, 9, 77, 44];
// let res = arr.find((el) => el % 3 === 0);
// console.log(res);

// 11 задание
// Проверить, все ли элементы массива больше 0.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: true
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// let res = arr.every((el) => el >= 0);
// console.log(res);

// 12 задание
// Проверить, есть ли в массиве хотя бы одна строка, начинающаяся с заглавной буквы.
// let person = ["yntymak", "malika", "Azima", "abdy1aziz", "aitunuk","Aidana", "Elvira"];
// output: true
// let person = [
//   "yntymak",
//   "malika",
//   "Azima",
//   "abdy1aziz",
//   "aitunuk",
//   "Aidana",
//   "Elvira",
// ];
// let res = person.some((el) => el[0] === el[0].toUpperCase());
// console.log(res);

// ! 05.05.24 //
// 1 задание
// 4, 5, 6

// let arr = [3, 2, 1, 7];
// let res = [];
// let maxNum = arr.reduce((acc, el) => (acc > el ? acc : el));
// let minNum = arr.reduce((acc, el) => (acc < el ? acc : el));
// for (let i = minNum; i < maxNum; i++) {
//   res.push(i);
// }
// console.log(res);

// 2 задание
// Вам дана функция которая принимает строку в виде предложения.
// Необходимо заменить регистр каждого символа и вернуть строку.
// Пример: Дана строка 'The Quick Brown Fox'. Результатом должно
// быть: 'tHE qUICK bROWN fOX'
// let str = "The Quick Brown Fox";
// let res = str
//   .split("")
//   .map((el) => {
//     if (el === el.toUpperCase()) {
//       return el.toLowerCase();
//     } else {
//       return el.toUpperCase();
//     }
//   })
//   .join("");
// console.log(res);

// 3 задание
// Нам дана функция checkTask(arr) которая принимает массив с объектами с ключами
// name. Нужно перебрать этот массив так, чтобы функция нам вернула просто массив
// с именами в виде строк.

// Пример: Дан массив:

// let person = [
//   {
//     name: "Askat",
//   },
//   {
//     name: "Begimay",
//   },
//   {
//     name: "Mirdin",
//   },
//   {
//     name: "Aiday",
//   },
// ];
// let res = person.map((el) => el.name).join(" ");
// console.log(res);

// 4 задание
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде
// ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Mition"],
//   ["type", "Web"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"],
// ];
// for (let i of aboutUs) {
//   for (let j of aboutUs) {
//     console.log(`${i[0]}: ${i.slice(1)}`);
//   }
// }

// Вывод:
// name: Motion
// type: Web
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

// 5 задание
// let arr = ["pen", "pineapple", "apple", "pen"];
// Так же найдите самый короткий элемент этого же массива
// let arr = ["pen", "pineapple", "apple", "pen"];
// let minSum = arr.reduce((acc, el) => (acc.length < el.length ? acc : el));
// console.log(minSum);

// 6 задание
// При помощи метода reduce, вывести средний возраст всех юзеров.

// let users = [
//   {
//     name: "Askat",
//     age: 21,
//   },
//   {
//     name: "Mirdin",
//     age: 20,
//   },
//   {
//     name: "Begimay",
//     age: 24,
//   },
//   {
//     name: "Mikhail",
//     age: 27,
//   },
//   {
//     name: "Almas",
//     age: 38,
//   },
// ];
// let sum = users.reduce((acc, el) => acc + el.age, 0);
// let res = sum / users.length;
// console.log(res);

// 7 задание
// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ]
// задача: реализовать рассылку сообщений типа: 'Hello, [Здесь должно быть имя клиента],
// the grand sale has begun, prices are reduced by 20%!',
// игнорировать клиентов, которым нет 18-ти лет

// const clients = [
//   { name: "Jack", age: 15 },
//   { name: "Helen", age: 34 },
//   { name: "Tom", age: 20 },
//   { name: "Bob", age: 54 },
//   { name: "Jessica", age: 13 },
// ];

// for (let i = 0; i < clients.length; i++) {
//   if (clients[i].age >= 18) {
//     console.log(
//       `Hello, ${clients[i].name}, the grand sale has begun, prices are reduced by 20%!`
//     );
//   }
// }

// const clients = [
//   { name: "Jack", age: 15 },
//   { name: "Helen", age: 34 },
//   { name: "Tom", age: 20 },
//   { name: "Bob", age: 54 },
//   { name: "Jessica", age: 13 },
// ];

// const messages = clients
//   .filter((client) => client.age > 18)
//   .map(
//     (el) =>
//       `Hello, ${el.name}, the grand sale has begun, prices are reduced by 20%!`
//   );

// console.log(messages);

// 8 задание
// Дан массив с объектами: [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ]
// задача: на все автомобили, которые старше 2007 года, поставить
// скидку 20%(для скидки использовать свойство 'sale')

// let cars = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];
// cars.forEach((car) => (car.year < 2007 ? (car.sale = car.price * 0.2) : car));
// console.log(cars);

// 9 задание
// let person = [
//   {
//     name: "John",
//     price: 2000,
//     work: "IT-BACKEND",
//     salary: 20000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "BANK",
//     salary: 9000,
//   },
//   {
//     name: "Dastan",
//     price: 2000,
//     work: "IT-FRONTEND",
//     salary: 15000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "JOURNALIST",
//     salary: 10000,
//   },
// ];
// let res = person.filter((el) => {
//   if (el.work.includes("IT")) {
//     return el;
//   }
// });
// console.log(res);

// ? home work

// 1 задание
// Создайте функцию checkTask(arr), которая принимает в аргументы
// массив состоящий из строк и выводит в консоль новый массив
// состояший только из первых и последних букв каждой строки.
// Например, для массива:
// ['hi', 'goodbye', 'smile']
// Вывод будет:
// ['hi', 'ge', 'se']

// const strings = ["hi", "goodbye", "smile"];
// function checkTask(arr) {
//   const result = [];
//   for (let str of arr) {
//     const a = str[0];
//     const b = str[str.length - 1];
//     result.push(a + b);
//   }
//   console.log(result);
// }
// checkTask(strings);

// function checkTask(arr) {
//   let result = arr.map((str) => str[0] + str[str.length - 1]);
//   console.log(result);
// }
// checkTask(["hi", "goodbye", "smile"]);

// 2 задание
// Дан массив let lengthName = [`Patricia` , William , Barbara , James , Chloe , Elizabeth ];
// Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().

// let lengthName = [
//   "Patricia",
//   "William",
//   "Barbara",
//   "James",
//   "Chloe",
//   "Elizabeth",
// ];

// let res = lengthName.map((el) => el.length);

// console.log(res);

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// H.W;
// let lengthName = [
//   "Patricia",
//   "William",
//   "Barbara",
//   "James",
//   "Chloe",
//   "Elizabeth",
// ];
// function checkTask(Limit) {
//   let res = lengthName.map((el) => el.length * Limit);
//   return res.join(" ");
// }
// console.log(checkTask(50));
