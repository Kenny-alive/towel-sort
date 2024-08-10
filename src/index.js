// Your task is to implement the so-called 'towel sort' algorithm.

// `towelSort` function should expect [matrix](https://en.wikipedia.org/wiki/Array_data_structure#Multidimensional_arrays) of any shape for example:

// ```js
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ],
// ]
// ```

// Following matrix should be 'sorted' to:
// ```
//  [1, 2, 3, 6, 5, 4, 7, 8, 9 ]
// ```




module.exports = function towelSort(matrix) {

  if (matrix === undefined || matrix.length == 0) {
    return [];
  }
  matrix = matrix.map((item, index) => {
    if (index % 2 == 0) { return item }
    return item.reverse()
  });
  console.log("🚀 ~ towelSort ~ matrix:", matrix)
  return matrix = JSON.stringify(matrix).replace(/(\[|\])/g, '').split(',').map(item => Number(item));
}
