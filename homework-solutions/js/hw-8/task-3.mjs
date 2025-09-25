/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  numbers.sort((a, b) => a - b);
  const maxCount = numbers.length + 1;
  const expectedCount = (maxCount * (maxCount + 1)) / 2;
  const value = numbers.reduce((acc, el) => acc + el, 0);
  return expectedCount - value;
}
let arr = [1, 2, 3, 5, 6, 7];
console.log(findMissingNumber(arr));
export { findMissingNumber };
