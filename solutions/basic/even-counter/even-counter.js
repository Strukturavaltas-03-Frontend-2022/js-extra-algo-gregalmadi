function getCountOfTheEvenElements(arr) {
  return arr.filter((el) => el % 2 === 0).length;
}

export default getCountOfTheEvenElements;
