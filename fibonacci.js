function fibs(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      result[i] = i;
    } else {
      result[i] = result[i - 1] + result[i - 2];
    }
  }
  return result;
}

// console.log(fibs(8));

function fibsRec(num) {
  console.log("This was printed recursively");
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }

  const arr = fibsRec(num - 1);
  return [...arr, arr.pop() + arr.pop()];
}

console.log(fibsRec(8));
