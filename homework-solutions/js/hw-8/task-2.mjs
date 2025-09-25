/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];
const vowels = ['a', 'e', 'o', 'u', 'i'];

function countVowels(word) {
  return word.split('').filter((char) => vowels.includes(char)).length;
}

function sortedByVowels(wordsArr) {
  return wordsArr.toSorted((a, b) => countVowels(a) - countVowels(b));
}

console.log(sortedByVowels(words));
export { sortedByVowels };
