const reverseString = function (string) {
  let reverseString = "";
  for (i = 0; i < string.length; i++) {
    reverseString += string[string.length - 1 - i];
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
