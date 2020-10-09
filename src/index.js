module.exports = function reverse (n = 0) {
  let arrN = n.toString().split('');
  arrN.reverse();
  return parseFloat(arrN.join(''));
}
