# Frontend Challenge

[Link del sitio web]()

## Consideraciones antes de realizar el proyecto

Para la creación del proyecto se tuvo en consideración usar Vite por su rapidez

Para el manejo de estilos se considero usar Css Modules en lugar de css general con metodología BEM por el uso del Patron Atomic design.

Para la creación de componentes, se tuvieron en cuenta también ciertos elementos no reutilizables para una mejor implementación de estos mismos.

## Librerías y herramientas utilizadas
- React y Typescript
- Sass y Css modules
- redux toolkit (manejo de estados globales)
- react-router-dom
- axios (consultar a las api's)
- date-fns (manejo de fechas)

## Pasos para la realización del proyecto

- Se descargaron los recursos tales como imágenes, fuentes e iconos, obtenidos tanto del Figma como de otros sitios web.
- Se obtuvieron los datos de diseño, tales como tamaños de fuente, tipos de fuente y colores para su posterior asignación y configuración.
- Se creo el proyecto junto con la estructura de carpetas
- Se añadieron los archivos de configuración como el router, el store, los types y las constantes globales,
 así como algunos archivos de utilería.
- Se crearon los componentes reutilizables para el proyecto
- Se diseñaron las paginas junto con sus responsives.
- Se integraron las api, la lógica y el funcionamiento del proyecto


## Estructura de carpetas
```typescript
 - src
   - assets
     - fonts
     - images
     - styles          // Clases globales, mixins y variables de diseño
   - components        // Componentes globales usando el patron Atomic Design
     - 01-atoms
     - 02-molecules
     - 03-organisms
     - 04-templates
     - 06-layouts
   - constants
     - enviroments     // Exportación de variables de entorno
     - globals         // Exportación de constantes globales
   - core
     - services        // Consumo de Api Rest
     - models          // Tipados e interfaces globales
   - hooks
   - pages             // Solo los componentes que representan una pagina
   - router            // Configuración del enrutado de la pagina
   - store             // Toda la configuración de los estados globales
   - utils             // Funciones utilitarias
```