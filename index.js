function hasTargetSum(array, target) {
  let i = 0;
  while (i <= array.length) {
    let number_to_check = array.pop();
    for (const number of array) {
      if (number + number_to_check === target) {
        return true;
      }
    }
    array.unshift(number_to_check);
    i++;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. take the last element of the input array (pop)
  2. for loop, iterating through elements, adding and checking the value to target
  3. if true return true
  4. continue until all numbers have been processed (pop element and compare then unshift it, set a counter equal to array length to control number of iterations)
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
