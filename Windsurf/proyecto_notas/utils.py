import uuid
from typing import Optional

def generar_id_unico() -> str:
    """Genera un ID único usando UUID4."""
    return str(uuid.uuid4())

def validar_entrada(texto: str, longitud_minima: int = 1, longitud_maxima: Optional[int] = None) -> bool:
    """
    Valida que el texto ingresado cumpla con los requisitos de longitud.
    
    Args:
        texto: El texto a validar
        longitud_minima: Longitud mínima requerida
        longitud_maxima: Longitud máxima permitida (opcional)
    
    Returns:
        bool: True si el texto es válido, False en caso contrario
    """
    if not texto or len(texto.strip()) < longitud_minima:
        return False
    
    if longitud_maxima and len(texto) > longitud_maxima:
        return False
    
    return True

def limpiar_texto(texto: str, longitud_maxima: int = 1000) -> str:
    """
    Limpia el texto ingresado y lo trunca si es necesario.
    
    Args:
        texto: El texto a limpiar
        longitud_maxima: Longitud máxima permitida
    
    Returns:
        str: El texto limpio y truncado si es necesario
    """
    texto = texto.strip()
    if len(texto) > longitud_maxima:
        texto = texto[:longitud_maxima] + "..."
    return texto

def obtener_entrada_usuario(prompt: str, longitud_minima: int = 1, longitud_maxima: Optional[int] = None) -> str:
    """
    Obtiene y valida la entrada del usuario.
    
    Args:
        prompt: Mensaje a mostrar al usuario
        longitud_minima: Longitud mínima requerida
        longitud_maxima: Longitud máxima permitida
    
    Returns:
        str: El texto ingresado por el usuario
    """
    while True:
        texto = input(prompt).strip()
        if validar_entrada(texto, longitud_minima, longitud_maxima):
            return texto
        print(f"Error: El texto debe tener entre {longitud_minima} y {longitud_maxima if longitud_maxima else 'infinito'} caracteres.") 