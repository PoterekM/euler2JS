var arrayOfSequence = [1, 2, 3, 5];
var arrayLength = arrayOfSequence.length;
arrayLength = (arrayLength - 1);
var arraySecondToLast = (arrayLength - 1);
var lastValue = arrayOfSequence[(arrayLength)];
var secondToLastValue = arrayOfSequence[(arraySecondToLast)];
function add(lastValue, secondToLastValue) {
  return lastValue + secondToLastValue;
}
var newValue = add(lastValue, secondToLastValue);
console.log(newValue);

for (var i = 0; i < 10; i++) {
  arrayOfSequence.push(newValue);
}
console.log(arrayOfSequence);
