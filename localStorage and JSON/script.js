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

// function makeEleven() {
//     const arr = JSON.stringify([
//  { name: "Алиса", age: 30 },
//  { name: "Филин", age: 35 },
//  { name: "Кот", age: 40 }
//  ]);
//     localStorage.setItem('arrayEleven', arr);
//  }
//  makeEleven()

// 12 ---------------------------------------------------------------------------------------------------------------
// Вам нужно будет создать две функции: addLocalStorageEleven и renderLocalStorage.
// Функция addLocalStorageEleven должна записать в localStorage arr = [
// { name: "Алиса", age: 30 },
// { name: "Филин", age: 35 },
// { name: "Кот", age: 40 }
// ] под ключом arrTwelve.
// После чего создаем вторую функциию renderLocalStorage.
// Она должна находить span c классом practicum12, который чуть ниже задания, и в него с помощью метода TextContent должно записываться имя пользователя из localStorage name первого пользователя из массива .
// Вызываем функцию addLocalStorageEleven renderLocalStorage и нажимаем кнопку Проверить.

// Подсказки :
// -не перепутайте последовательность вызова функций, сначала записываем в localStorage, потом забираем.
// -для того, чтобы записать данные, оборачиваем в JSON.stringify, для того, чтобы с полученными данными работать - JSON.parse.

// <span class="practicum12">Тут должен быть ваш текст</span>
// Тут должен быть ваш текст


// function addLocalStorageEleven() {
// 	const arr =[
// 		{ name: "Алиса", age: 30 },
// 		{ name: "Филин", age: 35 },
// 		{ name: "Кот", age: 40 }
// 	]
// 	localStorage.setItem('arrTwelve',JSON.stringify(arr));
// }
// function renderLocalStorage(){
// 	const arr = JSON.parse(localStorage.getItem('arrTwelve'));
// 	const span = document.querySelector('.practicum12');
// 	span.textContent =  arr[0].name;	
// }
// addLocalStorageEleven();
// renderLocalStorage();



// 13---------------------------------------------------------------------------------------------------------------
// Функция addLocalStorage записывает массив в localStorage под ключом arrLocal.
// Ваша задача создать функцию showTen, которая получит из Local Storage сохраннённый массив.
// Найти элемент с классом practicum13 и записать в него все элементы из массива через запятую.
// Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для преобразования массива в нужную строку используйте метод join().

//  <div class="pr"><span class="practicum13"></span></div>
// Тут появится ваш текст после нажатия кнопки


// function  addLocalStorage() {
// 	localStorage.setItem('arrLocal',JSON.stringify(["яблоко","банан","апельсин"]))
// }

// function showTen(){
//   	const arr = JSON.parse(localStorage.getItem('arrLocal'));
// 	const span = document.querySelector('.practicum13');
//     span.textContent =  arr.join(',');
// }
// addLocalStorage()
// showTen()


// 14 ---------------------------------------------------------------------------------------------------
// У вас есть функция addLocalStorage, которая записывает в localStorage массив.
// Нужно создать функцияю calcArr, которая будет получать массив из localStorage.
// Получить сумму элементов массива и записать его в тег span c классом practicum14.
// Подсказка: для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

//  <div class="pr"><span class="practicum14"></span></div>
// Тут появится ваш текст после нажатия кнопки (15)

// function addLocalStorage (){
// 	localStorage.setItem("arrLocal",JSON.stringify([1,2,3,4,5]));
// }
// function calcArr(){
//   	const arr = JSON.parse(localStorage.getItem('arrLocal'));
 
//     let sum = 0;
//     arr.forEach(item =>{
//       sum += item
//     })
  
// 	const span = document.querySelector('.practicum14');
//     span.textContent = sum;
// }
// addLocalStorage()
// calcArr()


// 15 ---------------------------------------------------------------------------------------------------
// У вас есть функция addLocalStorage, которая записывает обьект в Local Storage под ключом objLoсal
// Вам нужно получить этот обьект и вывести строку в тег span с классом practicum15 а таком формате:
// name:Cat; age:20; work:ItGirls
// Не забываем про методы parse и stringify, для преобразования обьекта в нужную строчку используем цикл for in.

//  <div class="pr"><span class="practicum15"></span></div>
// Тут появится ваш текст после нажатия кнопки

// function addLocalStorageSet() {
//   localStorage.setItem(
//     "objLoсal",
//     JSON.stringify({ name: "Cat", age: 20, work: "ItGirls" })
//   );
// }
// function renderUser() {
//   const obj = JSON.parse(localStorage.getItem("objLoсal"));
//   let str = "";
//   for (let key in obj) {
//     str += `${key}: ${obj[key]};`;
//   }
//   document.querySelector(".practicum15").textContent = str;
// }
// addLocalStorageSet();
// renderUser();

