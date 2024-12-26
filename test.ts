function isPalindrome(s: string) {
  let str = s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) {
      console.log(str.charAt(i), s.charAt(j));
      return false;
    }
    ++i;
    --j;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
