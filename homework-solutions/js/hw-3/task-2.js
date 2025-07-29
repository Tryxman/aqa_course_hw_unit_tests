/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

function concat(n) {
  let textN = String(n);
  if (n >= 1 && n <= 9) {
    console.log(n + Number(textN + textN) + Number(textN + textN + textN));
  } else {
    console.log('Number is outside the range');
  }
  return n;
}

concat(3);
