from typing import List, Optional
from note import Note
from utils import generar_id_unico, limpiar_texto
from storage import cargar_notas, guardar_notas

class NoteManager:
    def __init__(self):
        self.notas = cargar_notas()

    def crear_nota(self, titulo: str, contenido: str) -> Note:
        """
        Crea una nueva nota.
        
        Args:
            titulo: Título de la nota
            contenido: Contenido de la nota
        
        Returns:
            Note: La nota creada
        """
        id = generar_id_unico()
        titulo = limpiar_texto(titulo, 100)
        contenido = limpiar_texto(contenido, 1000)
        
        nota = Note(id, titulo, contenido)
        self.notas.append(nota)
        self._guardar_cambios()
        return nota

    def obtener_nota(self, id: str) -> Optional[Note]:
        """
        Obtiene una nota por su ID.
        
        Args:
            id: ID de la nota
        
        Returns:
            Optional[Note]: La nota si existe, None en caso contrario
        """
        for nota in self.notas:
            if nota.id == id:
                return nota
        return None

    def editar_nota(self, id: str, titulo: Optional[str] = None, contenido: Optional[str] = None) -> bool:
        """
        Edita una nota existente.
        
        Args:
            id: ID de la nota
            titulo: Nuevo título (opcional)
            contenido: Nuevo contenido (opcional)
        
        Returns:
            bool: True si se editó correctamente, False en caso contrario
        """
        nota = self.obtener_nota(id)
        if not nota:
            return False
        
        if titulo is not None:
            titulo = limpiar_texto(titulo, 100)
        if contenido is not None:
            contenido = limpiar_texto(contenido, 1000)
        
        nota.actualizar(titulo, contenido)
        self._guardar_cambios()
        return True

    def eliminar_nota(self, id: str) -> bool:
        """
        Elimina una nota.
        
        Args:
            id: ID de la nota
        
        Returns:
            bool: True si se eliminó correctamente, False en caso contrario
        """
        nota = self.obtener_nota(id)
        if not nota:
            return False
        
        self.notas.remove(nota)
        self._guardar_cambios()
        return True

    def listar_notas(self) -> List[Note]:
        """
        Obtiene todas las notas.
        
        Returns:
            List[Note]: Lista de todas las notas
        """
        return self.notas

    def buscar_notas(self, palabra_clave: str) -> List[Note]:
        """
        Busca notas por palabra clave.
        
        Args:
            palabra_clave: Palabra clave para buscar
        
        Returns:
            List[Note]: Lista de notas que coinciden con la búsqueda
        """
        palabra_clave = palabra_clave.lower()
        return [
            nota for nota in self.notas
            if palabra_clave in nota.titulo.lower() or palabra_clave in nota.contenido.lower()
        ]

    def _guardar_cambios(self) -> None:
        """Guarda los cambios en el archivo de almacenamiento."""
        guardar_notas(self.notas) 