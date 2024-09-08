/*

Example 1:
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).


Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


*/

const mediaSortedArray = (nums1, nums2) => {
    let arr = [...nums1, ...nums2];
    let sortArray = arr.sort((a, b) => {
      return a - b;
    });
    let length = sortArray.length;
    return length % 2 == 0
      ? (sortArray[length / 2] + sortArray[length / 2 - 1]) / 2
      : sortArray[Math.floor(length / 2)];
};

const median = mediaSortedArray([2], []);
console.log(median);
