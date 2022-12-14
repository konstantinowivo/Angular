// Temario

// * Levantar y apagar un servidor
// * Abrir app en VSC. Estructura.
// * Modoficicacion de index.html de la primera app



// Levantar el servidor

// 1 - Vamos a la carpeta destino que creamos anteriormente para
// nuestra primer app
// 2 - copiamos la url de nuestra carpeta en ingresamos en nuestra consola
// de comando (cmd) ingresamos "cd" y pegamos la dirección de nuestra carpeta y enter.
// 3 - Una vez que estamos en nuestra carpeta ingresamos "ng serve -o" luego enter.
// 4 - Luego nos abre el navegador con la app.
// 5 - En caso de que no abra automáticamente, vamos a ingresar nuestro ip manualmente.


// Como detenemos el servidor?

// En caso de que el cursor de texto de nuestra consola esté parapadeando, ingresamos
// CTRL + C y luego S
// Si está detenido, no nos va a refrescar nuestra app


// Como es la estructura de nuestra app de Angular?

// Vamos a tener 3 directorios

// * e2e
// * node_modules
// * src : Dentro de src vamos a poder encontrar nuestro HTML, una vez que lo abramos, vamos a poder observar
// que dentro del mismo sólamente vamos a tener un contenedor con la propiedad "app-root"
// * Otros archivos

// Excepto la carpeta "SRC", todas las demás carpetas y los demás archivos
// son solamente necesarios cuando realicemos desarrollo


// Como podemos a volver a levantar nuestro servidor de una manera más sencilla?

// En caso de que querramos levantar nuevamente nuestra app, podemos hacerlo a través de la consola
// (en caso de que siga abierta) ó bien VSC tiene la ventaja de tener una consola incorporada, con la ventaja
// que nos va a abrir la consola de la carpeta en la cual nos encontremos.
// Podemos acceder a ella a través de "terminal" --> "new terminal" y luego introducimos el comando que aprendimos
// anteriormente "ng serve -o".
// En caso de que nos arroje "error", es probable que sea porque windows está protegido por defecto para que no se puedan
// ejecutar scripts mediante una ventana de shell. En ese caso vamos a tener que desabilitar esa seguridad por defecto
// decirle a windows que permite abrir un script mediante shell.
// Vamos a nuestro buscador de Windows e ingresamos "PowerShell" le damos click derecho y "ejecutar como adm." a continuación
// le damos sí y una vez dentro ingresamos el comando "Set-executionpolicy Unrestricted" y luego enter, le damos sí y luego
// volvemos a probar, en caso de que vuelva a suceder reiniciamos VSC.



// Cómo podemos modificar la pantalla de bienvenida que figura en nuestra app?
// En nuestro directorio de VSC, dentro de la carpeta "src", vamos a tener una sub carpeta llamada "app". (por eso app-root)
// Dentro de la misma nos vamos a encontrar con:

// * Una carpeta de estilos (app.components.css)

// * Una archivo html (app.components.html)

// * 3 archivos con extención .ts : son archivos con cómando/códigos "typescript"
// app.components.spect.ts
// app.component.ts
// app.module.ts

// Cómo dijimos anteriormente nuestra app Angular, se crea de "componentes", por lo que si entramos a nuestro "app.components.html"
// vamos a poder observar muuuucho código, de estro se trataba el contenedor referenciado.


// Cómo hacemos para buscar algo en nuestro código?
// En nuestro VSC, arriba a la derecha vamos a la opción "edit" a continuación ingresamos en "find"
// Una vez allí ingresamos el texto deseado y le damos enter.

