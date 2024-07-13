// 1.
// Создайте класс Worker. Класс должен содержать свойства name, surname.
// Создайте на его основе объект worker. Выведите в консоль созданный объект.

// class Worker {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
// }
// const worker = new Worker('Имя', 'Фамилия');
// console.log(worker);


// ----------------------------------------------------------------------------------------------------------------


// 1.1
// У вас есть объект book. Создайте метод getBookInfo для объекта book,
// который будет выводить в консоль информацию о книге в
// формате: "Название: название книги, Автор: автор книги, Год издания: год издания книги".

// const book = {
//     title: "Преступление и наказание",
//     author: "Федор Достоевский",
//     year: 1866
// };

// book.getBookInfo = function() {
//     console.log("Название: " + this.title + ", Автор: " + this.author + ", Год издания: " + this.year);
// };

// book.getBookInfo();


// -------------------------------------------------------------------------------------------------------------------


// 1.2
//Задание: Управление корзиной на маркетплейсе с использованием конструкторов и прототипов

//В данном задании вам предстоит создать систему для управления корзиной покупок на маркетплейсе. Вы будете использовать конструкторы и прототипы для создания объектов, представляющих товары и корзину, а также добавлять методы для управления этими объектами.

//Создайте конструктор Product, который будет принимать аргументы name (название товара) и price (цена товара). Внутри конструктора установите свойства name и price.

//Добавьте метод displayInfo к прототипу конструктора Product, который будет выводить в консоль информацию о товаре в формате "Название: [name], Цена: [price]".

//Создайте несколько объектов-товаров, используя конструктор Product, например:
//item1 с названием "Футболка" и ценой 25.
//item2 с названием "Джинсы" и ценой 50.
//item3 с названием "Кроссовки" и ценой 80.

//Выведите на экран инормацию о товарах в консоль


// //Конструктор товара
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// //Метод для вывода информации о товаре
// Product.prototype.displayInfo = function () {
//     console.log(`Название: ${this.name}, Цена: ${this.price}`);
// }

//Создаём несколько товаров
// const item1 = new Product("Футболка", 25);
// const item2 = new Product("Джинсы", 50);
// const item3 = new Product("Кроссовки", 80);

// //Выводим информацию о товарах
// console.log("Информация о товарах:");
// item1.displayInfo();
// item2.displayInfo();
// item3.displayInfo();

// -----------------------------------------------------------------------------------------------------------


// 2
// Добавьте в класс Worker метод fullName, который будет возвращать полное имя работника в формате "Фамилия, Имя".
// Создайте объект worker на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName

// class Worker {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     fullName () {
//         return this.surname + ', ' + this.name;
//     }
// }
// const worker2 =  new Worker('Имя', 'Фамилия');
// console.log(worker2.fullName());


// -----------------------------------------------------------------------------------------------------------------


// 3
// Создайте класс Car. Класс должен содержать свойства brand, model и year.
// Создайте на его основе объект car и выведите его свойства в консоль.

// class Car {
//     constructor (brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
// }
// const car2 = new Car('Бренд', 'Модель', 'Год');
// console.log(car2);


// -----------------------------------------------------------------------------------------------------------------


// 4
// Добавьте в класс Car метод getAge, который будет возвращать возраст машины
// (текущий год минус год выпуска,текущий год нужно получить через клас Date).
// Создайте объект car2 на основе класса Car и выведите его возраст в консоль с помощью метода getAge.
// Результат в консоли должен быть типом данных numbers.

// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.getAge();
//     }
//     getAge(){
//         const nowYears = new Date().getFullYear();
//         return nowYears - this.year;
//     }
// }

// const car = new Car('BMW','X6',2023);
// console.log(car.getAge());


// -----------------------------------------------------------------------------------------------------------------

// 5
// Cоздайте класс Rectangle. Класс должен содержать свойства width и height.
// Создайте на его основе объект rectangle и выведите его свойства в консоль.

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }
// const rectangle = new Rectangle('ширина', 'высота')
// console.log(rectangle)

// -----------------------------------------------------------------------------------------------------------------

// 6
// Добавьте в класс Rectangle метод getArea, который будет возвращать площадь прямоугольника
// (произведение ширины и высоты). Создайте объект rectangle на основе класса Rectangle и
// выведите его площадь в консоль с помощью метода getArea.

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//         this.getArea();
//     }
//     getArea(){
//         return this.width * this.height;
//     }
// }
// const rectangle = new Rectangle();
// console.log(rectangle.getArea());

// -----------------------------------------------------------------------------------------------------------------

// 7
// Cоздайте класс Circle. Класс должен содержать свойство radius.
// Создайте на его основе объект circle и выведите его свойство в консоль.

// class Circle {
//     constructor(radius){
//         this.radius = radius;
//     }
// }
// const circle = new Circle();
// console.log(circle);

// -----------------------------------------------------------------------------------------------------------------

// // 8.
// Добавьте в класс Circle метод calculateArea, который будет вычислять и возвращать площадь круга.
//     Формула для расчета площади круга: площадь = радиус * радиус * 3.14. Создайте объект circle2 на основе класса
// Circle с радиусом 3 и выведите его площадь круга в консоль с помощью метода calculateArea.

// class Circle {
//     constructor(radius){
//         this.radius = radius
//     }
//     calculateArea(){
//         return this.radius * this.radius * 3.14;
//     }
// }
// const circle = new Circle(12)
// console.log(circle.calculateArea());

// -----------------------------------------------------------------------------------------------------------------

// 9
// Создайте класс Student. Класс должен содержать свойства name, age и grade. 
// Создайте на его основе объект student и выведите его свойства в консоль.

// class Student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }     
// }
// const student = new Student('Маша', 20, 5);
// console.log(student);

// -------------------------------------------------------------------------------------------------------------------


// 10
// Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на 1. 
// Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода increaseGrade и выведите новую оценку в консоль.

// class Student {
//     constructor(name, age, grade) {
//       this.name = name;
//       this.age = age;
//       this.grade = grade;
//     }
//       increaseGrade() {
//         this.grade += 1
//       }
//   }
//   const student = new Student("Cat", 29, 2);
//   student.increaseGrade();
//   console.log(student.grade);


//   -----------------------------------------------------------------------------------------------------------------------

// 11
// Создайте класс Book. Класс должен содержать свойства title, author и year. 
// Создайте на его основе объект book и выведите его свойства в консоль.

class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
const book = new Book('Война и мир', 'Толстой', 1865);
console.log(book);