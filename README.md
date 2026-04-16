# Vibe_Coding

> **Vibe Coding** = programar en modo *flujo*: describes lo que quieres construir, iteras rápido y te apoyas en IA para escribir, refactorizar y depurar código.

---

## 🌈 ¿Qué es *Vibe Coding*?

El *vibe coding* es un estilo de desarrollo donde priorizas:

- **Rapidez**: prototipar en minutos.
- **Iteración**: pedir cambios pequeños y constantes.
- **Contexto**: mantener el objetivo claro (qué problema resuelves).
- **Asistencia IA**: usar copilotos, editores y agentes para generar código, tests, documentación y fixes.

### 🧠 En qué se enfoca

- Convertir ideas en producto **sin fricción**.
- Usar prompts claros: *"haz X", "ahora agrega Y", "optimiza Z"*.
- Menos “pelear” con la herramienta y más **guiar** el resultado.

---

## 🧰 Herramientas principales

### 1) Cursor

**Cursor** es un editor tipo VS Code con IA integrada (chat + edición en contexto del repo).

**Usos típicos:**

- ✍️ Generar código a partir de una idea
- 🔧 Refactorizar módulos enteros
- 🧪 Crear tests
- 🐛 Explicar y corregir bugs leyendo tu proyecto

**Tip de vibe:**

> Pide cambios por pasos: *"hazlo funcionar" → "hazlo limpio" → "hazlo rápido"*.

---

### 2) Bolt.new

**bolt.new** (StackBlitz) permite crear apps full-stack en el navegador, rápido y sin setup local.

**Ideal para:**

- ⚡ Prototipos rápidos
- 🌍 Compartir demos por link
- 🧱 Arrancar proyectos con templates

**Tip de vibe:**

> Úsalo para validar la idea primero, luego migras a repo.

---

### 3) Windsurf

**Windsurf** (Codeium) es un editor/IDE con enfoque en “flow”, con agentes y autocompletado potente.

**Ideal para:**

- 🧭 Navegar proyectos grandes
- 🤖 Pedir cambios multi-archivo
- 🧩 Mantener consistencia de estilo

**Tip de vibe:**

> Dale contexto: pega requirements, estructura de carpetas y ejemplos.

---

### 4) v0 ("vo")

**v0** (Vercel) genera interfaces (UI) a partir de prompts, comúnmente con **React + Tailwind**.

**Ideal para:**

- 🎨 Diseñar pantallas rápido
- 🧱 Componentes reutilizables
- 🖥️ Layouts completos para apps

**Tip de vibe:**

> Pide la UI con estados: *loading*, *empty*, *error* y *success*.

---

## 🎯 Flujo recomendado (vibe workflow)

1. **Idea** → define el objetivo en 1 frase.
2. **UI rápida** → v0 para pantallas.
3. **Prototipo** → bolt.new para validar.
4. **Construcción real** → Cursor / Windsurf para iterar en el repo.
5. **Pulido** → tests, docs, refactor, performance.

---

## ✅ Checklist de prompts útiles

- "Crea la estructura del proyecto con X"
- "Implementa el feature Y y agrega tests"
- "Refactoriza este archivo para que sea más legible"
- "Encuentra el bug y explica por qué ocurre"
- "Optimiza esto sin cambiar el comportamiento"

---

## 📌 Notas

Este repo contiene apuntes y recursos sobre **Vibe Coding** y herramientas para construir más rápido con IA.