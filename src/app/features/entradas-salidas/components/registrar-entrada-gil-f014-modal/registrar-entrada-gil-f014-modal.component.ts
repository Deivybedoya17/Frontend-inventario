import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-entrada-gil-f014-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registrar-entrada-gil-f014-modal.component.html',
  styleUrls: ['./registrar-entrada-gil-f014-modal.component.scss']
})
export class RegistrarEntradaGilF014ModalComponent {
  @Output() cerrar = new EventEmitter<void>();

  public itemsPreview = signal([
    {
      nombre: 'Portátil Corporativo Core i7',
      icono: 'laptop_mac',
      solicitado: 15,
      recibido: 15
    },
    {
      nombre: 'Mouse Ergonómico Inalámbrico',
      icono: 'mouse',
      solicitado: 20,
      recibido: 20
    },
    {
      nombre: 'Monitor 27" 4K UHD',
      icono: 'desktop_windows',
      solicitado: 10,
      recibido: 8
    }
  ]);

  onCerrar() {
    this.cerrar.emit();
  }

  onRegistrarEntrada() {
    this.cerrar.emit();
  }
}
