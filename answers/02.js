/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */



const median = function(arr) {
  /* IMPLEMENT ME */
  
  // [2, 3, 4, 5] 4 / 2 = 2

  arr.sort();
  
  if (arr.length % 2 === 0) {
    let i = arr.length / 2;
    let med = (arr[i - 1] + arr[i]) / 2;
    return round(med);
  } else {
    // [1, 2, 3, 4, 5] // 3 / 2 = 1.5 = 1
    return arr[Math.floor(arr.length / 2)];
    
  }
  
};
console.log(median([0, 1, 2, 3, 4, 5, 6, 6, 9]));


// Don't change below:
// [1, 2, 3, 4]
module.exports = { median };
