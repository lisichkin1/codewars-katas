function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length );
  };
  sortByLength(["", "Moderately", "Brains", "Pizza"])