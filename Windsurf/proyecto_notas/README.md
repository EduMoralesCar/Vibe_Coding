# Gestor de Notas

Un programa moderno y funcional para gestionar notas personales, desarrollado en Python con una interfaz gráfica intuitiva.

## Características

- Interfaz gráfica moderna y atractiva
- Crear nuevas notas con título y contenido
- Editar notas existentes
- Eliminar notas
- Listar todas las notas
- Almacenamiento automático en archivo JSON
- Diseño responsivo y fácil de usar

## Requisitos

- Python 3.6 o superior
- PyQt6 (se instala automáticamente con pip)

## Instalación

1. Clona o descarga este repositorio
2. Navega al directorio del proyecto
3. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```
4. Ejecuta el programa:
   ```bash
   python main.py
   ```

## Estructura del Proyecto

- `main.py`: Punto de entrada del programa
- `gui.py`: Implementa la interfaz gráfica de usuario
- `note.py`: Define la clase `Note` que representa una nota individual
- `note_manager.py`: Gestiona la lógica de negocio y las operaciones con las notas
- `storage.py`: Maneja el almacenamiento y carga de notas desde el archivo JSON
- `utils.py`: Contiene funciones auxiliares para la validación y procesamiento de datos
- `notas.json`: Archivo donde se almacenan las notas (se crea automáticamente)

## Uso

1. Al ejecutar el programa, se abrirá una ventana con dos paneles:
   - Panel izquierdo: Lista de todas tus notas
   - Panel derecho: Editor de notas

2. Para crear una nueva nota:
   - Haz clic en el botón "Nueva Nota"
   - Escribe el título y contenido
   - Haz clic en "Guardar"

3. Para editar una nota:
   - Selecciona la nota en el panel izquierdo
   - Modifica el título o contenido
   - Haz clic en "Guardar"

4. Para eliminar una nota:
   - Selecciona la nota en el panel izquierdo
   - Haz clic en "Eliminar"
   - Confirma la eliminación

## Limitaciones

- Título máximo: 100 caracteres
- Contenido máximo: 1000 caracteres
- No soporta formato de texto enriquecido
- No soporta imágenes o archivos adjuntos

## Extensibilidad

Para agregar nuevas funcionalidades, puedes:

1. Modificar la clase `Note` en `note.py` para agregar nuevos atributos
2. Agregar nuevos métodos en `NoteManager` en `note_manager.py`
3. Extender la interfaz gráfica en `gui.py`
4. Modificar las funciones de almacenamiento en `storage.py` si necesitas cambiar el formato de guardado

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu característica
3. Realiza tus cambios
4. Envía un pull request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 