function insertionSort(arr) {
  let userInput;

  do {
    userInput = prompt("A finite, integer please: ");
  } while (
    !Number.isInteger(Number(userInput)) &&
    !Number.isFinite(Number(userInput))
  );

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < userInput && userInput < arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = Number(userInput);
        userInput = temp;
      } else if (arr[0] > userInput) {
        let temp = arr[0];
        arr[0] = Number(userInput);
        userInput = temp;
      } else if (arr[arr.length - 1] < userInput) {
        arr[arr.length] = Number(userInput);
      }
    }
  }

  return arr;
}

export default insertionSort;
