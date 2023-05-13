### Se hizo en base al siguiente articulo:

- https://www.freecodecamp.org/news/write-unit-tests-using-react-testing-library/

In React Testing Library you check the behavior of DOM when the user clicks on a button or submits a form and so on instead of testing the internal state of the component.


Lo siguiente es en base a esto (No esta muy bueno, porque falta codigo):
https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react/

### What to Test
In general, your tests should cover the following aspects of your code:

If a component renders with or without props
How a component renders with state changes
How a component reacts to user interactions

### What Not to Test
Testing most of your code is important, but here are some things you do not need to test:
1. **Actual Implementation:** You do not need to test the actual implementation of a functionality. Just test if the component is behaving correctly.
Let’s say you want to sort an array on the click of a button. There’s no need to test the actual sorting logic. You only test if the function was called and if the state changes are rendering correctly.
2. **Third Party libraries:** If you are using any third party libraries like Material UI, no need to test those – they should already be tried and tested.

**Any test in React, no matter how complicated, follows this structure:**

- Render the component
- Get an element from the component and simulate any user interactions
- Write an assertion.

### Coverage
Para ver el coverage agregue el siguiente comando:
`"coverage": "vitest run --coverage",`
Cuando lo corri me tiro para instalar una dependencia, le dije que si.

Al ejecutar el comando `yarn coverage` me tiro un error "TypeError: getProvider is not a function" means that the getProvider function is not defined. 
Y bard me tiro esta respuesta: This can happen if you are using an outdated version of Vitest, or if you have not installed the @vitest/coverage plugin.
Corri el comando `yarn add -D vitest` actualizo la versión de vitest y funciono.
Cuando ejecutaba `yarn upgrade vitest` no actualizaba la versión.

**Update state**
State updates cause a component to re-render. So, when your functionality performs a state update, you should test how the component is behaving due to the state change.


**Instale tambien Vitest UI**
`yarn add -D vitest-ui`
Pero me tiro el siguiente error:
`Error: listen EACCES: permission denied 127.0.0.1:51204`
Entonces modifique el comando por defecto y le especifique un puerto:
`"test:ui": "vitest --ui --api 9527"`


**Queda pendiente**
Prueba de codium AI
El codigo lo tira en otro formato.


### Referencias
- https://jestjs.io/docs/using-matchers
