/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  let result = [];
  for (const el of arr) {
    result.push(...el);
  }
  return result;
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  if (!sentence.trim()) {
    return '';
  }
  let result = sentence.split(' ').filter(Boolean);
  result[0] = result[0].toLowerCase();
  for (let i = 1; i < result.length; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1).toLowerCase();
  }
  return (result = result.join('_'));
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let first = 0;
  let second = 1;
  let result;

  for (let i = 2; i <= n; i++) {
    result = first + second;
    first = second;
    second = result;
  }
  return result;
}

function fibonacci1(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}
console.log(fibonacci1(8));
console.log(mergeArrays());
export { mergeArrays, fibonacci, devideBy };
