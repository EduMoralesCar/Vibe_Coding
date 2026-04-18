import json
import os
from typing import List, Dict
from note import Note

ARCHIVO_NOTAS = "notas.json"

def cargar_notas() -> List[Note]:
    """
    Carga las notas desde el archivo JSON.
    
    Returns:
        List[Note]: Lista de notas cargadas
    """
    if not os.path.exists(ARCHIVO_NOTAS):
        return []
    
    try:
        with open(ARCHIVO_NOTAS, 'r', encoding='utf-8') as f:
            datos = json.load(f)
            return [Note.from_dict(nota) for nota in datos]
    except Exception as e:
        print(f"Error al cargar las notas: {e}")
        return []

def guardar_notas(notas: List[Note]) -> bool:
    """
    Guarda las notas en el archivo JSON.
    
    Args:
        notas: Lista de notas a guardar
    
    Returns:
        bool: True si se guardó correctamente, False en caso contrario
    """
    try:
        datos = [nota.to_dict() for nota in notas]
        with open(ARCHIVO_NOTAS, 'w', encoding='utf-8') as f:
            json.dump(datos, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"Error al guardar las notas: {e}")
        return False 