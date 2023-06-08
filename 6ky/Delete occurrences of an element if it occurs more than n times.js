function deleteNth(arr, n) {
    const result = [];
    const tracking = {};
  
    for (let index = 0; index < arr.length; index++) {
      if ((tracking.hasOwnProperty(arr[index]) && tracking[arr[index]] <= n-1) || !tracking.hasOwnProperty(arr[index])) {
        if (tracking.hasOwnProperty(arr[index])) {
          tracking[arr[index]] += 1;
        } else {
          tracking[arr[index]] = 1;
        }
        result.push(arr[index]);
      }
    }
  
    return result;
  }
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); //?
