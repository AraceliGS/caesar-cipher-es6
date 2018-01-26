window.addEventListener('load', () => {
  // Variables globales
  var button = document.getElementById('button');
  var divSection = document.getElementById('big-word-container');
  var div = document.createElement('div');
  div.classList.add('word-container');
  // Creando función cipher
  const cipher = (str, array) => {
    // Variables locales
    var letters = []; // ['H', 'I', 'J', 'h', 'i', 'j'] 
    let lettersArray = array;
    // Loop  
    for (let i = 0; i < lettersArray.length; i++) {
      if (lettersArray[i] === lettersArray[i].toUpperCase()) {
        // Variables declaradas en este bloque
        let letterAscii = str.charCodeAt(i);
        let ciphering = (letterAscii - 65 + 33) % 26 + 65;
        let alphabetLetters1 = String.fromCharCode(ciphering);
        letters.push(alphabetLetters1);
      }
      if (lettersArray[i] === lettersArray[i].toLowerCase()) {
        // Variables declaradas en este bloque
        let letterAscii2 = str.charCodeAt(i);
        let ciphering2 = (letterAscii2 - 97 + 33) % 26 + 97;
        let alphabetLetters2 = String.fromCharCode(ciphering2);
        letters.push(alphabetLetters2);
      }
    }
    let arrayToString1 = letters.join(''); // Variable local
    div.textContent = arrayToString1;
    divSection.appendChild(div);
    return div;
  };

  // Creando función decipher
  const decipher = (str, array) => {
    // Variables locales
    var letters2 = []; // ['A', 'B', 'C', 'a', 'b' ,'c'] 
    let lettersArray2 = array;
    // Loop  
    for (let i = 0; i < lettersArray2.length; i++) {
      if (lettersArray2[i] === lettersArray2[i].toUpperCase()) {
        // Variables declaradas en este bloque
        let letterAscii3 = str.charCodeAt(i);
        let deciphering = (letterAscii3 + 65 - 33) % 26 + 65;
        let alphabetLetters3 = String.fromCharCode(deciphering);
        letters2.push(alphabetLetters3);
      }
      if (lettersArray2[i] === lettersArray2[i].toLowerCase()) {
        // Variables declaradas en este bloque
        let letterAscii4 = str.charCodeAt(i);
        const PATTERNLETTERS = /[^h-s]/g; // Constante
        if (lettersArray2[i].match(PATTERNLETTERS)) {
          var deciphering2 = (letterAscii4 - 97 + 33) % 26 + 109;
        } else {
          var deciphering2 = (letterAscii4 - 97 + 33) % 26 + 83;
        }
        let alphabetLetters4 = String.fromCharCode(deciphering2);
        letters2.push(alphabetLetters4);
      }
    }
    let arrayToString2 = letters2.join(''); // Variable local
    div.textContent = arrayToString2;
    divSection.appendChild(div);
    return div; 
  };

  // Preguntando al usuario

  button.addEventListener('click', () => {
    // Variables locales
    var word = document.getElementById('inputText').value.trim();
    const PATTERNSTRING = /[^0-9]/g; // Constante
    var result = word.match(PATTERNSTRING);
    var string = result.join('');
    console.log(result);
    // Preguntando al usuario
    if (result) {
      // Variables declaradas en este bloque
      let options = '1. Quieres cifrar esta frase según el código ASCII \n 2.Quieres descifrar esta frase en código ASCII.\n';
      let op = parseInt(prompt(options));
      if (op === 1) {
        cipher(string, result);
      } else {
        decipher(string, result);
      }
    }
  });
});

