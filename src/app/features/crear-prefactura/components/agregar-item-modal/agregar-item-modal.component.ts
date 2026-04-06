import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-item-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agregar-item-modal.component.html',
  styleUrls: ['./agregar-item-modal.component.scss']
})
export class AgregarItemModalComponent {
  @Output() close = new EventEmitter<void>();

  cerrarModal() {
    this.close.emit();
  }
}
