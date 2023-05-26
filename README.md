# logica-programacion-1
JavaScript program / 3 numbers  higher middle and lower 

¡Aplica tus conocimientos en programación para resolver el siguiente problema!

Instrucciones:

Crear un programa en Javascript usando HTML que realice lo siguiente:  
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.



A  B  C


A > B y A > C     [ A ]       y    B > C    (  A   B   C )    ( 1  2  3)

A > B y A > C     [ A ]       y    C > B    (  A   C   B )    ( 1  3  2)



B > A y B > C     [ B ]       y    A > C    (  B   A   C )    (2  1  3) 

B > A y B > C     [ B ]       y    C > A    (  B   C   A )    (2  3  1)


C > A y C > B     [ C ]       y    A > B    (  C   A   B )    (3  1  2)

C > A y C > B     [ C ]       y    B > A    (  C   B   A )    (3  2  1)

//////////////////

A = B = C   A = B   B !== C    A = C   B!== C   

1    1   1   /  1  1  2  /  1  2  1  /   2   1  1  /   
