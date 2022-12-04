function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  let lengthArr = arr.length;
  let result = {};

  for (let i = 0; i < lengthArr; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = sum / lengthArr;
  avg = Number(avg.toFixed(2));

  result.min = min;
  result.max = max;
  result.avg = avg;

  return result;

}

function summElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  } else {
    const sum = arr.reduce((arrSum, currentSum) => arrSum + currentSum, 0);
    return sum;
  }
  
}

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;

  min = Math.min.apply(min, arr);
  max = Math.max.apply(max, arr);

  return max - min;

}

function differenceEvenOddWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement +arr[i];
    }
  }

return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;

}

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const maxResult = func (...arrOfArr[i]);
    if (maxResult > maxWorkerResult) {
      maxWorkerResult = maxResult;
    }
  }

  return maxWorkerResult;

}