// 16 ---------------------------------------------------------------------------------------------------
// У вас есть функция addLocalStorageSixteen, которая запиcывает в localStorage обьект под ключом objLocal.
// В функции renderString вам нужно в переменной obj получить обьект из localStorage.
// Найти тег span по классу practicum16 и поместить туда такую строку 'Город Лондон имеет население 8900000 человек'
// Лондон и 8900000 должны подставляться из обьекта с Local Storage как переменные в строку.
// Подсказка: Для склеивания строки лучше всего использоваьть шаблонные строки.

//  <div class="pr"><span class="practicum16"></span></div>
// Тут появится ваш текст после нажатия кнопки

// function addLocalStorageSixteen() {
//   localStorage.setItem(
//     "objLocal",
//     JSON.stringify({
//       city: "Лондон",
//       country: "Великобритания",
//       population: 8900000,
//       language: "английский",
//     })
//   );
// }
// function renderString (){
// const obj = JSON.parse(localStorage.getItem("objLocal"));
// document.querySelector('.practicum16').textContent = `Город ${obj.city} имеет население ${obj.population} человек`;
// }
// addLocalStorageSixteen()
// renderString()

// 17 ---------------------------------------------------------------------------------------------------
// У вас есть две createUser, в которой вы должны создать обьект любого пользователя и в нем обязательно должны быть поля: nameUser,ageUser, workUser, emailUser, phoneUser.
// Этот объект вы должны записать в localStorage под ключом objLocalUser.
// Поля не должны оставаться пустыми, их нужно заполнить рандомной информацией.
// И функция renderCardUser, в ней вы должны получить обьект этого пользователя из localStorage.

// После чего найти div с классом practicum17 и положить туда с помощью метода innerHTML шаблонную строку.
// Шаблонная строка должна содержать в себе верстку, где userName является заголовком первого порядка, а остальные данные должны быть обернуты в тег <p></p>.

// Результат, как должно получиться:
// Cat
// Возраст:30 лет
// Место работы:itGirls
// Почта:catEmail@gamil.com
// Номер телефона:+7946138520

//  <div class="practicum17"></div>


// function createUser() {
//   const objUser = {
//     nameUser: "Cat",
//     ageUser: 30,
//     workUser: "ItGirls",
//     emailUser: "catEmail@gamil.com",
//     phoneUser: "+7946138520",
//   };
//   localStorage.setItem("objLocalUser", JSON.stringify(objUser));
// }
// function renderCardUser () {
//   const obj = JSON.parse(localStorage.getItem('objLocalUser'))
//   document.querySelector('.practicum17').innerHTML = 
//   `<h1>${obj.nameUser}</h1>
// 	<p>Возраст:${obj.ageUser}</p>
// 	<p>Место работы:${obj.workUser}</p>
// 	<p>Почта:${obj.emailUser}</p>
// 	<p>Номер телефона:${obj.phoneUser}</p>
//   `
// };
// createUser()
// renderCardUser()


// 18 ---------------------------------------------------------------------------------------------------
// Создайте функцию clearLocalStorage, которая очищает весь Local Storage. Вызовите ее.

// function clearLocalStorage(){
//   localStorage.clear()
// }
// clearLocalStorage()


// 19 ---------------------------------------------------------------------------------------------------
// Написана функция addToNumbers, которая находит инпут на странице и забирает с него то, что ввел пользователь.
// Эти данные она округляет до целого числа с помощью parseInt и записывает в переменную number.
// Если данные не были введены, то функция не сработает, для этого там стоит одно из условий.
// Для вас написано условие, которое проверяет, есть ли в localStorage массив с числами под ключом task19 или нет.
// В переменной arr записывается результат поиска этого массива.
// Ваша задача написать условие: если этого массива нет, то создать его, положить туда число, что ввел пользователь и записать в localStorage под ключом task19.
// Если этот массив там есть, то нужно обратиться к нему и записать туда новое число, и этот измененный массив с новым числом записать в localStorage.
// После того как напишете код, введите в input число и нажмите кнопку проверить.

//  <div class="practicum19">
//   <input type="number" id="numberInput" placeholder="Введите число" />
//  </div>

// function addToNumbers() {
// 	//поиск input
//   const numberInput = document.getElementById("numberInput");
//   //округление до целого числа
//   const number = parseInt(numberInput.value);
//   // условие на заполнение инпута
//   if (number) {
// 	// получение данных из local storage по ключу task19
//     const arr = JSON.parse(localStorage.getItem("task19"));
// 	//условие на проверку есть ли в localStorage нужный нам массив
//     if (arr) {
		
//     } else {
		
//     }
// 	//очистка инпута
//     numberInput.value = "";
//   }
// }

// addToNumbers();

// 20 ---------------------------------------------------------------------------------------------------

// Создайте функцию removeLastElement, которая получает массив из localStorage под ключом task19 и записывает его в переменную
// После получения массива функция должна удалять последний элемент массива и возвращать обновленный массив в localStorage под тем же ключом
// Важно предусмотреть условия, если в массиве больше нет элементов и он пуст, функция не должна сработать, для удаления используйте метод pop.

