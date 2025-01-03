# Desafío React - Embryoxite

## Requerimiento

### Construir una aplicación en React y, preferiblemente, TypeScript que permita mostrar un árbol con datos almacenados en localStorage. También debe permitir agregar y eliminar elementos del árbol en cualquier nodo.

Para esto crear:

DONE - Un componente Tree que reciba una propiedad title con el nombre del árbol, otra
value con un JSON con la definición del árbol, otra propiedad onChange a la que se
invoque con el nuevo JSON en caso de que se agregue o elimine un nodo del árbol y
una más editable que indique si el componente está en modo edición o en modo
vista.

DONE - En modo vista (editable = false), este componente debe mostrar los datos en forma
de árbol (puede ser usando elementos ul y li). El valor de title se debe mostrar
como raíz del árbol.

DONE - En modo edición, por cada nodo, debe mostrar un botón para agregarle un hijo y otro
para eliminar ese nodo. En la raíz del árbol se debe mostrar solo el botón para agregar
hijos.

DONE - Al apretar el botón de agregar un hijo se debe desplegar un pequeño formulario debajo
de ese nodo con un campo de texto, un botón para aceptar y otro de cancelar.
Este formulario debe validar que el campo de texto no quede vacío.
Se pueden usar componentes de Material UI (mui) para el campo de texto y los botones
(los botones íconos quedan lindos)

TODO - Un servicio que se encargue de consultar y actualizar los datos en localStorage.

DONE - Una página donde aparezca el árbol y que se encargue de pasarle las propiedades de
title, value, onChange y editable.

DONE - El valor de editable se debe controlar con un componente tipo switch desde esa
misma página.

## Entrega

DONE - Armar un repositorio en GitHub y darme acceso con el usuario mscovotti@gmail.com o
directamente dejarlo público.

TODO / DOING - Escribir un README con las instrucciones para la instalación, uso y cualquier otra
documentación necesaria.

DOING / ISSUES- (Totalmente opcional) Si estás con ganas podés desplegar la aplicación en servicios
como Vercel, Netlify o similar para verla funcionando.
Algunas ideas de cómo resolver el desafío:

DONE - La forma natural de armar un árbol es usando recursividad. Me imagino que el
componente Tree debería armar una lista <ul> para la raíz del árbol donde a cada hijo
le corresponda su elemento <li> y cada uno de estos tenga, a su vez otra <ul> para
sus propios hijos (si los hubiera) y así sucesivamente.

DONE - Creo que cada <li> (con su respectiva <ul> de hijos) debería manejarse en un
componente Tree.Node o algo por el estilo.

DONE - El componente raíz debería tener las funciones para manejar la creación y eliminación
de los nodos.

DONE (with zustand) - Para hacer que los nodos anidados a cualquier nivel tengan acceso a esas funciones,
se podría usar un ContextProvider en el componente Tree.
Supongo que una optimización que se puede hacer es memoizar las funciones que se
agregen al ContextProvider para que el contexto no cambie modificación del árbol (ver
si esto tiene sentido).

- El árbol debería guardarse en localStorage en formato JSON con una estructura algo
  así como
  {
  title: “raíz del árbol”,
  children: [
  {
  title: “hijo1”,
  children: [...]
  },
  {
  title: “hijo2”,
  children: [...]
  }
  ]
  }

  Requerimientos opcionales por si te quedaste manija y estás con ganas de seguir agregando cosas, podés implementar algo de esta
  lista

  DONE - Agregar notificaciones con Snackbar confirmando cuando se agrega o elimina un nodo.

  DONE - Que cada nodo del árbol pueda ser colapsable. Para esto agregar un nuevo ícono antes
  del texto en cada nodo que muestre un botón ícono “+” para desplegar el contenido (si
  está colapsado) o un “-” para colapsarlo (si está desplegado). El primer nivel del árbol
  (los hijos de la raíz) no se colapsan.
  DONE - Agregar un desplegar/colapsar todo que básicamente despliegue o colapse cada uno de
  los hijos de la raíz y todos sus nodos anidados.

- Cualquier otra cosa que quieras agregar que te parezca importante para el componente
  Tree.

  DONE - Usar React Router de manera que la app tenga un layout con un pequeño menú donde
  una opción sea la página con el árbol y la otra muestre solo una página estática con
  texto de ejemplo (Lorem Ipsum)

- TODO Agregar pruebas E2E con Cypress.
- TODO Mostrar el componente Tree en Storybook.
