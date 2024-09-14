# **Prueba Técnica - FrontEnd Developer - GreenSlope**

## **Descripción**

Crea una pequeña aplicación en React que permita a los usuarios buscar, visualizar y gestionar una lista de elementos. La prueba evaluará tu capacidad para implementar lógica, manejar estado, optimizar rendimiento, y aplicar buenas prácticas de desarrollo en React.

## **Requisitos**

1. **Funcionalidad Principal**:
    - **Buscar** elementos a través de un campo de búsqueda.
    - **Visualizar** una lista de elementos filtrados según la búsqueda.
    - **Agregar** un nuevo elemento a la lista.
    - **Editar** un elemento existente.
    - **Eliminar** un elemento de la lista.

2. **Detalles Específicos**:
    - Los elementos pueden ser representados como objetos con al menos un `id`, `nombre`, y `descripción`.
    - Implementar un sistema de **debounce** en el campo de búsqueda para optimizar el rendimiento.
    - Mantener el estado de la aplicación de manera eficiente utilizando `useState`, `useReducer`, o cualquier otra solución de manejo de estado que prefieras.
    - Utilizar **React Context API** o una solución de estado global (como Redux) para manejar el estado de la lista de elementos si es necesario.
    - Implementar una funcionalidad de **ordenación** que permita a los usuarios ordenar los elementos por nombre.

3. **Optimización y Buenas Prácticas**:
    - La aplicación debe estar optimizada para evitar renders innecesarios.
    - El código debe ser modular y fácil de mantener. Siempre con código limpio, escalable y siguiendo los principios **SOLID**
    - Escribir una breve **documentación** explicando las decisiones técnicas, cómo correr la aplicación, y cualquier otra información relevante.

4. **Opcionales (Bonus)**:
    - Implementar **tests unitarios** para algunos componentes clave utilizando Jest o React Testing Library.
    - Utilizar **TypeScript** en lugar de JavaScript para mejorar la tipificación.
    - Agregar **transiciones suaves** o animaciones cuando se agreguen, editen o eliminen elementos.

## **Instrucciones de Entrega**

- **Tiempo estimado**: 1 a 3 horas.
- **Formato de entrega**: Envía un repositorio GitHub (o un archivo comprimido) con el código de la aplicación junto con un archivo README que contenga las instrucciones para correr la aplicación y la documentación solicitada.

¡Buena suerte!
