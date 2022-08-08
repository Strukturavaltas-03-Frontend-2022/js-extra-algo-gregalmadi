function getSectionOfTwoArrays(arr1, arr2) {
  let section = [];
  arr1.forEach((el) => {
    if (arr2.includes(el)) {
      section.push(el);
    }
  });
  return section;
}

export default getSectionOfTwoArrays;
