
var previous = 0,
  current = 1,
  sum = 0,
  temp;

while (index < 4e6) {
  if (index % 2 === 0)
    sum += current;
    temp = current;
    current = current + previous;
    previous = temp;
}

console.log(sum);
