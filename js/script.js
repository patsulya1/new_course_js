"use strict";

//  Java Script 2.0

// -------------------------------------------------------------------------------

// 1 Урок

// -------------------------------------------------------------------------------

// console.log("Hello"); // Служебныи вывод

// Отличие строк от чисел, над ЧИСЛАМИ возможны математические операции
// СТОКИ мы можем только складывать; Слеплевание строк называется КОНКАТЕНАЦИЯ;

// console.log("Vika" + "+" + "Sasha" + "=" + "love"); //КОНКАТЕНАЦИЯ

// _______________________________________________________________________________

// console.info("my"); // 2-и способ вывода


// console.table("Friend") // 3-и способ вывода

// _______________________________________________________________________________


// Alert - команда позволяющая выводить всплывающие окна
// alert('Hello');


// _______________________________________________________________________________

// Вывод на страницу с помощью GET  &  ID 

// document.getElementById('out').innerHTML = 'Hello';


// Вывод на страницу с помощью CLASS, Елементу & ID

// document.querySelector('.header').innerHTML = 'Friend';


// Вывод на страницу с помощью CLASS, Елементу & ID по CSS селектору

// document.querySelector('#one').innerHTML = 'you must';

// _______________________________________________________________________________


//  Обьявили переменную и получили параграф 

// let a = document.getElementById('#one');   обьявление с присвоением

// Манипулируя этои переменнои меняем значение
// let a = document.querySelector('#one');
// a.innerHTML = 9999;

// let c;
// c = document.querySelector('.header');

// c.innerHTML = 555555555555;


// console.log("Vika");
// console.log("Vika" + "+" + "Sasha" + "=" + "love"); //конкатенация
// console.log("Vika");

// document.getElementById("out").innerHTML = "hello vika";
// document.getElementById("out").innerHTML = "<b>hello vika</b>";

// document.querySelector(".my").innerHTML = "You are my love";

// let a = document.getElementById("out");

// a.innerHTML = "I like kiss you";


// Task 11.
// На странице создан div.out-11. Запишите внутрь него строку '123'. 
// Для записи используйте innerHTML. Второй операцией - допишите в div.out-11 строку '456'.
//  Для дозаписи примените +=. Обратите внимание - код уже набран,
//  вам нужно удалить комментарий и изучить принцип работы. 

// document.querySelector('.out-11').innerHTML = '123';
// document.querySelector('.out-11').innerHTML += '345';


// Task 18

// Получите div.out - 18 в переменную out18.
// Выведите эту переменную в консоль.Присвойте out18 значение 5(out18 = 5).
// Выведите переменную в консоль.Изучите вывод.

//     out - 18

//     let out18 = document.querySelector('.out-18');
// console.log(out18);
// console.log(out18 = 5);


// -------------------------------------------------------------------------------

// 2 Урок   Основа ввода данных, работа с input

// -------------------------------------------------------------------------------

//  Получаем значение из input

// let inputIn = document.querySelector(".input-in"); // Получаем input

// let button = document.querySelector("button");     // Получаем кнопку

// let div = document.querySelector(".out");          // (получаем кнопку) выводим input в div

// button.onclick = function () {                    // По нажатию кнопки должна сработать функция 

//     // console.log(inputIn.value);                    // Value - то что введено в input

//     let b = +inputIn.value;                      // Ставим " + " перед input чтобы преобразовать в числа(без плюса автоматически преобразовывает в строку)

//     console.log(b);

//     div.innerHTML = b;                         // Выводим input в div с помощью innerHTML

//     inputIn.value = " ";                      // Стираем введённое значение
// }

// ___________________________________________________________________________________

// let inputIn = document.querySelector(".input-in");
// let button = document.querySelector("button");
// // let div = document.querySelector(".out");

// button.onclick = function () {
//   // console.log(inputIn.value);
//   let b = inputIn.value;
//   console.log(b);
//   inputIn.innerHTML = b;
//   inputIn.value = "go";
// };


// -------------------------------------------------------------------------------

