// **************************TEST 1**************************
/**
 * What behavior are you expecting? (ex: delay before getting each console.log, order of output etc)
 */
for (let index = 0; index < 3; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1000);
}

// **************************/TEST 1**************************

// **************************TEST 2**************************
/**
 * What behavior are you expecting? (ex: delay before getting each console.log, order of output etc)
 */

let index;
for (index = 0; index < 3; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1000);
}

// **************************/TEST 2**************************

// **************************TEST 3**************************
/**
 * You have an array of number. We want to know if two those numbers, when added, equal the target
 * You cannot use the same number for the sum.
 * Write the function that returns true when the array given
 */

const falseData = [1, 2, 4, 9]; // function  should return false
const trueData = [1, 7, 4, 9]; // function should return true
const target = 8;

// 1st answer below
function hasSumComponents(data, target) {
  for (let index1 = 0; index1 < data.length; index1++) {
    for (let index2 = index1 + 1; index2 < data.length; index2++) {
      const condition = data[index1] + data[index2] === target;
      if (condition) {
        // console.log(data[index1])
        // console.log(data[index2])
        // console.log(data[index1] + data[index2])
        console.log(true);
      } else {
        // console.log(data[index1])
        // console.log(data[index2])
        // console.log(data[index1] + data[index2])
        console.log(false);
      }
    }
  }
}

hasSumComponents(falseData, target);
hasSumComponents(trueData, target);

// 2st answer -> make it work with a single loop (algorithms yay!)

// i don't know, if find this online:

// Javascript program to check if given array
// has 2 elements whose sum is equal
// to the given value
// Function to check if array has 2 elements
// whose sum is equal to the given value
function hasArrayTwoCandidates(A, arr_size, sum) {
  var l, r; /* Sort the elements */
  A.sort(); /* Now look for the two candidates in
    the sorted array*/
  l = 0;
  r = arr_size - 1;
  while (l < r) {
    if (A[l] + A[r] == sum) return 1;
    else if (A[l] + A[r] < sum) l++;
    // A[i] + A[j] > sum
    else r--;
  }
  return 0;
}
/* Driver program to test above function */
var A = [1, 4, 45, 6, 10, -8];
var n = 16;
var arr_size = A.length;
// Function calling
if (hasArrayTwoCandidates(A, arr_size, n))
  document.write("Array has two elements" + " with the given sum");
else document.write("Array doesn't have two" + " elements with the given sum");

// **************************/TEST 3**************************
