import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-entrada-producto-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registrar-entrada-producto-modal.component.html',
  styleUrls: ['./registrar-entrada-producto-modal.component.scss']
})
export class RegistrarEntradaProductoModalComponent {
  @Output() cerrar = new EventEmitter<void>();

  onCerrar() {
    this.cerrar.emit();
  }

  // Lógica mockeada para registrar
  onRegistrar() {
    // Aquí iria el form group submit
    this.cerrar.emit();
  }
}
