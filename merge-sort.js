function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let left = [];
  let right = [];
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    if (leftIndex === rightIndex) {
      right.push(arr[rightIndex--]);
    } else {
      left.push(arr[leftIndex++]);
      right.push(arr[rightIndex--]);
    }
  }

  left = mergeSort(left);
  right = mergeSort(right);

  const result = [];
  leftIndex = 0;
  rightIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (leftIndex < left.length && rightIndex < right.length) {
      result[i] =
        left[leftIndex] < right[rightIndex]
          ? left[leftIndex++]
          : right[rightIndex++];
    } else if (rightIndex >= right.length) {
      result[i] = left[leftIndex++];
    } else {
      result[i] = right[rightIndex++];
    }
  }

  return result;
}

console.log(mergeSort([105, 79, 100, 110]));
