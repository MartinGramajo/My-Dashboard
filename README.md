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
