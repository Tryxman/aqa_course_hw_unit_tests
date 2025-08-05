/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
  */
// First solution
let salary = 1000;
let grade = String;
grade = salary >= 1000 ? 'middle' : 'junior';

console.log(grade);

// Second solution
let salary2 = 999;
let grade2 = String;

if (salary2 >= 1000) {
  grade2 = 'middle';
} else {
  grade2 = 'junior';
}

console.log(grade2);
