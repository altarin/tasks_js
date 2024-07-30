// 1
// - Создайте функцию makeOne, которая выполняет GET-запрос по адресу https://catfact.ninja/fact, используя функцию fetch().
// - Затем из полученного объекта нужно извлечь свойство "status"
// - Результат должен быть выведен в элемент <p> с id "practicum" в DOM-дерево.

// Пожалуйста, обратите внимание, при написании функции для запроса API нужно добавлять обработку ошибок. Используйте метод catch после метода then, чтобы отлавливать и обрабатывать возможные ошибки, которые могут возникнуть в процессе выполнения запроса. Это поможет предотвратить неожиданные проблемы и обеспечит более надёжную работу вашего кода.

// <section class='html'>
//   <p id="practicum"></p>
// </section>

// const paragraph = document.getElementById('practicum');
// function makeOne() {
//   fetch ('<https://catfact.ninja/fact>')

//   //Если есть ответ от сервера, выведи его свойство status в <p>
//   .then((res) => {
//     paragraph.textContent = res.status;
//   })
//   .catch((err) => {
//    paragraph.textContent = "Ошибка. Запрос не выполнен";
//   });

// }

// makeOne()

// 2/
// Создайте функцию makeTwo, которая выполняет следующие действия:

// - Функция makeTwo должна сделать GET-запрос по адресу https://emojihub.yurace.pro/api/random/group/face-positive с помощью функции fetch()
// - Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// - Затем из полученного JSON-объекта нужно извлечь свойство "name"
// - Полученное значение вставьте в элемент с id "practicum" в DOM-дерево
// - В случае ошибки выведите сообщение 'Произошла ошибка'

// Помни, что выполнение асинхронного кода занимает какое-то время.

// <section class='html'>
//   <p id="practicum"></p>
// </section>


// const paragraph = document.getElementById('practicum');
// function makeTwo() {
// 	fetch ('https://emojihub.yurace.pro/api/random/group/face-positive')
  
// .then((res) => {
//   paragraph.textContent = res.response.json('name')
// })
// .catch((err) => {
//   paragraph.textContent = "Произошла ошибка"
//  })
// }
// makeTwo()