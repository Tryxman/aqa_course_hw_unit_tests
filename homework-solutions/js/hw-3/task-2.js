/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

function sumStringsAsDigits(n) {
  const textN = String(n);
  if (n >= 1 && n <= 9) {
    return n + Number(textN + textN) + Number(textN + textN + textN);
  } else {
    console.log('Number is outside the range');
  }
}

console.log(sumNumbersAsDigits(3));
