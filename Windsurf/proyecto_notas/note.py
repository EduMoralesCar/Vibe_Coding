from datetime import datetime

class Note:
    def __init__(self, id: str, titulo: str, contenido: str):
        self.id = id
        self.titulo = titulo
        self.contenido = contenido
        self.fecha_creacion = datetime.now()
        self.ultima_edicion = datetime.now()

    def to_dict(self) -> dict:
        """Convierte la nota a un diccionario para almacenamiento."""
        return {
            'id': self.id,
            'titulo': self.titulo,
            'contenido': self.contenido,
            'fecha_creacion': self.fecha_creacion.isoformat(),
            'ultima_edicion': self.ultima_edicion.isoformat()
        }

    @classmethod
    def from_dict(cls, data: dict) -> 'Note':
        """Crea una nota desde un diccionario."""
        note = cls(
            id=data['id'],
            titulo=data['titulo'],
            contenido=data['contenido']
        )
        note.fecha_creacion = datetime.fromisoformat(data['fecha_creacion'])
        note.ultima_edicion = datetime.fromisoformat(data['ultima_edicion'])
        return note

    def actualizar(self, titulo: str = None, contenido: str = None) -> None:
        """Actualiza los campos de la nota."""
        if titulo is not None:
            self.titulo = titulo
        if contenido is not None:
            self.contenido = contenido
        self.ultima_edicion = datetime.now()

    def __str__(self) -> str:
        """Representación en string de la nota."""
        return f"Nota: {self.titulo} (ID: {self.id})" 