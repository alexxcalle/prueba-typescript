# prueba-typescript

## Consola de Juegos

## Introducción

Es un juego desarrollado para la plataforma de consolas. El objetivo de este proyecto es crear una experiencia de juego atractiva y divertida.

## Características

- La app traba de seguir un patron llamdo "Command", el cual trata de aislar cada objeto y funcionalidad del codigo para luego importarlo en archivos especificos. De esta manera aseguramos que el codigo sea escalable.
- La app cuenta con un sistema intuitivo de imputs.

## Proceso de maquetacion

Se trato de aislar todo el codigo para que no sean muy dependientes uno del otro y de esta manera asegurar su escalabilidad. La estructura que se eligio agrupa todas nuestras clases/objetos y las separa de los servios para luego importar las funciones principales y ejecutarlas.

- Primero se encuentra la carpeta de navegacion,  donde se encuentra toda la estructura que se usara en los imputs asi como su logica.
- Luego tenemos a los objects, donde tenemos a las clases/objetos que estaremos usando durante la ejecucion del script.
- Por ultimo tenemos la interfaz de usuario, la cual se encarga de una presentacion del juego al usuario y dar comienzo a los imputs.

## Ejecucion

Instala las dependencias necesarias ejecutando npm install.
Ejecuta el juego con node index.js.
