// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(callback) {
  if (typeof callback !== 'function') {
    throw new Error('Callback should be a function');
  }
  setTimeout(callback, 2000);
}
delayTwoSeconds(() => console.log('called after 2 secs'));
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
const promiseResolve = new Promise((resolve, _) => {
  resolve(1);
});
promiseResolve.then((result) => {
  console.log(result);
});
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
const promiseFailed = new Promise((_, reject) => {
  reject('Promise failed');
});
promiseFailed.catch((result) => {
  console.log(result);
});

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(number) {
  const numberPromise = new Promise((resolve, _) => {
    resolve(number);
  });
  return numberPromise;
}
console.log(promiseNumber(25));
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите//
// в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((values) => {
  console.log(values);
});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log('Fulfilled:', result.value);
    } else {
      console.log('Rejected:', result.reason);
    }
  });
});
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function runWithTryCatch() {
  try {
    const all = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    all.forEach((value) => {
      console.log(`Promise ${value}`);
    });
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }

  try {
    const all = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    all.forEach((value) => {
      console.log(`Promise ${value.value}`);
    });
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }
}

runWithTryCatch();
