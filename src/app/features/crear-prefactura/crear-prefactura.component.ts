import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgregarItemModalComponent } from './components/agregar-item-modal/agregar-item-modal.component';

@Component({
  selector: 'app-crear-prefactura',
  standalone: true,
  imports: [CommonModule, RouterModule, AgregarItemModalComponent],
  templateUrl: './crear-prefactura.component.html',
  styleUrls: ['./crear-prefactura.component.scss']
})
export class CrearPrefacturaComponent {
  public isAgregarItemModalOpen = signal(false);

  public items = signal([
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      descripcion: 'Tornillo de Banco 6" Acero Forjado',
      cantidad: 15.50,
      precioAdjudicado: 150000.00,
      subtotal: 2325000.00
    },
    {
      id: "987e6543-e21b-34d5-a654-426614174111",
      descripcion: 'Gafas de Seguridad Anti-empañante',
      cantidad: 5.00,
      precioAdjudicado: 45000.00,
      subtotal: 225000.00
    }
  ]);

  abrirModal() {
    this.isAgregarItemModalOpen.set(true);
  }

  cerrarModal() {
    this.isAgregarItemModalOpen.set(false);
  }

  eliminarItem(index: number) {
    const currentItems = [...this.items()];
    currentItems.splice(index, 1);
    this.items.set(currentItems);
  }
}
