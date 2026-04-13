import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-salida-producto-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registrar-salida-producto-modal.component.html',
  styleUrls: ['./registrar-salida-producto-modal.component.scss']
})
export class RegistrarSalidaProductoModalComponent {
  @Output() cerrar = new EventEmitter<void>();

  onCerrar() {
    this.cerrar.emit();
  }

  onRegistrarSalida() {
    this.cerrar.emit();
  }
}
