function linearSearch(arr, value) {
  let i = 0;

  while (i < arr.length) {
    if (value === arr[i]) {
      return true;
    }
    i++;
  }
  return false;

  //return arr.includes(value);
}

export default linearSearch;
