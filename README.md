# React + TypeScript + Vite - GreenSlope

Este proyecto es una aplicación desarrollada en React con TypeScript, utilizando **Vite** como herramienta de construcción. La aplicación permite a los usuarios buscar, visualizar, agregar, editar y eliminar elementos de una lista, con soporte para transiciones suaves y optimizaciones de rendimiento.

## **Requisitos**

Para ejecutar este proyecto en tu máquina, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn**

## **Cómo ejecutar la aplicación**

Sigue estos pasos para clonar, instalar y ejecutar el proyecto en tu entorno local:

```bash
git clone https://github.com/RubenRGanga/react-test.git
cd react-test
npm install
npm run dev
````
## **Estructura del Proyecto**
- **src/: Contiene todo el código fuente de la aplicación.**
- **Components/: Todos los componentes de React que forman la UI.**
- **interfaces/: Definiciones de tipos TypeScript para los elementos de la aplicación.**
- **App.tsx: El componente principal de la aplicación.**
- **index.scss: Estilos globales para la aplicación.**
- **public/: Archivos estáticos públicos.**

## **Funciones**
- **Buscar elementos en la lista a través de un campo de búsqueda con debounce para optimizar el rendimiento.**
- **Agregar nuevos elementos a la lista mediante un formulario.**
- **Editar y eliminar elementos de la lista.**
- **Ordenar elementos por nombre.**
- **Transiciones suaves al agregar, editar o eliminar elementos.**
- **Uso de React Context API para manejar el estado global de la aplicación.**
- **Decisiones Técnicas**
- **React + Vite como herramienta de desarrollo rápido y eficiente.**
- **TypeScript para tipado estático y mejoras de productividad.**
- **Context API para manejar el estado de los elementos de la lista.**
- **SCSS como preprocesador de CSS para modularidad y escalabilidad de estilos.**

## **Tecnologias**
- **React 18**
- **TypeScript**
- **Vite**
- **SCSS**
- **React Context API**
- **FontAwesome**
- **React Transition Group**
