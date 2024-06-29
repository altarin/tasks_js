//создать пустой массив
let numbers = [];
let i = 0;
//заполнить числами от -10 до 10
for (i=-10; i <= 10; i ++) {
    numbers.push(i);
}
console.log(numbers);

//удалить отрицательные числа из массива
const result = numbers.filter(i => i > 0);
console.log(result);

//возвести в квадрат
let square= numbers.map(el => el **2);
console.log(square);

//расположить в порядке убывания
let decreasing = numbers.sort((a, b) => (b - a));
console.log(decreasing);
