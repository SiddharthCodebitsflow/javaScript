const palindrome = (str) => {
  let string = str.split("").reverse().join("");
  return str == string ? true : false;
};

const pailndromeResult = palindrome("aba");
console.log(pailndromeResult);
