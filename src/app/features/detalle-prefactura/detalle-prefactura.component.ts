import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle-prefactura',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-prefactura.component.html',
  styleUrls: ['./detalle-prefactura.component.scss']
})
export class DetallePrefacturaComponent {
  public data = signal({
    numero: 'PF-2024-001',
    instructor: 'Carlos Arturo Rodríguez',
    programa: 'Automatización Industrial y Robótica',
    fechaCreacion: '14 de Mayo, 2024',
    estado: 'Validada',
    referenciaInterna: 'INV-SEC-442',
    subtotal: 17950000,
    iva: 3410500,
    total: 21360500
  });

  public items = signal([
    {
      id: "SEN-LAB-001",
      descripcion: 'Osciloscopio Digital 100MHz',
      caracteristicas: 'Marca: Tektronix - Modelo: TBS1102B',
      cantidad: 2,
      precioUnitario: 2450000,
      subtotal: 4900000
    },
    {
      id: "SEN-LAB-012",
      descripcion: 'Fuente de Poder Regulada',
      caracteristicas: 'Triple Salida - Programable',
      cantidad: 3,
      precioUnitario: 850000,
      subtotal: 2550000
    },
    {
      id: "SEN-KIT-045",
      descripcion: 'Kit de Sensores Industriales',
      caracteristicas: 'Incluye: Inductivos, Capacitivos, Ópticos',
      cantidad: 5,
      precioUnitario: 1200000,
      subtotal: 6000000
    },
    {
      id: "SEN-HER-992",
      descripcion: 'Cautín Weller Professional',
      caracteristicas: 'Estación de Soldadura Digital',
      cantidad: 10,
      precioUnitario: 450000,
      subtotal: 4500000
    }
  ]);
}
