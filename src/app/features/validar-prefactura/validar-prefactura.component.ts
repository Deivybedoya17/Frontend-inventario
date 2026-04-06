import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-validar-prefactura',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './validar-prefactura.component.html',
  styleUrls: ['./validar-prefactura.component.scss']
})
export class ValidarPrefacturaComponent {
  public data = signal({
    numero: 'PF-2024-002',
    proveedor: 'Emerald Logistics S.A.S',
    fechaEmision: '24 Oct 2023',
    centroCostos: 'Almacén Central - Norte',
    responsable: 'Carlos Arturo Peña',
    moneda: 'COP - Peso Colombiano',
    metodoPago: 'Crédito 30 días',
    subtotal: 13340000,
    iva: 2534600,
    total: 15874600,
    estado: 'PENDIENTE DE REVISIÓN'
  });

  public items = signal([
    {
      id: "HW-9920-A",
      descripcion: 'Monitor UltraWide 34"',
      icono: 'computer',
      cantidad: 5,
      precioUnitario: 1450000,
      subtotal: 7250000,
      alerta: null
    },
    {
      id: "HW-4412-K",
      descripcion: 'Teclado Mecánico Pro',
      icono: 'keyboard',
      cantidad: 12,
      precioUnitario: 320000,
      subtotal: 3840000,
      alerta: null
    },
    {
      id: "Bajo Stock",
      descripcion: 'Cable HDMI 4K - Gold',
      icono: 'warning',
      cantidad: 50,
      precioUnitario: 45000,
      subtotal: 2250000,
      alerta: 'Bajo Stock en Origen'
    }
  ]);
}
