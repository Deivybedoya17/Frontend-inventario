import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anular-factura-global-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anular-factura-global-modal.component.html',
  styleUrls: ['./anular-factura-global-modal.component.scss']
})
export class AnularFacturaGlobalModalComponent {
  @Input() factura: any;
  @Output() cerrar = new EventEmitter<void>();
  @Output() anular = new EventEmitter<any>();

  onCerrar() {
    this.cerrar.emit();
  }

  onAnular() {
    this.anular.emit(this.factura);
    this.onCerrar();
  }
}
