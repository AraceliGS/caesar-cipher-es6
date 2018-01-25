ECHO est� activado.
# **Producto final 1 - Cifrado César**

## **Objetivo**

El objetivo de este trabajo es crear una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

## **Consideraciones Específicas**

* Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. 
* Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher.
* El usuario no debe poder ingresar un campo vacío o que contenga números.

## **Diagrama de Flujo**

![recursos](assets/img-read/recursos.jpg)

## **Pseudocódigo**

// *Comentario: Creando función cipher*

function cipher (str)

  index1 := [] //*Comentario : [65, 66, 67] || [97, 98, 99]*

  indexAscii := [] //*Comentario : [72, 73, 74] || [104, 105, 106]*

  letters1 := [] //*Comentario : ['H', 'I', 'J'] || ['h', 'i', 'j']*


   if str :=== str.toUpperCase() Entonces 

     for  i := 0; i < str.length; i++ Entonces

      index1.push(str.charCodeAt(i));

      Fin for


     for  j := 0; j < index1.length; j++ Entonces

       ciphering := (index1[j] - 65 + 33) % 26 + 65;

       indexAscii.push(ciphering);

     Fin for


     for k := 0; k < indexAscii.length; k++) Entonces

      alphabetLetters1 := String.fromCharCode(indexAscii[k]);

      letters1.push(alphabetLetters1);
      
      Fin for

    Fin if

    if str :=== str.toLowerCase() Entonces

      for l := 0; l < str.length; l++ Entonces

      index1.push(str.charCodeAt(l));

      }

      Fin for

      for var m := 0; m < index1.length; m++ Entonces

       ciphering2 := (index1[m] - 97 + 33) % 26 + 97;

       indexAscii.push(ciphering2);

      Fin for


      for var n := 0; n < indexAscii.length; n++ Entonces

      var alphabetLetters2 := String.fromCharCode(indexAscii[n]);

      letters1.push(alphabetLetters2);

      Fin for
    
    Fin if


    arrayToString1 := letters1.join('');


    Valor de retorno := arrayToString1;

Fin function cipher

// *Comentario :Creando función decipher*

function decipher (str) 


  index2 := []; //*Comentario: [72, 73, 74] || [104, 105, 106]*


  normalIndex := []; //*Comentario: [ 65, 66, 67 ] || [97, 98, 99]*


  letters2 := []; //*Comentario : ['A', 'B', 'C'] || ['a', 'b' ,'c']*


  if str :=== str.toUpperCase() Entonces


    for var o := 0; o < str.length; o++ Entonces

      index2.push(str.charCodeAt(o));

    Fin for


    for var p := 0; p < index2.length; p++ Entonces

      deciphering = (index2[p] + 65 - 33) % 26 + 65;

      normalIndex.push(deciphering);

    Fin for


    for var q := 0; q < normalIndex.length; q++ Entonces

     alphabetLetters3 := String.fromCharCode(normalIndex[q]);

     letters2.push(alphabetLetters3);

    Fin for

  Fin if


  if str :=== str.toLowerCase() Entonces

    for var r := 0; r < str.length; r++ Entonces

      index2.push(str.charCodeAt(r));

    Fin for


    for var s := 0; s < index2.length; s++ Entonces

      var deciphering2 := (index2[s] - 97 + 33) % 26 + 83;

      normalIndex.push(deciphering2);


    Fin for


    for var t := 0; t < normalIndex.length; t++ Entonces

     alphabetLetters4 := String.fromCharCode(normalIndex[t]);

     letters2.push(alphabetLetters4);

    Fin for

  Fin if

  arrayToString2 := letters2.join('');

  Valor de retorno := arrayToString2;

Fin function decipher


// *Comentario: Preguntando al usuario*

 phrase := prompt('Ingrese una frase');

 if typeof(phrase) :== 'string' && phrase !== '' Entonces

    options := '1. Quieres cifrar esta frase según el código ASCII \n 2.Quieres descifrar esta frase en código ASCII.\n';

    op := parseInt(prompt(options));


   if op :=== 1 Entonces

     console.log(cipher(phrase));

   Fin if

   else Entonces

     console.log(decipher(phrase));

    Fin else

  Fin if