function wordInString(string,word) {
  if (string.replace(word,"") != string) {
    return true;
  } else {
    return false;
  }
}