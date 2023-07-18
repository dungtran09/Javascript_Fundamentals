const palindrome = (str, i) => {
  if (i >= str.length || str.length == 0 || str.length == 1) {
    return true;
  }
  if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
    return false;
  }
  return palindrome(str, ++i);
};
const str = "heleh";

console.log(palindrome(str, 0));