// 3 Урок  ОПЕРАТОР IF, ELSE, SWITCH CASE - ВЫБОР В JAVASCRIPT

// -------------------------------------------------------------------------------

// let a = 19;

//  " >= " - больше либо равно;
//  " <= " - меньше либо равно;
//  " == " - равно;
//  " === " - строгое равенство;
//  " != " - не равно;

// if (a > 9) {
//     console.log("Yes");
// }
// else {
//     console.log('else');
// }

// _________________________________________________________________________________


// const button = document.querySelector('button');
// const input = document.querySelector('.age');

// " () => {} " - стрелочная функция;

// button.onclick = () => {
//     let num = +input.value;
//     if (num >= 16) {                               // Проверяем возраст 2 варианта
//         console.log('Welcome');
//     }
//     else {
//         console.log('Тебе еще рано(');
//     }
// }



// button.onclick = () => {
//     let num = +input.value;
//     if (num >= 16 && num < 60) {                               // Расширяем конструкцию
//         console.log('Welcome');
//     }
//     else if (num >= 60) {
//         console.log('Ты супер стар');
//     }
//     else {
//         console.log('Тебе еще рано(');
//     }
// }

// _________________________________________________________________________________

// switch сравнивает выражение со случаями, перечисленными внутри неё, 
// а затем выполняет соответствующие инструкции.

// button.onclick = () => {
//     let num = +input.value;
// if (num >= 16 && num < 60) {
//     console.log('Welcome');
// } else if (num >= 60) {
//     console.log('Ты супер стар');
// } else {
//     console.log('Тебе еще рано(');
// }
//     switch (num) {
//         case 15: // switch
//             console.log('Еще годик потерпи');
//             break;
//         case 16:
//             console.log('Ты готов');
//             break;
//         default:
//             console.log('ok')
//     }
// }


// _________________________________________________________________________________


// Сложные вычисления

// " && - И " срабатывает если оба условия верны;
// " || - ИЛИ " срабатывает если одно из условии верно; 


// let b = 5;

// console.log(b == 3 || b == 7); 



// -------------------------------------------------------------------------------

// 4 Урок   РАБОТА С ФОРМАМИ: INPUT, RANGE, TEXTAREA, CHECKBOX

// -------------------------------------------------------------------------------

// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);   // Получаем введённыи пароль в консоли
// }


// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);   // Получаем введённыи цвет в консоли
//     // Присваиваем стили
//     document.querySelector('button').style.backgroundColor =
//         document.querySelector('#one').value;
// }

// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value); // При нажатии на кнопку получаем результат бегунка
// }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value); // При передвижении ползунка в консоль получаем результат бегунка 

//     // Получаем результат движения бегунка на экран
//     document.querySelector('span').innerHTML = document.querySelector('#one').value;
// }

document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2'); // По нажатию checkbox и кнопки получаем булевый результат в консоль
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    } else {
        console.log('Ненажат');
    }
}
// document.querySelector('#btn-2').onclick = () => { 
//     let text = document.querySelector('#two');          // Получаем содержимое 'textarea'
//     console.log(text.value);
//     text.value = 'one';                             // После нажатия кнопки получаем в 'textarea' текст 'one'
// }

// document.querySelector('#btn-2').onclick = (event) => {
//     event.preventDefault();
//     let text = document.querySelector('#two');        // Получаем содержимое 'textarea' на основе формы с методом event.preventDefault(); -
//     console.log(text.value);                          // -метод позволяет не перезагружать страницу с формой
//     text.value = 'one';
// }


document.querySelector('#btn-2').onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.two);                   // Получаем данные формы textarea в консоль по елементам id;
    console.log(form.elements.two.value);           // Получаем данные формы textarea в консоль по елементам id и value;
    console.log(form.elements.three.value);        // Получаем данные формы input в консоль по елементам id и value;
}



// -------------------------------------------------------------------------------

// 5 Урок   

// -------------------------------------------------------------------------------







// let e = 3;
// let f = 5;
// console.log(e + f);

// let a = 16;

// if (a > 9) {
//   console.log("Yes");
// } else {
//   console.log("else");
// }

