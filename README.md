# ESCENARIO
### Crear una aplicación web que realice las siguientes funciones:
1.	La primera parte consta de consultar datos de una API acerca de películas dependiendo de la categoría. La aplicación debe ser capaz de mostrar los datos de forma visual como son: la imagen, el nombre y la fecha (la cantidad de películas que consulta debe ser modificable). A su vez, los datos deben ser almacenados de forma local de modo que al recargar la página no se pierda la información. Una vez se tiene los datos de forma local el usuario tendrá dos opciones, la primera de eliminar algún dato y la segunda de indicar una insignia como favorito. Por último, al hacer click en la imagen de una película se debe redirigir a otra vista encargada de presentar la descripción de la película con los elementos que la componen. 

2.	En la segunda parte es necesario crear una vista en donde el usuario pueda adicionar información que no se encuentre en la Api, es decir, la posibilidad de agregar una nueva película compuesta por el título, imagen, descripción y fecha. Esta a su vez se presentará en el Home con los demás datos en caso de ser consultados.

3.	[Opcional] Desarrollar una vista en donde se puedan observar las películas seleccionadas como favoritas, en todos los casos la información al recargar la página debe persistir.

4.	[Opcional] Agregar una vista en donde sea posible filtrar los datos consultados.

### Requerimientos del proyecto:
-	Use cualquier lenguaje o framework (Vue JS, React JS, Angular JS, Javascript, Go, NodeJs, ...)
-	Implementar el control de rutas por medio de un enrutador.
-	Desarrollar un NavBar para la navegación entre vistas.
-	El rango de los datos a consultar debe ser modificable.
-	Implementar y consumir el estado de la aplicación por medio de un gestor de estado como Vuex, Context, Redux, Redux toolkit, NGXS. 
-	Guarde los datos mediante LocalStore.
-	Consulta de API web.
-	Puede crear la aplicación para que se ejecute localmente o en una nube pública (Azure, AWS, GCP) utilizando cualquier pila de tecnología disponible para usted en ese entorno.
-	La interfaz de usuario es opcional.
-	Debe mantener su código en un repositorio de control de código fuente (GitHub, Bitbucket, etc.).

# Desarrollo del reto biz-app
![Home2](https://i.ibb.co/Hx8Vn1C/Home.png)
### Configuración para ejecutar el proyecto de forma local:
```
npm install
```

### Ejecutar servidor de forma local
```
npm run serve
```

## La aplicación web se encuentra alojada en vercel   ->  [biz-app](https://biz-app.vercel.app/) 
![Home](https://i.ibb.co/yyW3ZWR/Home2.png)
## Features

- Busqueda de películas relacionadas dependendiendo de la categoría.
- Buscador para filtrar las películas almacenadas.
- Posibilidad para agregar a favoritos y ser consultados en otra vista.
- Vista para adiccionar películas de forma local.
- Todos los datos son guardados en localStore.
- La aplicación web es responsiva.

