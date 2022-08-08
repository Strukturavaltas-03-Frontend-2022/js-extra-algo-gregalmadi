function getCartesianProductBetweenTwoArrays(arr1, arr2) {
  let descartes = [];

  for (let i = 0; i < arr1.length; i++) {
    arr2.forEach((el) => {
      descartes.push(arr1[i] * el);
    });
  }

  return descartes;
}

export default getCartesianProductBetweenTwoArrays;
