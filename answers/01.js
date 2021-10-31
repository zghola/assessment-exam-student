/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  /* IMPLEMENT ME */
  let min = arr[0];
  
  for (let currentItem of arr) {
    if (currentItem < min) {
      min = currentItem;
    }
  }
  
  return min;
  
};

let num = [6, 2, 3, 4, 9, 6, 1, 0, 5];

let myMin = min(num);


console.log(myMin);

/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  /* IMPLEMENT ME */
  let max = arr[0];
  
  for (let currentItem of arr) {
    if (currentItem > max) {
      max = currentItem;
    }
  }
  
  return max;
  
};

let numbers = [6, 2, 3, 4, 9, 6, 1, 0, 5];

let myMax = max(numbers);


console.log(myMax);

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  /* IMPLEMENT ME */
  return max(arr) - min(arr);
};

let number = [6, 2, 3, 4, 9, 6, 1, 0, 5];
console.log(range(number));

// Don't change below:

module.exports = { min, max, range };
