import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exportar-facturas-globales-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exportar-facturas-globales-modal.component.html',
  styleUrls: ['./exportar-facturas-globales-modal.component.scss']
})
export class ExportarFacturasGlobalesModalComponent {
  @Output() cerrar = new EventEmitter<void>();

  public formatoSeleccionado = signal('excel');
  public estados = signal([
    { nombre: 'Generada', seleccionado: true },
    { nombre: 'Enviada', seleccionado: true },
    { nombre: 'Anulada', seleccionado: false }
  ]);

  onCerrar() {
    this.cerrar.emit();
  }

  toggleEstado(index: number) {
    this.estados.update(ests => {
      ests[index].seleccionado = !ests[index].seleccionado;
      return [...ests];
    });
  }

  setFormato(formato: string) {
    this.formatoSeleccionado.set(formato);
  }

  exportar() {
    console.log('Exportando...', {
      formato: this.formatoSeleccionado(),
      estados: this.estados().filter(e => e.seleccionado).map(e => e.nombre)
    });
    this.onCerrar();
  }
}
