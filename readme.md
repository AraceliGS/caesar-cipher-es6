# **Producto final 1 - Cifrado César**

----------------------------------------------------------------------------------------

[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/for-you.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/validated-html5.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-git.svg)](http://forthebadge.com)

![Cifrado César](assets/images/caesar.png)

## **Objetivo**

El objetivo de este trabajo es crear una web donde el usuario escriba en un área de texto una frase en mayúscula o minúscula y que la devuelva encriptada según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

![Proyecto Cifrado César](assets/images/imagen1.JPG)

## **Herramientas Tecnológicas Aplicadas**

* HTML5

* Javascript(estándar ECMAScript 6)

* Librería de Javascript jQuery

* CSS3

* Bootstrap

* Código ASCII

## **Restricciones**

* Esta aplicación acepta letras, es decir no se puede escribir:

  * números.

  * Signos de puntuación, interrogación o exclamación.

* Asimismo no introduzca palabras con tilde, ya que el algoritmo de Luhn empleado solo puedo cifrar y descifrar, gracias al código ASCII, palabras compuestas pòr las 27 letras del abecedario(no incluye ch, ñ, etc.).

![Código ASCII para las letras del abecedario](assets/images/codigoascii.JPG)

* Las vocales con tilde tienen un diferente código ASCII(ignorar el ```alt +```).

![Código ASCII para las vocales tildadas](assets/images/codigoascii2.JPG)

* No hay restricciones al introducir una palabra compuesta por letras mayúsculas y minúsculas.

## **Flujo de la Aplicación**

* El usuario escribe una frase en el formulario.

![Paso 1](assets/images/imagen2.JPG)

* Hace click al botón ```Click Me``` y le aparece una alerta con dos opciones: una para cifrar la frase(```opción 1```) y otra para descifrarla(```opción 2```).

![Paso 1](assets/images/imagen3.JPG)

* Si escoge la primera opción, entonces le aparece un área de texto con la frase cifrada(```Hola ---> Ovsh```).

![Paso 1](assets/images/imagen4.JPG)

* Si escoge la segunda opción, le aparece un un área de texto con la frase descifrada(```Hola ---> Ahet```).

![Paso 1](assets/images/imagen5.JPG)

* El área de texto donde el usuario introdujo la frase se limpia para que pueda repetir el proceso cuantas veces quiera.
