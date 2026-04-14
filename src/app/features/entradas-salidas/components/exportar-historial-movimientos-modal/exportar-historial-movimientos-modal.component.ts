import { LucideAngularModule } from 'lucide-angular';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exportar-historial-movimientos-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './exportar-historial-movimientos-modal.component.html',
  styleUrls: ['./exportar-historial-movimientos-modal.component.scss'],
  })
export class ExportarHistorialMovimientosModalComponent {
  @Output() cerrar = new EventEmitter<void>();

  public tipoSeleccionado = signal<'Entradas' | 'Salidas' | 'Ambos'>('Ambos');
  public formatoSeleccionado = signal<'Excel' | 'PDF' | 'CSV'>('Excel');

  onCerrar() {
    this.cerrar.emit();
  }

  setTipo(tipo: 'Entradas' | 'Salidas' | 'Ambos') {
    this.tipoSeleccionado.set(tipo);
  }

  setFormato(formato: 'Excel' | 'PDF' | 'CSV') {
    this.formatoSeleccionado.set(formato);
  }

  onExportar() {
    this.cerrar.emit();
  }
}
