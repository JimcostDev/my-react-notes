# 🧠 My React Notes

Este repositorio es mi espacio personal de aprendizaje sobre **React**.  
Aquí guardo mis **apuntes teóricos**, **proyectos prácticos** y una **guía rápida** para crear y configurar proyectos con **React + Vite + Tailwind CSS**.

---

## 📚 Contenido

- 🧾 **Apuntes teóricos:** conceptos fundamentales de React explicados de forma simple.  
- 💻 **Proyectos prácticos:** ejemplos y mini apps para reforzar lo aprendido.  
- ⚙️ **Guía de instalación:**  
  [`guia-react-vite-tailwind.md`](./guia-react-vite-tailwind.md) — explica cómo crear un proyecto moderno con **React**, **Vite** y **Tailwind CSS** desde cero.

---

## 🚀 Objetivo

El objetivo de este repositorio es **documentar mi proceso de aprendizaje en React** y tener un espacio de referencia rápida para volver a consultar conceptos, configuraciones y ejemplos cuando los necesite.  
También puede servir a otras personas que estén comenzando con React.

---

## 🧩 Tecnologías principales

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)

---

## 💡 Conceptos Generales de React

### ⚛️ ¿Qué es React?
**React** es una librería de JavaScript creada por Facebook para construir **interfaces de usuario** de forma declarativa y eficiente.  
Permite crear aplicaciones web basadas en **componentes reutilizables** que actualizan solo las partes necesarias de la página cuando cambian los datos.

---

### 🧱 Componentes
Los **componentes** son la base de cualquier aplicación en React.  
Piensa en ellos como **bloques reutilizables de UI** (interfaz de usuario).  
Cada componente puede tener su propio HTML, CSS y lógica.

Ejemplo de un componente básico:
```jsx
function Saludo() {
  return <h1>¡Hola React!</h1>;
}
```

➡️ Se pueden combinar varios componentes para formar estructuras más grandes.

---

### 📦 Props (Propiedades)
Las **props** son **datos que se pasan de un componente padre a un componente hijo**.  
Sirven para hacer que los componentes sean **dinámicos y reutilizables**.

```jsx
function Saludo({ nombre }) {
  return <h1>¡Hola, {nombre}!</h1>;
}

// Uso
<Saludo nombre="Juan" />
```

---

### 🔁 Estado (State)
El **estado** representa los datos internos de un componente que pueden **cambiar con el tiempo**.  
Cuando el estado cambia, React **vuelve a renderizar** el componente automáticamente.

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}
```

---

### ⚓ Hooks
Los **hooks** son funciones especiales de React que permiten **usar características internas** (como estado, ciclo de vida, contexto, etc.) en componentes funcionales.

Algunos hooks más comunes:

| Hook | Descripción |
|------|--------------|
| `useState` | Maneja el estado local del componente. |
| `useEffect` | Ejecuta efectos secundarios (por ejemplo, llamadas a APIs o eventos). |
| `useContext` | Permite acceder a valores globales sin pasar props manualmente. |
| `useRef` | Guarda referencias a elementos o valores sin provocar re-renderizados. |

Ejemplo:
```jsx
import { useEffect } from "react";

function Ejemplo() {
  useEffect(() => {
    console.log("Componente montado");
  }, []); // [] significa que se ejecuta solo una vez

  return <p>Hola desde useEffect 👋</p>;
}
```

---

### 🧭 JSX
**JSX** es una extensión de JavaScript que permite **escribir HTML dentro del código JS**.  
React lo usa para describir cómo debería verse la interfaz.

```jsx
const elemento = <h1>Hola mundo</h1>;
```

Bajo el capó, React transforma el JSX en llamadas a `React.createElement()`.

---

### 🧠 Virtual DOM
React utiliza un **Virtual DOM**, una representación ligera del DOM real.  
Cuando algo cambia, React compara el nuevo Virtual DOM con el anterior y **actualiza solo las partes necesarias** en el DOM real, lo que hace las apps más rápidas y eficientes.

---

### 🧭 Ciclo de vida del componente
Los componentes tienen diferentes etapas (montaje, actualización, desmontaje).  
Con hooks como `useEffect`, puedes ejecutar código en momentos específicos de ese ciclo.

---

