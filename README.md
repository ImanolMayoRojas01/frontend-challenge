# Frontend Challenge

*Sitio web realizado para cotizar planes de seguros en la empresa de Rimac, puedes conocer mas sobre el sitio web ingresando a [Rimac Seguros Salud](https://master.dxz9ewc10ypkp.amplifyapp.com/)*

<h1 align="center"> Rimac Seguros Salud </h1>
<p align="center"><img src="https://master.dxz9ewc10ypkp.amplifyapp.com/main-screenshot-page.png"/></p>


## Tabla de contenidos:
---

- [Consideraciones antes de iniciar el proyecto](#consideraciones-antes-de-realizar-el-proyecto)
- [Librerías y herramientas utilizadas](#librerías-y-herramientas-utilizadas)
- [Pasos para la realización del proyecto](#pasos-para-la-realización-del-proyecto)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Guia de instalación](#guia-de-instalación)

## Consideraciones antes de realizar el proyecto 📝
---
Para la creación del proyecto se tuvo en consideración usar Vite por su rapidez
 
## Librerías y herramientas utilizadas 🛠️
---
- `react y typescript`
- `sass y css modules`
- `redux toolkit` *para el manejo de estados globales*
- `react-router-dom` *para el enrutamiento del sitio*
- `axios` *para consultas a las api's*
- `date-fns` *para manejo de fechas*
- `use-onclickoutside` *para manejar eventos click fuera del contenedor*

## Pasos para la realización del proyecto 📑
---
Para el desarrollo del proyecto, se tuvo en cuenta una serie de pasos a realizar en order, los cuales son:

1. Se descargaron los recursos tales como imágenes, fuentes e iconos, obtenidos tanto del Figma como de otros sitios web.
2. Se obtuvieron los datos de diseño, tales como tamaños de fuente, tipos de fuente y colores para su posterior asignación y configuración.
3. Se creo el proyecto junto con la estructura de carpetas
4. Se añadieron los archivos de configuración como el router, el store, los types y las constantes globales, así como algunos archivos de utilería.
5. Se crearon los componentes reutilizables para el proyecto
6. Se diseñaron las paginas junto con sus responsives.
7. Se integraron las api's, la lógica y el funcionamiento del proyecto
8. Se desplego el proyecto en aws amplif

## Estructura de carpetas 📂
---
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

## Guia de instalación 💻
---
A continuación detallare los pasos a seguir para lograr levantar el proyecto de manera local:
- Ejecutar el comando yarn install o npm install para instalar todas las dependenci
- Crear un archivo .env o .env.local y agregar la variable de entorno HOST_API con la url de la api rest
- Ejecutar el comando yarn build o npm run build para iniciar el sitio web
