let sum;
let count = 1;

let number = 0;
let numbers = 1;

while (count <= 20) {
  count += 1;
  number = number + numbers;
  numbers += 1;
  sum = number;
}

console.log(sum);
