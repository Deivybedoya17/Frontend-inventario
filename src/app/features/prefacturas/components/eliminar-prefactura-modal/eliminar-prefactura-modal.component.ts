import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-prefactura-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eliminar-prefactura-modal.component.html',
  styleUrls: ['./eliminar-prefactura-modal.component.scss']
})
export class EliminarPrefacturaModalComponent {
  @Input() open = false;
  @Input() prefacturaId: string = '';

  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }
}
