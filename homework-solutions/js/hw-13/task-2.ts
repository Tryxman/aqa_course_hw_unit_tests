// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
  if (password.length < 8 || password.trim().length === 0) {
    return false;
  }

  const chars = password.split('');

  const isPassUpperCase = chars.some((ch) => ch >= 'A' && ch <= 'Z');
  const isPassLowerCase = chars.some((ch) => ch >= 'a' && ch <= 'z');
  const isPassHasDigit = chars.some((ch) => ch >= '0' && ch <= '9');

  return isPassUpperCase && isPassLowerCase && isPassHasDigit;
}
console.log(validatePassword('Abc12345'));
console.log(validatePassword('Tryxman@12'));
