# My Dashboard

### Inicio del proyecto - Método redirect()

#### Sintaxis

redirect('/dashboard/counter');

se utiliza para redirigir al usuario a una URL específica dentro de tu aplicación.
El redirect() retorna never por eso borramos el return en nuestro componente page.

### Estructura del dashboard

Empleamos componentes de Tailwind para el dashboard.
https://tailwindcss.com/

https://www.creative-tim.com/twcomponents/component/dashboard-navigation

### Sidebar y contenido principal

Para poder utilizar el sidebar y tener un contenido principal tenemos:

1. Al div que contiene el menu dejarlo unicamente flex en sus clases.
2. Al div que contiene menu quitarle la clase fixed para que no este fijo.
3. Por ultimo tenemos que crear un div que contenga el children agregando estilos propios de tw .

Por otra parte, hemos creado el menu como un component para poder utilizarlo en layout y de esta forma tener un código mas limpio.

Le dimos estilo al Sidebar y por ultimo dejamos preparado la barra de navegación para hacerla dinámica.

NOTA: no nos olvidemos de crear un archivo de botella para las importaciones, esto con el fin de tener todo mas ordenado.

### Next Image

es un componente optimizado que se usa en aplicaciones Next.js para manejar imágenes de manera eficiente. Este componente ofrece funcionalidades avanzadas para cargar y renderizar imágenes

Por otra parte por el tipo de imagen que estamos utilizando tenemos que configurar el next.config.msj para que acepte el tipo de url de nuestra imagen.

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
```

### Iconos y ruta activa

Utilización de librería para los iconos: https://react-icons.github.io/react-icons/

Comando de instalación: npm install react-icons --save

### Counter - Manejo de estado

Use Client : forma en que puedes indicar explícitamente que un componente se renderizará en el cliente (en el navegador) y no en el servidor.

### Pensemos en Hojas y pequeños componentes

En este punto nuestro contador esta funcionando en el counter page sin embargo al ser un 'use client' y queremos ponerle el SEO friendly nos surge un error, ya que tenemos que exportar metadata nos dice que al ser un use cliente es incompatible, por ende nos aconseja quitar el use client pero al quitarlo perdemos el hook y la funcionalidad del contador.

##### Por lo cual la problemática planteada es la siguiente como hago uso del use client y a la vez del metadata sin tener que perder la funcionalidad?

Es ahi cuando tenemos que pensar en el árbol de componente y en las hojas, el principio general es que todo en next,es decir, mi árbol es un server component y que solo unas o algunas hojas de mi árbol serán use client.

Por lo tanto tendríamos que separar ese elemento use client individualizar la función y colocarla dentro de una carpeta con archivos relacionado al componente, en este caso, en nuestra carpeta de carrito de compra, tendremos todas las hojas funcionales (use client) y fuera de ello tendremos nuestro árbol de server component.

##### Como mandamos un valor o elemento generado del lado del servidor?

En nuestro component page donde utilizamos el CartCounter podemos enviar por props en elemento o valor generándose directamente desde el lado del server. Por ejemplo ese 20 es un valor generado directamente del lado del servidor o recibido de la DB

```js
<CartCounter value={20} />
```

Y ese value es el que usa el componente para seguir con su funcionalidad.

En resumen:

1. Mandamos un valor desde el lado del servidor por props
2. Se construye el componente Cart counter
3. Ese componente (card counter) recibe el valor que a su vez es recibido del lado del servidor y continua creando el componente con ese valor.

### Generacion dinamica - ssr 

El objetivo es ir creando esta aplicación que pueda aprovechar lo generado del lado del servidor como también contenido generado por el cliente.

### Continuación del proyecto  
 
Agregamos la page pokemons y creamos un nuevo item en el sidebar.

### Data fetching  - Next 13+

En la documentación tenemos que asegurarnos que este activada la opción 'Using App Router' (esto es para aprovechar los server components).

El objetivo es traer data de otro servidor a nuestro servidor.

Cada vez que hacemos una petición con Fetch() son *cached* (almacenada en cache) esto significa que cada vez que volvemos hacer la petición con los mismos argumentos, la segunda y las posteriores re utiliza la respuesta de la primera petición.

Generamos la consulta a la api, utilizamos la función que hace la consulta y agregamos a nuestra page el *async-await* esto porque nuestra petición es una promesa.

### Asignar tipo de datos y mostrar imágenes

creamos una nueva carpeta con las interfaces que usamos para el type de la consulta de getPokemons(). 

Por otra parte para tipar de manera precisa y rápida hicimos una consulta en postman de la url de la petición, copiamos la respuesta y en nuestra paleta de comando del visual utiliza el json as code para que nos haga el tipado de manera automática.

### Componentes pequeños 

Como la regla general es utilizar hasta donde podemos hacer uso del server component, tenemos que comenzar a pensar en componentes pequeños en el sentido de optimizar nuestra app.
