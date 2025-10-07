// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению.
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object>(obj: T, value: T[keyof T]): keyof T | undefined {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

const user = {
  id: 996,
  name: 'LexLuter',
  age: 66,
};

const key1 = getKeyByValue(user, 996);
const key2 = getKeyByValue(user, 'LexLuter');
const key3 = getKeyByValue(user, 66);

console.log(key1, key2, key3);
