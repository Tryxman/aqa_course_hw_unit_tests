/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowelLetters = 'aeoui';
let vowels = 0;
let consonants = 0;
let lettersToLowerCase = word.toLowerCase();

let vowelsAndConsonantsResult = '';
for (let i = 0; i < lettersToLowerCase.length; i++) {
  if (vowelLetters.includes(lettersToLowerCase[i])) {
    vowels++;
  } else {
    consonants++;
  }
}
console.log((vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${consonants} consonants`));
export { vowelsAndConsonantsResult };
