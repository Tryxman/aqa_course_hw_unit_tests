/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i].toLowerCase() == word[word.length - 1 - i].toLowerCase()) {
    } else {
      return false;
    }
  }
  return true;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  let wordArr = [];
  if (typeof sentence === 'string' && sentence !== '') {
    wordArr = sentence.split(' ');
  } else {
    return [];
  }

  const wordLength = [];
  const longestWords = [];

  for (const word of wordArr) {
    wordLength.push(word.length);
  }
  for (const word of wordArr) {
    if (word.length === Math.max(...wordLength)) {
      longestWords.push(word);
    }
  }
  return longestWords;
}

export { isPalindrom, findLongestWords };
