/**
 * @param {number} start
 * @param {number} end
 */
function randomNumberBetween(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

function milliliters() {
  return randomNumberBetween(50, 1000);
}

module.exports = Object.freeze({ randomNumberBetween, milliliters });
