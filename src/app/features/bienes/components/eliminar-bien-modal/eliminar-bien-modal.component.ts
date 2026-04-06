import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-bien-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eliminar-bien-modal.component.html',
  styleUrl: './eliminar-bien-modal.component.scss'
})
export class EliminarBienModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() confirmar = new EventEmitter<void>();

  cerrarModal() {
    this.close.emit();
  }

  confirmarEliminacion() {
    this.confirmar.emit();
    this.close.emit();
  }
}
