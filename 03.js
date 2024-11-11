/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/
// ((1 / 2) * (number + 1))**2;
// your code
let sum;

let count = 1;

let number = 1;
let numbers = 0;

while (count <= 20) {
  count += 1;
  // number = number + numbers;
  // numbers += 2;
  number = ((number + 1) / 2) ** 2;
  sum = number;
}

console.log(sum);
