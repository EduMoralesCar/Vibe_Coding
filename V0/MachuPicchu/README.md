# Proyecto Machu Picchu

Este es un proyecto web construido con **Next.js** y **React**. Utiliza **pnpm** como gestor de paquetes y herramientas como **Tailwind CSS** para los estilos y **React Leaflet** para los mapas interactivos.

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema lo siguiente:
- [Node.js](https://nodejs.org/es/) (Se recomienda usar la versión LTS más reciente, versión 18+)
- [pnpm](https://pnpm.io/es/) (Gestor de paquetes rápido y eficiente en disco)

Puedes instalar `pnpm` globalmente con npm si aún no lo tienes:
```bash
npm install -g pnpm
```

## 🛠️ Pasos para Levantar el Proyecto

Sigue estos pasos en tu terminal para poner en marcha el entorno de desarrollo:

### 1. Clonar o abrir el proyecto
Abre una terminal y navega hasta el directorio raíz del proyecto (`MachuPicchu`).

### 2. Instalar las dependencias
Ejecuta el siguiente comando para instalar todas las librerías y dependencias necesarias:
```bash
pnpm install
```

### 3. Iniciar el servidor local
Una vez que las dependencias estén instaladas, levanta el servidor de desarrollo:
```bash
pnpm run dev
```

*(También puedes usar simplemente `pnpm dev`)*

### 4. Visualizar en el navegador
Si todo salió bien, la terminal te indicará que el servidor está corriendo.
Abre tu navegador web y visita: 
👉 **[http://localhost:3000](http://localhost:3000)**

## 📂 Estructura Principal
- `app/`: Contiene el enrutador y las páginas principales de Next.js.
- `components/`: Contiene los componentes reutilizables de React (como menús, secciones, etc.).
- `public/`: Archivos estáticos como imágenes o fuentes.

---
Si encuentras problemas relacionados al mapa y un error similar a `window is not defined`, asegúrate de que el componente de mapa sea importado usando la técnica de **dynamic import** desactivando SSR, debido a que Leaflet solo puede ejecutarse en el lado del cliente (navegador).
