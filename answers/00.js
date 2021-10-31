/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  /* IMPLEMENT ME */
  return arr.length;
};
const num2 = [6, 2, 3, 4, 9, 6, 1, 0, 5];
console.log(count(num2));
/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  /* IMPLEMENT ME */
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
let x = [6, 2, 3, 4, 9, 6, 1, 0, 5];
console.log(sum(x));

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */


const mean = function(arr) {
  /* IMPLEMENT ME */
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  } if (arr.length === ([])) {
    return null;
  } else {
    let avg = total / arr.length;
  
    let roundedAvg = round(avg);
    
    return roundedAvg;
  }
  
 
};

let numbers = [6, 2, 3, 4, 9, 6, 1, 0, 5];

let avg = mean(numbers);

console.log(avg);

// Don't change below:
module.exports = { count, sum, mean };
