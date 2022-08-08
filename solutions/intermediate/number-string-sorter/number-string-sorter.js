function numberAndStringSorter(arr) {
  let numArr = [];
  let strArr = [];
  let combined = [];

  arr.forEach((el) => {
    if (typeof el === "number") {
      numArr.push(el);
    } else if (typeof el === "string") {
      strArr.push(el);
    }
  });

  numArr.forEach((el, i) => {
    combined.push(el, strArr[i]);
  });

  return combined;
}

export default numberAndStringSorter;
