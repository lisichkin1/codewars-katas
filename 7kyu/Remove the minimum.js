function removeSmallest(numbers) {
    let clone = numbers.slice(0);
    clone.splice(clone.indexOf(Math.min.apply(null, clone)), 1);
    return clone;
  }
  removeSmallest([ 340, 274, 101, 261, 155])