
function fearNotLetter(str) {
  for ( var i = 0; i <str.length; i++){
    var firstLetter = str.charCodeAt(i);
    if (firstLetter !== str.charCodeAt(0) + i){
      return String.fromCharCode(firstLetter - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
