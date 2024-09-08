const LargestNumberArray = (arr) => {
  let set = new Set([arr[0]]);
  arr.forEach((value) => {
    let firstValue = set.values().next().value;
    if (firstValue < value) {
      set.delete(firstValue);
      set.add(value);
    }
  });
  return set.values().next().value;
};

console.log(LargestNumberArray([1, 10, 3, 4, 5]));

// or

const LargestNumberArraySecond = (arr) => {
  return Math.max(...arr);
};

console.log(LargestNumberArraySecond([1, 2, 3, 4, 5, 77, 6]));
