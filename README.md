#Entrega final: 
- pagina web: https://proyecto-next-roca-42nfc5edr-ignacios-projects-2ded0091.vercel.app
- ACLARACION: buenas profe queria hacerle una aclaracion con respecto a las rutas paralelas con la pestaña de @login, tuve el mismo problema que usted en la clase de que la pagina no cambia aunque se haga el registro o el login, pude "solucionarlo" parcialmente a cambiar la forma en la que se renderiza el children, pero de igual forma a veces la pagina a mostrar no cambia no tira codigo de error ni nada y a nivel codigo esta bien asi que calculo que sera un problema de la version de next o no se pero no le encontre solucion definitiva y queria integrar las rutas paralelas xq era lo que vimos, asi que estableci por base en el authcontext el logged como true para que en el momento que testee la pagina no quede ahi atorado si llega a pasar y no rompa el flujo a navegar por la pagina le pido mil disculpas por el inconveniente y cualquier comentario es bien recibido. respecto a la auntenticacion funciona bien los datos se sube a firebase y se puede registrar o logear perfectamente por lo que comprobe pero bueno a la ruta paralela no le pinta mostar la pagina de administrador jajaj de cualquier forma el codigo esta ahi. muchas gracias
- Agregue mas estilo a las paginas.
- Ahora se puede eliminar del carrito los productos y al tocar un boton de comprar sale una alerta simulando un check out. 
- Se pueden cargar productos a la firebase y se pueden cargar con imagenes tmb

## Segunda pre-entrega:
- Integre Firebase y Firestore al proyecto, permitiendo mostrar los productos correctamente desde la base de datos. El mockdata fue eliminado, ya que dejó de ser útil.
- Como sugeriste en la entrega anterior, añadi metadata a la pestaña de productos. Ahora, al estar en una categoría específica, también se refleja en el título del proyecto.
- Incorpore el Context al proyecto, lo que permitio añadir productos al carrito, visualizarlos, vaciarlo y ver la cantidad de productos en el icono del header. Solo falta implementar las funciones de sumar o restar la cantidad de un mismo producto desde el carrito. También se utilizó LocalStorage, por lo que los artículos se guardan incluso si se recarga la página.
- Se generaron los staticParams para los distintos productos existentes en la página, y se implementaron loaders para la página de productos y el detalle de cada producto.
- En esta entrega, avancé significativamente en el estilo de la página para la entrega final. Aún faltan algunas estilizaciones adicionales y ajustes específicos para la vista móvil, pero el diseño no debería romperse en esta versión.

## primera preentrega de mi proyecto:

Para esta entrega, armé la maquetación de la página. La idea es crear un e-commerce de venta de periféricos para PC o consolas. Elegí esta temática para diseñar una web con un estilo moderno y "tecnológico". Por el momento, el diseño de la página es sencillo, pero para la versión final tengo pensado un estilo más elaborado. En esta etapa, he cargado 9 productos (3 de cada tipo). A futuro, la idea es agregar más productos y categorías, no solo de PC. use tailwind para casi todo el diseño de la pagina y aplique algunos media queres de este asi que no deberia romperse el diseño en pantallas mas pequeñas.
