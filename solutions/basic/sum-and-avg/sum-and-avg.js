export function getSumOfTheElements(arr) {
  return arr.reduce((acc, cur) => (acc += cur));
}

export function getAvarageOfTheElements(arr) {
  return getSumOfTheElements(arr) / arr.length;
}
