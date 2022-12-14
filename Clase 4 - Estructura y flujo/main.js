// Temario de la clase

// Estructura y flujo de ejecución de la app

// SPA (Single Page Aplication) cómo funcionan? != a las apps comunes
// Cliente ---> Petición inicial ---> Servidor
// Servidor ---> Respuesta(html) ---> Cliente
// Cada operación que generemos una petición en nuestra página, el servidor nos devuelve un html
// Lo que vamos a observar, es que nunca vamos a tener que recargar nuestro sitio de manera completa
// sino, que son partes de html que nuestro servidor nos va enviando conforme lo solicitamos x partes
// Esto lo podemos observar por ejemplo en Google Maps
// Las peticiones son a través de AJAX y las devoluciones son mediante JSON
// Cliente ---> AJAX ---> Servidor
// Servidor ---> JSON ---> Cliente


// Flujo de aplicación

// 1) Cuando cargamos una aplicación Angular, lo que esta va a hacer es buscar una función
// principal llamada Main(punto de incio) dentro de ella se encuentra la definición del MODULO RAÍZ a cargar.

// 2) Dónde se encuentra este MÓDULO RAÍZ?, dentro de la carpeta "app.module.ts" dentro de este se encuentra
// la definición del componente principal a cargar.

// 3) Por defecto cuando descargamos nuestro angular este MÓDULO RAÍZ se llama "AppComponent".
// Dentro de este existen definiciones de clases y un Decorador --> es código js que especifica el comportamiento
// de la clase que acompaña.

// 4) Nuestro Decorador se compone de 
// * Selector
// * Plantilla
// * Estilo CSS (style)

// Resumiendo
// main.ts ---> app.module.ts ---> app.component.ts ---> (selector, template, URL)