// const button = document.querySelector("button");

// const input = document.querySelector(".age");

// // стрелочная функция
// button.onclick = () => {
//     let num = +input.value;
//     input.value = "";
//     if (num >= 16 && num < 60) {
//         console.log("welcome!!!");
//     } else if (num >= 60) {
//         console.log("You are verry old!!");
//     } else {
//         console.log("Ты не пройдёшь!");
//     }

//     switch (num) {
//         case 15:
//             console.log("Please wait one year!");
//             break;
//         case 16:
//             console.log("Yyyyeeesss, you well done!");
//             break;
//         default:
//             console.log("Ok you great!");
//     }
// };

// document.querySelector('button').onclick = myFunc;


// function myFunc() {
//     console.log(document.querySelector('.password').value);
//     document.querySelector('button').style.backgroundColor =
//     document.querySelector('.password').value 
// }

// document.querySelector('.password').oninput = () => {
//     console.log(document.querySelector('.password').value);
//     document.querySelector('span').innerHTML = document.querySelector('.password').value
// }



// document.querySelector('.but').onclick = () => {
//     console.log(document.querySelector('.i2').value);
//     let myCheckBox = document.querySelector('.i2');
//     console.log(myCheckBox.checked);
//     if (myCheckBox.checked) {
//         console.log('Done');
//     }
//     else {
//         console.log('No click');
//     }
// }


// document.querySelector('.btn-2').onclick = (event) => {
//     event.preventDefault();
//     // let text = document.querySelector('#two');
//     // console.log(text.value);
//     // text.value = "";
//     let form = document.querySelector('form');
//     console.log(form);
//     console.log(form.elements.two.value);
// }


// document.querySelector('.buts').onclick = () => {
//     let form = document.querySelector('form');
//     console.log(form);
//     console.log(form.elements.i.value);
//     console.log(form.elements.b.value);
//     let myCheckBox = document.querySelector('#c');
//     console.log(myCheckBox.checked);
//     if (myCheckBox.checked) {
//         console.log('Done');
//     } else {
//         console.log('No click');
//     }

//     console.log(form.elements.c.value);

// }




// let a = [3, 1, 2, 5, 4, 32, 2, 1];
// // метод перебора массива( нахождение максимального лелмента массива)
// let max = a[0];
// for (let i =0; i < a.length; i++){
//     if (a[i] > max) {
//         max = a[i];
//     }
// }

// console.log(max);


// // Метод с Reduce


// let c = a.reduce((prev, item) => {
//     if (prev < item) {
//         return item;
//     } 
//     else {
//         return prev;
//     }
// });
// console.log(c);


// // индекс максимального елемента

// max = a[0];
// let index = 0;
// for (let i =0; i < a.length; i++){
//     if (a[i] > max) {
//         max = a[i];
//         index = i;
//     }
// }

// console.log(index);



// // индекс максимального елемента reduce

// let d = a.reduce((prev, item, index) => {
//     if (item > prev[1]) {
//         return [index, item];
//     }
//     else {
//         return prev;
//     }
// }, [0, a[0]]);

// console.log(d);



// const data = [[1, 2, 3,], [3, 4, 5,], [5, 6, 7]];
// const flat = data.reduce((prev, item) => {
//     return prev.concat(item);
// })
// console.log(flat);



// const animals = ['worm', 'worm', 'worm'];

// function showArr(arr, elem) {
//     const out = '';
//     for (const i = 0;i<arr)
// }


// Циклы
// for, while, do while

// for ( //условия/-старт; работаем пока; счетчик){

// }

// for (let i = 0; i < 20; i = i + 4) {
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i == 3) break;
// }

// for (let i = 0; i < 5; i++) {
//     if (i == 3) break;
//     console.log(i);
// }


// // применение стиле css с помощью циклов
// let div = document.querySelectorAll('.one');
// console.log(div);
// // div.style.background = 'red';

// for (let i = 0; i < div.length; i++) {
//     console.log(div[i]);
//     div[i].style.background = 'red';
// }


// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(c);
// console.log(b);
// for (let i = 0; i < b.length; i++){
//     b[i].style.border = '3px solid black';
// }

//получаем радио кнопки
// document.querySelector('button').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (let i = 0; i < r.length; i++){
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// }

// // 1 вариант остановки цикла ( c 'break' & "continue")
// for (let i = 0; i < 10; i++){
//     document.querySelector('#out').innerHTML += i + ' ';
// }

// // 2 вариант
// let out = '';
// for (let i = 0; i < 10; i++){
//     // if (i == 6) continue;
//     out += i + ' ';
//     if (i==6) break;
// }
// document.querySelector('#out').innerHTML = out;


//цикл в цикле

// let out = document.querySelector('.out');
// console.log(out);
// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++) {
//         out.innerHTML += '$';
//     }
//     out.innerHTML += '  ';
// }

// let out = document.querySelector('.out');
// console.log(out);
// // for (let i = 0; i < 5; i++) {
// //     for (let k = 0; k <= 10; k++) {
// //         out.innerHTML += k;
// //     }
// //     out.innerHTML += '<br>';
// // }

// for (let i = 1; i <= 10; i++) {
// //     // out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>'; //конкатенация (устаревшая)
//     // out.innerHTML += `3*${i}=${3 * i}<br>`; //интерполяция
//     for (let k = 1; k <= 10; k++) {
//         out.innerHTML += `${i}*${k}=${k * i}<br>`;
//     }
//     out.innerHTML += '<hr>';
// }



// let out = document.querySelector('.out');
// for (let i = 0; i <= 3; i++) {
//     for (let k = 0; k < 3; k++) {
//         out.innerHTML += "$";
//     }
//     out.innerHTML += "_";
// }



// let out = document.querySelector('.out');
// for (let i = 1; i <= 3; i++) {
//     out.innerHTML += `${i} <br>`;
//     for (let k = 0; k < 3; k++) {
//         out.innerHTML += "*_";
//     }
//     out.innerHTML += "<br>";
// }



// let out = document.querySelector('.out');
// for (let i = 0; i <= 3; i++) {
//     for (let k = 0; k < 3; k++) {
//         out.innerHTML += "*_";
//     }
//     out.innerHTML += "<br>";
// }

/////////////////////////////////////////////////////////////////////////


// Функции - это способ организации кода(может делать детвие или возвращать свое значение)

// function one(параметры) {
// console.log('work'); //вывод в консоль
// }
// one(); // вызов функции 


// let f1 = document.querySelector(".f-1"); //получаем кнопку 
// function one() {
// console.log('work'); //вывод в консоль
// }
// one();
// f1.onclick = one; //без круглых скобок






// function two() {
//     console.log('work 222');
//     return 54;
// }

// two();

// console.log(1 + two());

/////////////////////////////

// let a = 8;
// let b = 9;
// let c;

// function multi() {
//     console.log(a * b);     // стары и не популярны метод 
//     c = a * b;
// }
// multi();

// console.log(c);

///////////////////////////////

// let a = 8;
// let b = 9;


// function multi() {
//     console.log(a * b);
//     return a * b;
// }
// let c1 = multi();
// let c2 = multi();

// console.log(c1, c2);

/////////////////////////////////


// function multi2(x, y) {
//     return x * y;
//выполнятся остальное после return не будет
// }
// console.log(multi2(4, 5));   //передача параметров

/////////////////////////////////

//функция без имени анонимная; функция визывается только один раз 


// f1.onclick = function () {
//     console.log('Hello');
// }

//Стрелочная функция дополнительная возможность написания анонимных функци
//один из способов написания анонимных функци

// f1.onclick = () => {
//     console.log('Hello');
// }

////////////////////////////////

// Пример функци обычных и стрелочных

// document.querySelector('.f-2').onclick = function () {
//     console.log('Welcome');
// }


// document.querySelector('.f-1').onclick = () => {
//     console.log('Well done');
// }

/////////////////////////////////


//запись сокращенных функци

// function(a, b) {

