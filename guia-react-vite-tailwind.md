
# 🚀 Guía para crear una aplicación React con Vite

Esta guía te enseña paso a paso cómo crear un proyecto de **React + Vite**, e integrar **TailwindCSS** fácilmente.

---

## 🧭 1. Verificar Node.js

Antes de empezar, asegúrate de tener Node.js instalado:

```bash
node -v
```

Si no tienes Node, descárgalo desde [https://nodejs.org](https://nodejs.org).

---

## ⚡ 2. Crear el proyecto con Vite

Ejecuta el siguiente comando en tu terminal:

```bash
npm create vite@latest
```

Luego responde las preguntas:

1️⃣ **Project name:**  
   Escribe el nombre de tu proyecto (por ejemplo, `my-react-app`).

2️⃣ **Select a framework:**  
   Usa las flechas y selecciona **React**.

3️⃣ **Select a variant:**  
   Elige una opción:
   - `JavaScript` → lo más simple.  
   - `TypeScript` → recomendado para proyectos grandes.  
   - `SWC` → usa un compilador más rápido.

---

## 📦 3. Instalar dependencias

Entra en la carpeta de tu proyecto y ejecuta:

```bash
cd my-react-app
npm install
```

---

## 🚀 4. Iniciar el servidor de desarrollo

Ejecuta:

```bash
npm run dev
```

Verás algo como:

```
VITE v5.0.0  ready in 300 ms
➜  Local:   http://localhost:5173/
```

Abre ese enlace en tu navegador.

---

## 🎨 5. Instalar TailwindCSS

Desde la raíz del proyecto, ejecuta:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## ⚙️ 6. Configurar Vite 

Abre **vite.config.ts** y reemplaza con:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

```

---

## 💅 7. Importar Tailwind en tu CSS

Abre `src/index.css` y reemplaza su contenido con:

```css
@import "tailwindcss";
```

---

## 🌈 8. Probar Tailwind

Abre `src/App.jsx` y cambia el contenido a:

```jsx
function App() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-blue-500">
        ¡Hola Tailwind + React + Vite! 🎉
      </h1>
    </div>
  );
}

export default App;
```

Ejecuta nuevamente:

```bash
npm run dev
```

Y abre tu app — deberías ver el texto en azul.

---

## 🎉 ¡Listo!

Ya tienes un entorno moderno de **React + Vite + TailwindCSS** funcionando.

Happy coding 💻✨
