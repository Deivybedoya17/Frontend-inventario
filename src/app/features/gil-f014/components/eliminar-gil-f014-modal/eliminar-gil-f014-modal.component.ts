import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-gil-f014-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eliminar-gil-f014-modal.component.html',
  styleUrls: ['./eliminar-gil-f014-modal.component.scss']
})
export class EliminarGilF014ModalComponent {
  @Input() elementoId: string = '';
  @Output() confirmar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();

  onConfirmar() {
    this.confirmar.emit();
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