// }

// (a, b) => {

// }


//ДЗ-1

// let a1 = document.querySelector(".out-1");
// function t1() {
// console.log('yes');
// }
// t1();
// a1.onclick = t1;


// let f1 = document.querySelector(".f-1"); //получаем кнопку 
// function one() {
// console.log('work'); //вывод в консоль
// }
// one();
// f1.onclick = one; //без круглых скобок

///////////////////////////////////////////

// DOM

// const one = document.querySelector('.one');

// one.style.width = "150px";
// one.style.paddingBottom = '40px';

// // console.log(one.style);

// one.classList.add('two', 'three');

// const toggle = document.querySelector('.toggle');

// toggle.onclick = function () {
//     this.classList.toggle('three');
// }


// атрибуты data

// console.log(one.getAttribute('data'));
// console.log(document.querySelector('link').getAttribute('href'));

// one.setAttribute('data-num', 6);


// Хранение данных с помощью атрибутов v HTML

// let gas = document.querySelectorAll('.gas');
// for (let i = 0; i < gas.length; i++) {
//     gas[i].onclick = function () {
//         let litr = document.querySelector('.litr').value;
//         let amount = this.getAttribute('data');
//         console.log(litr * amount);
//     }
// }

//////////////////////////////////////////////


// Создание обьектов с помощью JS


// let a = document.createElement('div');
// a.innerHTML = 'Hello';
// a.classList.add('ones');
// a.onclick = function () {
//     alert('Персик люблю тебя')
// }

// document.querySelector('.test').appendChild(a);


// console.log(a);

///////////////////////////////////////////////////////////



//  Массивы
// это способ представления данных  в связанном виде

// let a = 'Иван';
// let b = '37';
// let z7 = 'Овен';
// let c = ['Иван', 37, 'Овен'];
// let d = [];

// console.log(c);
// console.log(c[2]);
// console.log(c[1]);



// let j = [1, 2, 3, 4];
// console.log(j);

// let t = j[0];
// j[0] = j[j.length - 1];
// j[j.length - 1] = t;
// console.log(j);
// console.log(j[888]);

// Вывод массивов на страницу

// for (let i = 0; i < j.length; i++){
//     document.querySelector('.out-1').innerHTML += j[i] + ' ';   // 1 способ записи
// }

// let out = '';

// for (let i = 0; i < j.length; i++) { // 2 способ записи
//     out += j[i] + '_';

// }
// document.querySelector('.out-1').innerHTML = out;


// let out = '';

// for (let i = 0; i < j.length; i++) { // выводим только четные цифры
//     if (j[i] % 2 == 0) {
//         out += j[i] + '_';
//     }
// }
// document.querySelector('.out-1').innerHTML = out;



// Наити минимальныи или максимальныи елемент в массиве


// let b = [4, 5, 6, 1, 2, 3, 9, 7];
// let max = b[0];
// for (let i = 0; i < b.length; i++){
//     if (b[i] > max) {
//         max = b[i];
//     }
// }
// console.log('max: ' + max);



// Нахождение суммы


// let b = [4, 5, 6, 1, 2, 3, 9, 7];
// let summ = 0;
// for (let i = 0; i < b.length; i++) {

//     summ = summ + b[i];
// }
// console.log('summ: ' + summ);




///   ДЗ массивы

// let ar1 = ['Hello', 13, true];
// let out = '';
// let b1 = document.querySelector('.b-1');
// b1.onclick = () => {
//     for (let i = 0; i < ar1.length; i++) {
//         out += ar1[i] + ' ';

//     }
//     document.querySelector('.out-1').innerHTML = out;
// }


//  Добавление массивов


