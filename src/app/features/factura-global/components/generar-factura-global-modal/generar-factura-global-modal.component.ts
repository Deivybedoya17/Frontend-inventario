import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generar-factura-global-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generar-factura-global-modal.component.html',
  styleUrls: ['./generar-factura-global-modal.component.scss']
})
export class GenerarFacturaGlobalModalComponent {
  @Output() cerrar = new EventEmitter<void>();
  @Output() generar = new EventEmitter<any>();

  public hoy = new Date().toLocaleDateString('es-CO');

  public solicitudes = signal([
    {
      id: 'GIL-F-014-2024-001',
      estadoError: true,
      mensajeError: 'Ya utilizado en otra factura',
      productosTotales: 2,
      productos: ['ALM-001 Harina', 'ALM-002 Aceite'],
      valor: '$844.900',
      seleccionada: false
    },
    {
      id: 'GIL-F-014-2024-002',
      estadoError: false,
      mensajeError: '',
      productosTotales: 2,
      productos: ['EQP-902 Monitor', 'EQP-903 Teclado'],
      valor: '$520.000',
      seleccionada: true
    },
    {
      id: 'GIL-F-014-2024-003',
      estadoError: false,
      mensajeError: '',
      productosTotales: 2,
      productos: ['MAT-045 Acero', 'MAT-046 Pintura'],
      valor: '$680.000',
      seleccionada: false
    }
  ]);

  onCerrar() {
    this.cerrar.emit();
  }

  toggleSeleccion(index: number) {
    if (this.solicitudes()[index].estadoError) return;
    
    this.solicitudes.update(sols => {
      sols[index].seleccionada = !sols[index].seleccionada;
      return [...sols];
    });
  }

  onGenerar() {
    // Collect the selected ones and the observation, then emit
    this.generar.emit({
      solicitudes: this.solicitudes().filter(s => s.seleccionada),
      total: '$1.200.000' // Mock total
    });
    this.onCerrar();
  }
}
