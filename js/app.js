// Creando función cipher

function cipher(str) {
  var letters = []; // ['H', 'I', 'J'] || ['h', 'i', 'j']
  var lettersArray = str.split('');
  for (var i = 0; i < lettersArray.length; i++) {
    if (lettersArray[i] === lettersArray[i].toUpperCase()) {
      var letterAscii = str.charCodeAt(i);
      var ciphering = (letterAscii - 65 + 33) % 26 + 65;
      var alphabetLetters1 = String.fromCharCode(ciphering);
      letters.push(alphabetLetters1);
    }
    if (lettersArray[i] === lettersArray[i].toLowerCase()) {
      var letterAscii2 = str.charCodeAt(i);
      var ciphering2 = (letterAscii2 - 97 + 33) % 26 + 97;
      var alphabetLetters2 = String.fromCharCode(ciphering2);
      letters.push(alphabetLetters2);
    }
  }
  var arrayToString1 = letters.join('');
  return arrayToString1;
}

// Creando función decipher

function decipher(str) {
  var letters2 = []; // ['A', 'B', 'C'] || ['a', 'b' ,'c']
  var lettersArray2 = str.split('');
  for (var i = 0; i < lettersArray2.length; i++) {
    if (lettersArray2[i] === lettersArray2[i].toUpperCase()) {
      var letterAscii3 = str.charCodeAt(i);
      var deciphering = (letterAscii3 + 65 - 33) % 26 + 65;
      var alphabetLetters3 = String.fromCharCode(deciphering);
      letters2.push(alphabetLetters3);
    }
    if (lettersArray2[i] === lettersArray2[i].toLowerCase()) {
      var letterAscii4 = str.charCodeAt(i);
      var deciphering2 = (letterAscii4 - 97 + 33) % 26 + 83;
      var alphabetLetters4 = String.fromCharCode(deciphering2);
      letters2.push(alphabetLetters4);
    }
   }
   var arrayToString2 = letters2.join('');
   return arrayToString2; 
  }

// Preguntando al usuario

var phrase = prompt('Ingrese una frase');

if (typeof(phrase) === 'string' && phrase !== '') {
  var options = '1. Quieres cifrar esta frase según el código ASCII \n 2.Quieres descifrar esta frase en código ASCII.\n';
  var op = parseInt(prompt(options));

  if (op === 1) {
    console.log(cipher(phrase));
  } else {
    console.log(decipher(phrase));
  }
}
