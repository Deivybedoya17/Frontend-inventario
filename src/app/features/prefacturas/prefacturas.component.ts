import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventarioService } from '../../infrastructure/services/inventario.service';

import { EliminarPrefacturaModalComponent } from './components/eliminar-prefactura-modal/eliminar-prefactura-modal.component';

@Component({
  selector: 'app-prefacturas',
  standalone: true,
  imports: [CommonModule, RouterModule, EliminarPrefacturaModalComponent],
  templateUrl: './prefacturas.component.html',
  styleUrls: ['./prefacturas.component.scss']
})
export class PrefacturasComponent {
  private inventarioService = inject(InventarioService);
  public prefacturas = this.inventarioService.getters.prefacturas;

  public metricas = signal({
    total: 2,
    pendientes: 1,
    validadas: 1,
    valorTotal: '$1.273.300'
  });

  public filas = signal([
    {
      numero: 'PF-2024-001',
      fecha: '12 Oct 2024',
      programa: 'ADSO',
      programaColor: 'primario',
      instructor: 'Carlos Mario Restrepo',
      estado: 'Validada',
      total: '$850.000'
    },
    {
      numero: 'PF-2024-002',
      fecha: '15 Oct 2024',
      programa: 'Multimedia',
      programaColor: 'secundario',
      instructor: 'Beatriz Helena López',
      estado: 'Pendiente',
      total: '$423.300'
    }
  ]);

  public mostrarModalEliminar = signal(false);
  public prefacturaSeleccionada = signal<string>('');

  abrirModalEliminar(id: string) {
    this.prefacturaSeleccionada.set(id);
    this.mostrarModalEliminar.set(true);
  }

  cerrarModalEliminar() {
    this.mostrarModalEliminar.set(false);
    this.prefacturaSeleccionada.set('');
  }

  confirmarEliminacion() {
    // Aquí iría la lógica HTTP posteriormente
    this.filas.update(filas => filas.filter(f => f.numero !== this.prefacturaSeleccionada()));
    this.cerrarModalEliminar();
  }
}
