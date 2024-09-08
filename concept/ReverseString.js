const reverse = (str = "") => {
  return str.split("").reverse().join(""); // we are convert string to array via split and then reverse the array with the help of reverse() then convert into string via join.
};

const reverseString = reverse("abcdefghi");
console.log(reverseString);
