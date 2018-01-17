function translatePigLatin(str) {
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

translatePigLatin("consonant");