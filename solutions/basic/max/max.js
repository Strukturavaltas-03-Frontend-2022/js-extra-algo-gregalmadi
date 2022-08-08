function getTheLargestElement(arr) {
  return arr.reduce((acc, cur) => (acc < cur ? cur : acc));
}

export default getTheLargestElement;
