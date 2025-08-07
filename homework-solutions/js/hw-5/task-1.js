/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';

let i = 10;
do {
  evenNumbersResult += i;
  i -= 2;
  if (i >= 0) evenNumbersResult += '-';
} while (i >= 0);

console.log(evenNumbersResult); // the first solution

// for (let i = 10; i >= 0; i -= 2) {
//   evenNumbersResult += i + '-';
// }
// evenNumbersResult = evenNumbersResult.slice(0, -1);
// console.log(evenNumbersResult); -- second solution
/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';

for (let i = 1; i <= 5; i++) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += ':)';
  }
  smilePatternResult += line + '\n';
}
smilePatternResult = smilePatternResult.slice(0, -1);

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
for (let i = 0; i < text.length; i++) {
  if (text[i] === ' ') {
    replaceSpacesWithOneResult += '1';
    console.log(replaceSpacesWithOneResult);
  } else {
    replaceSpacesWithOneResult += text[i];
  }
}

console.log(replaceSpacesWithOneResult);

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
