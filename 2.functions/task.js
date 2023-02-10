function getArrayParams(...arr) {
  if (!arr.length) {
    return 0;
  }

  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let sum = 0;
  
  for (const elem of arr) {
    sum += elem;    
  }
  
  /* Второй способ решения.
  let min = arr[0];
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    max = (max > arr[i]) ? max : arr[i];
    min = (min < arr[i]) ? min : arr[i]; 
  }
  */ 

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];
  min = Math.min.apply(null, arr);
  max = Math.max.apply(null, arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (i = 0; i < arr.length; i ++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (i = 0; i < arr.length; i ++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  //let arrAllInOne = [...arrOfArr];
  let maxWorkerResult = arrOfArr[0][0]; // -Infinity

  for (let i = 0; i < arrOfArr.length; i++) {
    const maxFunc = func(...arrOfArr[i]);
    maxWorkerResult = (maxWorkerResult > maxFunc) ? maxWorkerResult : maxFunc;
  }
  return maxWorkerResult;
}
