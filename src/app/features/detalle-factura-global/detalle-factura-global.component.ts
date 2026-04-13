import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle-factura-global',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-factura-global.component.html',
  styleUrls: ['./detalle-factura-global.component.scss']
})
export class DetalleFacturaGlobalComponent {
  public factura = signal({
    id: '#FG-2026-002',
    fechaEmision: '24 Oct, 2026',
    generadaPor: 'S. Rodríguez',
    estado: 'Generada',
    valorTotal: '$1.364.900',
    solicitudes: [
      {
        codigo: '#GIL-2026-089',
        fecha: '20 Oct, 2026',
        instructor: { iniciales: 'JP', nombre: 'Juan Pérez' },
        monto: '$450.000'
      },
      {
        codigo: '#GIL-2026-091',
        fecha: '21 Oct, 2026',
        instructor: { iniciales: 'MG', nombre: 'Marta Gómez' },
        monto: '$324.900'
      },
      {
        codigo: '#GIL-2026-094',
        fecha: '22 Oct, 2026',
        instructor: { iniciales: 'RC', nombre: 'Ricardo Cano' },
        monto: '$180.000'
      },
      {
        codigo: '#GIL-2026-095',
        fecha: '23 Oct, 2026',
        instructor: { iniciales: 'LC', nombre: 'Lucía Castro' },
        monto: '$410.000'
      }
    ],
    auditoria: [
      {
        titulo: 'Factura Generada',
        descripcion: 'El sistema consolidó 4 solicitudes y generó el documento final.',
        fechaHora: '24 Oct, 2026 — 09:34 AM',
        usuario: 'S. RODRÍGUEZ',
        estado: 'hecho' // hecho, actual, pendiente
      },
      {
        titulo: 'Validación de Presupuesto',
        descripcion: 'Verificando disponibilidad de fondos en el centro de costos.',
        fechaHora: '24 Oct, 2026 — 09:40 AM',
        usuario: 'SISTEMA',
        estado: 'actual'
      },
      {
        titulo: 'Firma de Sub-dirección',
        descripcion: 'Pendiente de firma digital por parte de la subdirección administrativa.',
        fechaHora: '',
        usuario: '',
        estado: 'pendiente'
      }
    ]
  });
}
