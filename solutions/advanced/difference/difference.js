function getTheDifferenceBetweenTwoArrays(arr1, arr2) {
  let difference = [];
  arr1.forEach((el) => {
    if (!arr2.includes(el)) {
      difference.push(el);
    } else return;
  });

  return difference;
}

export default getTheDifferenceBetweenTwoArrays;
