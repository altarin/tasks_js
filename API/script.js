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

// 2
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


// // 3
// Создайте функцию makeThree, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity,
//  используя функцию fetch(). Выведите в <p> свойство statusText полученного объекта.
// В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

// function makeThree() {
//     const paragraph = document.getElementById('practicum')
//     fetch('https://www.boredapi.com/api/activity')
//       .then((data) => {
//         paragraph.textContent = data.statusText
//         console.log(data.statusText)
//       })
//       .catch((err) => {
//         paragraph.textContent = 'Ошибка. Запрос не выполнен'
//       });
//   }
//   makeThree()

// 4
// Создайте функцию makeFour, которая выполняет следующие действия:

// - Функция makeFour должна сделать GET-запрос по адресу https://www.boredapi.com/api/activity с помощью функции fetch()
// - Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// - Затем из полученного JSON-объекта нужно извлечь свойство "activity", которое содержит описание активности
// - Вывести полученную активность в формате 'Activity: описание активности' в <p>
// - В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

// function makeFour() {
//     const paragraph = document.getElementById('practicum')
    
//     fetch('https://www.boredapi.com/api/activity')
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => {
//       paragraph.textContent = `Activity: ${data.activity}`
//     })
//     .catch((err) => {
//       paragraph.textContent = 'Ошибка. Запрос не выполнен'
//     });
//   }
//   makeFour()


// 5
// Создайте функцию makeFive, которая выполняет следующие действия:

// Функция makeFive должна сделать GET-запрос по адресу https://www.boredapi.com/api/activity с помощью функции fetch()
// Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// Затем из полученного JSON-объекта нужно извлечь свойство "participants", которое содержит количество участников для активности
// Вывести количество участников для активности в <p>
// - В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

// function makeFive() {
//     const paragraph = document.getElementById('practicum')
    
//     fetch('https://www.boredapi.com/api/activity')
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => {
//       paragraph.textContent = `Activity: ${data.participants}`
//     })
//     .catch((err) => {
//       paragraph.textContent = 'Ошибка. Запрос не выполнен'
//     });
//   }
//   makeFive()

// 6
// Создайте функцию makeSix, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, 
// используя функцию fetch(). Выведите в <p> свойства из полученного объекта, такие как activity, type, price и accessibility.
// - В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

// function makeSix() {
//     const paragraph = document.getElementById('practicum')
   
//     fetch('https://www.boredapi.com/api/activity')

//    .then((data) => {
//      paragraph.textContent = `${data.participants}, ${data.type}, ${data.price}, ${data.accessibility}`
//    })
//    .catch((err) => {
//      paragraph.textContent = 'Ошибка. Запрос не выполнен'
//    });
//  }
//  makeSix()