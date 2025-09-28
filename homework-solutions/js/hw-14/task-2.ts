// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы.
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив,
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]
type MapCallback<T, U> = (value: T, index: number, array: T[]) => U;

function genericMap<T, U>(array: T[], callback: MapCallback<T, U>): U[] {
  return array.reduce<U[]>((arr, value, i, arr) => {
    acc.push(callback(value, i, arr));
    return acc;
  }, []);
}

const numbersArr = [3, 4, 8, 5];
const customMap = genericMap(numbersArr, (element, index) => element * index);
console.log(customMap);
