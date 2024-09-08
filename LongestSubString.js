// Failed Solutions
/*

const longestSubString = (str) => {
  let string = str.split("");
  let set = new Set();
  string.forEach((element) => {
    if (set.has(element)) {
      set.delete(element);
    }
    set.add(element);
  });
  return set;
};
const count = longestSubString("pwwkew");

*/

const longestSubString = (str) => {
  let maxlenght = 0;
  let breakIndex = 0;
  let string = str.split("");
  string.forEach((value, index) => {
    for (let i = index + 1; i < str.length; i++) {
      if (string[index] === string[i]) {
        breakIndex = i;
        break;
      }
    }
    maxlenght = Math.max(maxlenght, breakIndex - index);
  });
  return maxlenght;
};

const count = longestSubString("abcabcbb");
console.log(count);