// Push добавляет елемты в конец массива

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = ['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(a.length); //проверяем длинну
// console.log(a.push(10));  // Добавляем массив (Можно еще отдельно создать переменную  let c = a.push(10  и вывести в консоль))
// console.log(a.push(11, 12, 13, 14, 15)); // Указываем несколько чисел
// console.log(a);

// // Так же добавляем и строчные

// console.log(b.push('k', 'h', 'o'));


// Pop удаляет елменты в конце массива


//b.pop(); // При вызове удаляется последниелемент в массиве


// Удаление внутри массива  

//delete a[3]; // Удаляет с индексом

//a.splice(3, 4); // Удаляет массив и пересчитывает индексы / a.splice(3(от какого индекса),4(сколько чисел));


//a.splice(3, 4, 'hi'); // a.splice(3(от какого индекса),4(сколько чисел), 'h1'(Добавляет новые елементы));



// Оператор "shift" и "unshift" позволяют добавлять елементы в начало массива
// логика аналогична pop & push; Добавление елементов в начало массива приводит к пересчету индексов


/////////////////////////////

// Двумерные массивы

// let a = [4, 5, 6];

// let b = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// for (let i = 0; i < b.length; i++) {
//     console.log(b[i]);
//     // Перебор массивов с помощью циклов
// }



// for (let i = 0; i < b.length; i++) {
//     let c = b[i];
//     for (let k = 0; k < c.length; k++) {
//         console.log(c[k]);
//     } // Перебор массивов с помощью циклов
// }



// Перебор массивов в обратном порядке

// for (let i = 0; i < b.length; i++) {
//     let c = b[i];
//     for (let k = c.length; k>= 0; k--) {
//         console.log(c[k]);
//     } // Перебор массивов с помощью циклов
// }

///////////////////////////////////////////


// let out = '';

// for (let i = 0; i < b.length; i++) {
//     for (let k = 0; k < b[i].length; k++) {
//         console.log(b[i][k]);
//         out += (b[i][k]) + " ";                    // Вывод двумерных массивов
//     }
//     out += '<br>';
// }
// document.querySelector('.out-1').innerHTML = out;


//////////////////////////////////////////////

// Вывод чисел массива которые больше 4

// for (let i = 0; i < b.length; i++) {
//     for (let k = 0; k < b[i].length; k++) {
//         if (b[i][k] > 4) {
//             out += (b[i][k]);
//         }
//     }
// }

// console.log(out);


// Получая кнопку передвигаем единицу

// let d = [1, 0, 0, 0, 0];
// document.querySelector('.out-1').innerHTML = d;                  // Ставим сразу в область видимости
// let k = 0;
// document.querySelector("button").onclick = () => {                //Получаем кнопку и вешаем на нее анонимную функцию
//     if (k + 1 < 5) {                                            // Ставим условие
//     d[k] = 0; 
//     d[k + 1] = 1;
//         k++;
//     }
//     document.querySelector('.out-1').innerHTML = d;             // Выводим на экран
// }


//  Дз двумерные массивы
// let ar1 = [4, 5, 6, 55, 2, 3, 9, 7, 13, 5, 1];
// let max = ar1[0];
// let b1 = document.querySelector('.b1');
// b1.onclick = () => {
//     for (let i = 0; i < ar1.length; i++) {
//         if (ar1[i] > max) {
//             max = ar1[i];
//         }
//     }
//     console.log(max);
//     document.querySelector('.out-1').innerHTML = max;
// }


//////////////////////////////////////////////////////////////

// const d = new Date(); // Вывод в алерт даты
// alert(d);

/////////////////////////////////////////////////////////////

// Выпадающая кнопка

// document.querySelector('.b1').onclick = myFunction
// function myFunction() {
//     document.getElementById("out-1").classList.toggle("show");
//   }

//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.b1')) {
//       var dropdowns = document.getElementsByClassName("out");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }



//   function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }


/////////////////////////////////////////////////////////////////////////

// Ассоциативныи массив

// Ассоциативный массив – это массив, в котором обращение к значению осуществляется по ключу.

// При этом в качестве ключа используется не порядковый номер (индекс), а некоторая строка, которую мы устанавливаем сами.

// const a = {
//     "a": 5,
//     "b": 'Hello',
//     "z2": "Hi",
//     y43: 1999,
//     "villa de":3004,
// };

// a.yyy = 555;   // добавляем массив
// a.b = 'uuu';  //перезаписываем массив
// delete a.a;     // удаляем массив
// console.log(a);
// console.log(a.z2);   // получаем елемент на прямую
// let k = 'y43';   // Получаем значение по ключу (если название ключа в переменно)
// console.log(a[k]);   // получаем елемент через квюскобки(если название ключа в переменно)

// Если нужно перебрать массив с помощью цикла, обычны ( for ) не пододёт


//document.querySelector('.out').innerHTML = a;  //ассоциативныи не выводиться таким способом


//////////////////////////////////////////////

// Метод FOR IN

// let out2 = '';
// for (let key in a) {
//     out2 += key + ' ';
// }
// document.querySelector('.out2').innerHTML = out2;   // Выводим на экран ключи
// console.log(out2);



// let out2 = '';
// for (let key in a) {
//     out2 += a[key] + ' ';
// }
// document.querySelector('.out2').innerHTML = out2;   // Выводим на экран елементы
// console.log(out2);



// let out2 = '';
// for (let key in a) {
//     out2 += key +" : "+`${a[key]}` + '</br>';
// }
// document.querySelector('.out2').innerHTML = out2;   // Выводим на экран ключи и елементы
// console.log(out2);


// Лампочка

// const light = document.querySelector('#bulb');

// light.addEventListener('click', function (e) {

//     e.target.classList.toggle('bulb-on');

// })

// // API _ Погода 

// fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&lang=ua&appid=3a1bc4ef4c8542beaeae6057f8e55410')
//     .then(function (resp) {
//         return resp.json()
//     })
//     .then(function (data) {
//         console.log(data);
//         document.querySelector('.package-name').textContent = data.name;
//         document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;' + 'C';
//         document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
//         document.querySelector('.features_1').innerHTML = Math.round(data.main.temp_max - 273) + '&deg;' + 'C';
//         document.querySelector('.features_2').innerHTML = Math.round(data.main.temp_min - 283) + ' &deg;' + 'C';
//     })
//     .catch(function () {

//     });
// fetch('https://api.openweathermap.org/data/2.5/weather?id=707898&lang=ua&appid=3a1bc4ef4c8542beaeae6057f8e55410')
//     .then(function (resp) {
//         return resp.json()
//     })
//     .then(function (data) {
//         console.log(data);
//         document.querySelector('.package-name1').textContent = data.name;
//         document.querySelector('.price1').innerHTML = Math.round(data.main.temp - 273) + '&deg;' + 'C';
//         document.querySelector('.disclaimer1').textContent = data.weather[0]['description'];
//         document.querySelector('.features_3').innerHTML = Math.round(data.main.temp_max - 273) + ' &deg;' + 'C';
//         document.querySelector('.features_4').innerHTML = Math.round(data.main.temp_min - 283) + ' &deg;' + 'C';
//     })
//     .catch(function () {

//     });

// -------------------------------------------------------------------------------

// set - это новые объекты которые могут содержать новые значения
// let a = new Set();  Создаем новыи обьект 
// console.log(a);       выводим в console


// let a = new Set();
// a.add(1);
// a.add(3); // Добавляем в set
// a.add("hello");
// a.add(1); // одинаковые значения не добавляет
// a.add("1");

// a.clear();   // очищаем полностью сет
// a.delete("hello")    // позволяет удалять елементы

// console.log(a);
// console.log(a.size); // Свотво size позволяет увидеть количество элементов, вместо (length);

// console.log(a.has(2)); // Проверяем есть ли такои елемент (ответ true или false)

// Для перебора такого вида объектов используется другои цикл

// for (let item of a) {
//     console.log(item); // Цикл для перебора set
// }

// ----------------------------------------------------------

// Перебираем массив с помощью SET

// let arr = [1, 1, 2, 2, 23, 4, 5, 6, 7, 8, 9, 0, "jazz"];

// let b = new Set(arr);
// console.log(b);

// ----------------------------------------------------------

// Преобразовываем набор в массив 

// let bArr = Array.from(b);
// console.log(bArr);

// ------------------------------------------------------------------------------------