function getUnionOfTwoArrays(arr1, arr2) {
  let union = [];

  arr1.forEach((el, i) => {
    if (!union.includes(el)) {
      union.push(el);
    }
    if (!union.includes(arr2[i])) {
      union.push(arr2[i]);
    }
  });

  return union;
}

export default getUnionOfTwoArrays;
