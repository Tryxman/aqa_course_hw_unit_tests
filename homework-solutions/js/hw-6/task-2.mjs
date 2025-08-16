/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let resultUnique;
let resultNull;

function hasElementIgnoreCase(a, b) {
  let isFoundElement = false;
  for (let i of b) {
    if (a.toLowerCase() === i.toLowerCase()) {
      isFoundElement = true;
      break;
    }
  }
  return isFoundElement;
}

function diffIgnoreCase(a, b) {
  const result = [];
  for (let i of a) {
    if (!hasElementIgnoreCase(i, b) && !hasElementIgnoreCase(i, result)) {
      result.push(i);
    }
  }
  return result;
}

resultUnique = diffIgnoreCase(myPizzasT1, competitorPizzas);
const checkPizza = diffIgnoreCase(myPizzasT2, competitorPizzas);
if (checkPizza.length === 0) {
  resultNull = null;
}
export { resultNull, resultUnique };