// function removeLastElement() {
//   const arr = JSON.parse(localStorage.getItem('task19'));
//   if (arr.length === 0) { 
//     console.log('массив пуст')
//   } else {
//     arr.pop();
//   }
//   localStorage.setItem("task19", JSON.stringify(arr));
// }
// removeLastElement();


// 21 ---------------------------------------------------------------------------------------------------

// У вас есть функция addToCart, она должна:
// - Забрать данные из localStorage и записать их в переменную arr под ключом cartItems.
// - Если в localStorage не окажется такого ключа, то нужно вывести в консоль сообщение о том, что такой переменной не существует и остановить функцию.
// -После чего нужно найти инпут и также написать условие, если на момент выполнения функции input будет пустым, то вывести в консоль фразу о том что нужно заполнить input и остановить функцию.
// - Если все хорошо и все условия соблюдены, то нужно записать те данные, которые ввел пользователь в инпуты нашего массив arr.
// - Обновленный массив записать в localStorage под тем же ключом.

// Порядок действий проверки задания:
// 1.Написать рабочую функцию.
// 2.Заполнить input.
// 3.Нажать кнопку 'проверить(сохранить)'.
// Задание будет считаться выполненым, если не сработало ни одно условие, а в массив записались данные из инпута.
// Подсказки :
// -добавлять элемент нужно через метод push.
// - return останавливает функцию.

//  <div class='html' >
//   <input type="text" id="task21" placeholder="Введите наименование товара" />
//  </div>


  // забираем данные из localStorage
	// const arr = JSON.parse(localStorage.getItem('cartItems'))
	//добавляем проверку переменной arr
		///в консоль выводим фразу, что такого массива не существует
		//останавливаем функцию
//   if(!arr){
//     console.log('такого массива не существует')
//     return
// 	}
  //находим инпут
	// const input = document.getElementById('task21')
  //забираем данные из инпута, которые ввел пользователь
		//добавляем проверку пустой инпут или нет
		//выводим сообщение в консоль о том, что не были введены данные в инпут
		//останавливаем функцию
// if(input.value.trim() === ''){
// 		console.log('введите значение в input')
// 		return
// }
	// добавляем элемент в массив
//   arr.push(input.value);
	// записываем измененный массив в localStorage
//   localStorage.setItem("cartItems", JSON.stringify(arr))
// }

// addToCart()


// 22 ---------------------------------------------------------------------------------------------------
// У нас есть функция removeToCart, она должна:
// -Получать данные из LocalStorage по ключу 'task22'
// -Останавливать свою работу, если данных нет по этому ключу.
// -После проверки данных, функция должна находить selector по id и забирать его значение.
// -Необходимо дописать условие, что если пользователь не выбрал нужный индекс в селекторе, то функцию также нужно остановить.
// -Дальше функция с помощью метода filter удаляет элемент согласно выбранному index в селекторе.
// -После она должна записать новый масссив под тем же ключом в localStorage.

//     <div class="html">
//       <select id="task22">
//         <option value="" hidden>
//           Укажите нужный индекс для удаление элемента из массива
//         </option>
//         <option value="0">0</option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//       </select>
//     </div>



// function removeToCart() {
//   const arr = JSON.parse(localStorage.getItem("task22"));
//   if (!arr) {
//     console.log("такого массива не существует.");
//     return;
//   }
//   const valueId = document.querySelector("#task22").value;
//   if (valueId === "") {
//     console.log("не выбран index");
//     return;
//   }
//   const newArr = arr.filter((item, index) => index !== +valueId);
//   localStorage.setItem("task22", JSON.stringify(newArr));
// }
// removeToCart();


// 23 ---------------------------------------------------------------------------------------------------
// У нас есть функция addNewUserLocalStorage, она должна:
// -Находить форму с помощью id task23 и записать в переменную myForm
// -Забрать из localStorage массив и записать его в переменную arr
// - Воспользоваться классом myForm и получить эту форму
// -Создать пустой обьект user и с помощью цикла for of перебрать объект, который мы получили от класса FormData
// -Внутри цикла написать условие, которое будет заканчивать цикл, если хотя бы одно из полей формы будет не заполнено и выводить в консоль сообщение об этом. Если мы зашли в это условие, функция также должна прекращать свою работу.
// - Полученный обьект добавить в конец массива arr и записать arr в localStorage под ключом 'task23'.

//     <div class="html">
//       <form id="task23">
//         <label>User name</label>
//         <input type="text" name="user-name" />
//         <label>Email</label>
//         <input type="email" name="email" />
//         <label>Password</label>
//         <input type="password" name="password" />
//         <label>id</label>
//         <input type="number" name="userId" />
//       </form>
//     </div>

// 24 ---------------------------------------------------------------------------------------------------