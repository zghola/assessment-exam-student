/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  let count = {};
  for (let number of arr) {
    if (number in count) {
      count[number] ++;
    } else {
      count[number] = 1;
    }
  }
  
  let max = 0;
  let maxKey = 0;
  for (let num in count) {
    if (count[num] > max) {
      max = count[num];
      maxKey = num;
    }
  }
  
  return maxKey;
};

mode([6, 2, 3, 4, 9, 6, 1, 0, 5]);
// Don't change below:

module.exports = { mode };
