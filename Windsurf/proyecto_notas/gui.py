import sys
from datetime import datetime
from PySide6.QtWidgets import (QApplication, QMainWindow, QWidget, QVBoxLayout, 
                           QHBoxLayout, QPushButton, QLabel, QLineEdit, 
                           QTextEdit, QListWidget, QMessageBox, QDialog,
                           QFormLayout)
from PySide6.QtCore import Qt, QSize
from PySide6.QtGui import QFont, QIcon
from note_manager import NoteManager

class VentanaPrincipal(QMainWindow):
    def __init__(self):
        super().__init__()
        self.manager = NoteManager()
        self.setup_ui()
        self.cargar_notas()

    def setup_ui(self):
        self.setWindowTitle("Gestor de Notas")
        self.setMinimumSize(800, 600)

        # Widget central
        widget_central = QWidget()
        self.setCentralWidget(widget_central)
        layout_principal = QHBoxLayout(widget_central)

        # Panel izquierdo (lista de notas)
        panel_izquierdo = QWidget()
        layout_izquierdo = QVBoxLayout(panel_izquierdo)
        
        # Título y botón de nueva nota
        header_layout = QHBoxLayout()
        titulo_label = QLabel("Mis Notas")
        titulo_label.setFont(QFont("Arial", 16, QFont.Bold))
        header_layout.addWidget(titulo_label)
        
        btn_nueva = QPushButton("Nueva Nota")
        btn_nueva.setStyleSheet("""
            QPushButton {
                background-color: #4CAF50;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #45a049;
            }
        """)
        btn_nueva.clicked.connect(self.crear_nota)
        header_layout.addWidget(btn_nueva)
        
        layout_izquierdo.addLayout(header_layout)

        # Lista de notas
        self.lista_notas = QListWidget()
        self.lista_notas.setStyleSheet("""
            QListWidget {
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 5px;
            }
            QListWidget::item {
                padding: 8px;
                border-bottom: 1px solid #eee;
            }
            QListWidget::item:selected {
                background-color: #e3f2fd;
                color: #1976d2;
            }
        """)
        self.lista_notas.itemClicked.connect(self.mostrar_nota)
        layout_izquierdo.addWidget(self.lista_notas)

        # Panel derecho (editor de notas)
        panel_derecho = QWidget()
        layout_derecho = QVBoxLayout(panel_derecho)

        # Campos de edición
        self.titulo_edit = QLineEdit()
        self.titulo_edit.setPlaceholderText("Título de la nota")
        self.titulo_edit.setStyleSheet("""
            QLineEdit {
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 14px;
            }
        """)
        layout_derecho.addWidget(self.titulo_edit)

        self.contenido_edit = QTextEdit()
        self.contenido_edit.setPlaceholderText("Contenido de la nota")
        self.contenido_edit.setStyleSheet("""
            QTextEdit {
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 14px;
            }
        """)
        layout_derecho.addWidget(self.contenido_edit)

        # Botones de acción
        botones_layout = QHBoxLayout()
        
        self.btn_guardar = QPushButton("Guardar")
        self.btn_guardar.setStyleSheet("""
            QPushButton {
                background-color: #2196F3;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #1976d2;
            }
        """)
        self.btn_guardar.clicked.connect(self.guardar_nota)
        
        self.btn_eliminar = QPushButton("Eliminar")
        self.btn_eliminar.setStyleSheet("""
            QPushButton {
                background-color: #f44336;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #d32f2f;
            }
        """)
        self.btn_eliminar.clicked.connect(self.eliminar_nota)
        
        botones_layout.addWidget(self.btn_guardar)
        botones_layout.addWidget(self.btn_eliminar)
        layout_derecho.addLayout(botones_layout)

        # Agregar paneles al layout principal
        layout_principal.addWidget(panel_izquierdo, 1)
        layout_principal.addWidget(panel_derecho, 2)

        # Estado inicial
        self.nota_actual = None
        self.actualizar_estado_editor()

    def cargar_notas(self):
        self.lista_notas.clear()
        for nota in self.manager.listar_notas():
            item = self.lista_notas.addItem(nota.titulo)
            self.lista_notas.item(self.lista_notas.count() - 1).setData(Qt.UserRole, nota.id)

    def crear_nota(self):
        self.nota_actual = None
        self.titulo_edit.clear()
        self.contenido_edit.clear()
        self.actualizar_estado_editor()

    def mostrar_nota(self, item):
        id_nota = item.data(Qt.UserRole)
        self.nota_actual = self.manager.obtener_nota(id_nota)
        if self.nota_actual:
            self.titulo_edit.setText(self.nota_actual.titulo)
            self.contenido_edit.setText(self.nota_actual.contenido)
            self.actualizar_estado_editor()

    def guardar_nota(self):
        titulo = self.titulo_edit.text().strip()
        contenido = self.contenido_edit.toPlainText().strip()

        if not titulo or not contenido:
            QMessageBox.warning(self, "Error", "El título y el contenido son obligatorios.")
            return

        if self.nota_actual:
            # Editar nota existente
            if self.manager.editar_nota(self.nota_actual.id, titulo, contenido):
                QMessageBox.information(self, "Éxito", "Nota actualizada correctamente.")
            else:
                QMessageBox.critical(self, "Error", "No se pudo actualizar la nota.")
        else:
            # Crear nueva nota
            nota = self.manager.crear_nota(titulo, contenido)
            if nota:
                QMessageBox.information(self, "Éxito", "Nota creada correctamente.")
                # Limpiar el formulario después de crear
                self.titulo_edit.clear()
                self.contenido_edit.clear()
                self.nota_actual = None
                self.actualizar_estado_editor()

        self.cargar_notas()

    def eliminar_nota(self):
        if not self.nota_actual:
            return

        respuesta = QMessageBox.question(
            self, "Confirmar", 
            "¿Estás seguro de que deseas eliminar esta nota?",
            QMessageBox.Yes | QMessageBox.No
        )

        if respuesta == QMessageBox.Yes:
            if self.manager.eliminar_nota(self.nota_actual.id):
                self.nota_actual = None
                self.titulo_edit.clear()
                self.contenido_edit.clear()
                self.actualizar_estado_editor()
                self.cargar_notas()
                QMessageBox.information(self, "Éxito", "Nota eliminada correctamente.")
            else:
                QMessageBox.critical(self, "Error", "No se pudo eliminar la nota.")

    def actualizar_estado_editor(self):
        modo_edicion = self.nota_actual is not None
        self.btn_eliminar.setEnabled(modo_edicion)
        self.btn_guardar.setText("Guardar" if modo_edicion else "Crear")

def main():
    app = QApplication(sys.argv)
    app.setStyle('Fusion')  # Estilo moderno
    
    # Configurar la fuente por defecto
    font = QFont("Segoe UI", 10)
    app.setFont(font)
    
    ventana = VentanaPrincipal()
    ventana.show()
    sys.exit(app.exec())

if __name__ == "__main__":
    main() 