Estructura del proyecto
    src/
├── services/  
│   └── CountriesApiService.js
├── components/
│   ├── Cards/
│       └──Card.jsx //aqui viene lo de la paginacion
│       └── Card.css
├── App.jsx
└── App.css


1. ¿Explica tu flujo para el manejo de la petición, desde que se genera hasta que se renderiza?
  Primero, desde App.jxs se definen constantes con la hook de useState de paises para la peticion a la API y pagina para que vaya actualizando.
  Luego con useEffect se cargan los paises, para ello, utiliza una funcion que se llama getCountries(), me muestra un mensaje con alert al usuario de que se estan realizando la carga.
  
  Si todo ha ido bien se actualizan los datos de paises, si hay error se muestra un alert indicando que hubo un error. 
  
  Para realizar la paginación se creó pageCountries(), esta recibe los datos de todos los paises y hace una particion dependiendo de la pagina en la que se encuentra.
  Finalmente se renderiza.

2. ¿Explica qué archivos y/o directorios creaste y cuál es su función?
├── services/  
    └── CountriesApiService.js
Aquí se tienen las funciones fundamentales de la página que usaran en el main/App.jsx
   getCountries() ::: Interación con la API
   Usa axios para hacer la petición a la API, EN CASO DE CONSEGUIRLA:
    tiene un objeto llamado data que trae un mensaje  positivo y muestra en consola la info de la API que vamos a ocupar
    y retorna la data (la info que vamos a manejar)
    
   pageCountries() ::: Control de visualización
   Genera array de 12 elementos para su posterior renderización dependiendo de la ubicación de la pagina va cambiando los paises.
   
   totalPages() ::: Calcula el numero de paginas que se van a tener para el total los paises
├── Cards/
      └──Card.jsx
Este es el componente que se va a repetir para cada país, es el esqueleto de las tarjetas que se van a renderizar.
  Se tuvieron que hacer dos funciones para extraer el nombre de la moneda y su simbolo, las funciones son iguales cambia su retorno.
  (tuve muchos problemas para obtener esos datos, para no perder más tiempo solo se visualizan los datos del primer tipo de moneda de los paises que tienen dos o más)
  (estan como button porque me recordó a las tarjetas de anki que se voltean, cuando tenga tiempo pondré esa función y su banderita)

├── .css 
  También hice algunos archivos .css de la componente y del archivo principal App.jxs para darle un poco de estilo, función estética y visual.
  
4. ¿Por qué la petición con axios va en el servicio y la validación del ok va en el componente?
    Tiene que ver con la separación de responsabilidades, supongo que es para detectar el origen en caso de error.
    El servicio es algo que va ligado a otra dependecia.
    Las componentes son propias de la pagina que estamos haciendo, es la parte "precargada" que se va a utlizar en cuanto llegue algo más por eso se necesita la validación acá.
