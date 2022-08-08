function customSort(arr) {
  let strArr = [];
  let numArr = [];

  arr.forEach((el) => {
    if (typeof el !== "number") {
      strArr.push(el);
    } else if (typeof el === "number") {
      numArr.push(el);
    }
  });

  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length - 1; j++) {
      if (numArr[j] > numArr[j + 1]) {
        let temp = numArr[j];
        numArr[j] = numArr[j + 1];
        numArr[j + 1] = temp;
      }
    }
  }

  return [...numArr, ...strArr];
}

export default customSort;
