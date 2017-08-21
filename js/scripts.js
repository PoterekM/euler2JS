// var arrayOfSequence = [1, 2, 3, 5];
// var arrayLength = arrayOfSequence.length;
// arrayLength = (arrayLength - 1)
// var arrayNumber = arrayOfSequence[arrayLength];
// console.log(arrayNumber);
// var arraySecondToLast = (arrayLength - 1);
// var lastValue = arrayOfSequence[(arrayLength)];
// var secondToLastValue = arrayOfSequence[(arraySecondToLast)];
// function add(lastValue, secondToLastValue) {
//   return lastValue + secondToLastValue;
// }
// var newValue = add(lastValue, secondToLastValue);
//
//
//
//
//   for (var i = 0; i < 10; i++) {
//     arrayOfSequence.push(newValue);
//   }
//
//
// console.log(arrayOfSequence);

var previous = 0,
  index = 1,
  sum = 0,
  temp;

while (index < 4000000) {
  if (index % 2 === 0)
    sum += index;
    temp = index;
    index = index + previous;
    previous = temp;
}

console.log(sum);
