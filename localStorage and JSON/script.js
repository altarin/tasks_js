// 1 -----------------------------------------------------------------------------------------------------
// Создайте функцию makeOne которая записывает в Local Storage ключ games со значением 11 и вызовите ее.

// function makeOne() {
//     window.localStorage.setItem('games', '11');
// }
// makeOne()

//   2 -----------------------------------------------------------------------------------------------------
// Создайте функцию makeTwo, которая сохраняет в Local Storage строку "7,6,5". Ключ назовите numbers. После чего вызовите функцию.

// function makeTwo() {
//     window.localStorage.setItem('numbers', '7,6,5');
//   }
//   makeTwo()

//   3 ---------------------------------------------------------------------------------------------------------
// Создайте функцию makeThree, которая сохраняет в Local Storage строку "name=John,age=25".
//  Ключ назовите users, после чего вызовите функцию.

// function makeThree() {
//     window.localStorage.setItem('users', 'name=John,age=25');
//  }
//  makeThree()

//  4 ------------------------------------------------------------------------------------------------------------
// Создайте функцию makeFour, которая сохраняет в Local Storage логическое значение true. 
// Ключ задайте bool и вызовите эту функцию.

// function makeFour() {
//     window.localStorage.setItem('bool', 'true');
//   }
//   makeFour()

// 5 ------------------------------------------------------------------------------------------------------------------
// Создайте функцию makeFive, создайте в ней переменную key, в которую поместите строковое значение 'item',
//  добавьте в Local Storage значение null, а ключ заберите из переменной key и вызовите функцию.

// function makeFive() {
//     const key = 'item';
//   localStorage.setItem(key, null);
//   }
//   makeFive();

// 6 --------------------------------------------------------------------------------------------------------
// Создайте функцию makeSix, которая сохраняет в Local Storage по ключу objectSix объект 
// obj = { name: "Алиса", age: 30 }. Для преобразования объекта в строку используйте метод JSON.stringify()

// function makeSix() {
//     const obj = JSON.stringify({ name: "Алиса", age: 30 });
//       localStorage.setItem('objectSix', obj);
//     }
//     makeSix();

// 7 ----------------------------------------------------------------------------------------------------------------
// Создайте функцию makeSeven, которая сохраняет в Local Storage по ключу objectSeven объект obj = {
//     city: "Лондон",
//     country: "Великобритания",
//     population: 8900000,
//     language: "английский"
//     }
//      Вызовите функцию.
//     Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

// function makeSeven() {
//     const obj = JSON.stringify( {
//    city: "Лондон",
//    country: "Великобритания",
//    population: 8900000,
//    language: "английский"
//    })
//      localStorage.setItem('objectSeven', obj);
//    }
//    makeSeven();


// 8 --------------------------------------------------------------------------------------------------------------------------
// Создайте функцию makeEight, которая сохраняет в Local Storage по ключу objectEight объект obj = {
//     fruit: "Яблоко",
//     color: "красное",
//     quantity: 10,
//     price: 199
//     }. Вызовите функцию.
//     Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

// function makeEight() {
// 	const obj = JSON.stringify( {
// fruit: "Яблоко",
// color: "красное",
// quantity: 10,
// price: 199
// })
//   localStorage.setItem('objectEight', obj);
// }
// makeEight()

// 9 ---------------------------------------------------------------------------------------------------------------
// Создайте функцию makeNine, которая сохраняет в Local Storage по ключу arrayNine массив arr = [1, 2, 3, 4, 5]. Вызовите функцию.
// Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

// function makeNine() {
//     const arr = JSON.stringify([1, 2, 3, 4, 5]);
//    localStorage.setItem('arrayNine', arr);
//   }
//   makeNine()

// 10 ---------------------------------------------------------------------------------------------------------------
// Создайте функцию makeTen, которая сохраняет в Local Storage по ключу arrayTen 
// массив arr = ["яблоко", "банан", "апельсин"]. Вызовите функция.
// Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

// function makeTen() {
//     const arr = JSON.stringify(["яблоко", "банан", "апельсин"]);
//    localStorage.setItem('arrayTen', arr);
// }
// makeTen()

// 11 -------------------------------------------------------------------------------------------------------------------
// Создайте функцию makeEleven, которая сохраняет в Local Storage по ключу arrayEleven массив arr = [
//     { name: "Алиса", age: 30 },
//     { name: "Филин", age: 35 },
//     { name: "Кот", age: 40 }
//     ]. Вызовите функцию
//     Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()