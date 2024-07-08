// 1.
// Создайте класс Worker. Класс должен содержать свойства name, surname.
// Создайте на его основе объект worker. Выведите в консоль созданный объект.

class Worker {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
const worker = new Worker('Имя', 'Фамилия');
console.log(worker);

// 1.1
// У вас есть объект book. Создайте метод getBookInfo для объекта book,
// который будет выводить в консоль информацию о книге в
// формате: "Название: название книги, Автор: автор книги, Год издания: год издания книги".

const book = {
    title: "Преступление и наказание",
    author: "Федор Достоевский",
    year: 1866
};

book.getBookInfo = function() {
    console.log("Название: " + this.title + ", Автор: " + this.author + ", Год издания: " + this.year);
};

book.getBookInfo();