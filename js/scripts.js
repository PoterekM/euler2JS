  var arrayOfSequence = [1, 2, 3, 8];
  var arrayLength = arrayOfSequence.length;
  arrayLength = (arrayLength - 1);
  var arraySecondToLast = (arrayLength - 1);
  var lastValue = arrayOfSequence[(arrayLength)];
  console.log(typeof(lastValue));
  var secondToLastValue = arrayOfSequence[(arraySecondToLast)];
  console.log(typeof(secondToLastValue));
  function add(lastValue, secondToLastValue) {
    return lastValue + secondToLastValue;
  }
  console.log(typeof(secondToLastValue));
  var total = add(lastValue, secondToLastValue);
  console.log(total);
  arrayOfSequence.push(total);
  console.log(arrayOfSequence);
