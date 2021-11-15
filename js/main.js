const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (a, b, array) {
  return array.indexOf(a) == b;
})

console.log(result)