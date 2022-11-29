function getFalsyValuesCount(arr) {
  return arr.length - arr.filter((el) => el).length;
}

console.log(getFalsyValuesCount([null, undefined, false, 0, '', 3]));
