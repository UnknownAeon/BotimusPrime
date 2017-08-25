/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */

/**
 * Gets a random number between 1 and the upper limit.
 * @param num the upper limit for the random number.
 * @returns the pseudo-randomly generated number.
 */
var random = function(num) {
  return Math.floor(Math.random() * num) + 1;
}

module.exports = {
  random : random
}
