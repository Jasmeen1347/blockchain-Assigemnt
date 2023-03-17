function thirdLargest(arr, arr_size) {
/* There should be
at least three elements */
  if (arr_size < 3) {
    document.write(" Invalid Input "); return;
    // console.log(" Invalid Input "); return;
  }
  

  let first = arr[0];
  for (let i = 1; i < arr_size; i++) {
    if (arr[i] > first) {
      // arr[i] = first;
      first = arr[i];
    }
  }
  // console.log(first);

  let second = Number.MIN_VALUE;
  for (let i = 0; i < arr_size; i++){
    if (arr[i] > second && arr[i] < first) {
      // arr[i] = second;
      second = arr[i];
    }
  }

  console.log(second);

  
  let third = Number.MIN_VALUE;
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] < second && arr[i] > third) {
      third = arr[i];
    }
  }

  document.write("The third Largest " + "element is ", third);
  // console.log("The third Largest " + "element is ", third);
}

let arr = [12, 13, 1, 10, 34, 16];
let n = arr.length;
thirdLargest(arr, n);