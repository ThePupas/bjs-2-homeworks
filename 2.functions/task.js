// Задача 1:

const getArrayParams = (...arr) => {
  let array = [...arr];
  let min = Math.min.apply(null, array);
  let max = Math.max.apply(null, array);
  let sum = Number(array.reduce((acc, el) => acc + el / array.length, 0).toFixed(2));
  return array = {
    min: min,
    max: max,
    avg: sum,
  }
};

//Задача 2:

const summElementsWorker = (...arr) => {
  let array = [...arr];
  let sum = 0;
  for (let i of array) {
    sum += i
  }
  return sum
};

const differenceMaxMinWorker = (...arr) => {
  let array = [...arr];
  if (array.length === 0) {
    return 0
  }
  let max = Math.max(...array);
  let min = Math.min(...array);
  return max - min;
};


const differenceEvenOddWorker = (...arr) => {
  let array = [...arr];
  let sumEvenElement = 0;
  let sumNotEvenElement = 0;
  for (let i of array) {
    if (i % 2 === 0) {
      sumEvenElement += i;
    } else {
      sumNotEvenElement += i;
    }
  }
  return sumEvenElement - sumNotEvenElement
};

const averageEvenElementsWorker = (...arr) => { //Правильно ли реализовано условие [] => 0 ?
  let array = [...arr];
  let sumEvenElement = 0;
  let counter = 0;
  if (array.length === 0) {
    return array.length
  }
  for (let i of array) {
    if (i % 2 === 0) {
      sumEvenElement += i;
      counter++;
    }
  }
  return sumEvenElement / counter;
};

//Задача 3:
const makeWork = (arrOfArr, func) => {
  let array = [...arrOfArr];
  let maxWorkerResult = -Infinity;
  let sumFunc = -Infinity;
  for (let i of array) {
    sumFunc = func(...i);
    if (sumFunc > maxWorkerResult) {
      maxWorkerResult = sumFunc
    }
  }
  return maxWorkerResult
};