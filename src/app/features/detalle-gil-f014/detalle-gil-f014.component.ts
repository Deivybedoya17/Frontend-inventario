import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle-gil-f014',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-gil-f014.component.html',
  styleUrls: ['./detalle-gil-f014.component.scss']
})
export class DetalleGilF014Component {
  public solicitud = signal({
    id: 'GIL-F-014-2024-001',
    estado: 'Borrador',
    fechaCreacion: '24 Oct 2024',
    total: '$1.240.000',
    responsable: {
      iniciales: 'CR',
      nombre: 'Carlos Alberto Ruiz'
    },
    infoGeneral: {
      regional: 'Antioquia',
      centroFormacion: 'Centro de Diseño y Manufactura del Cuero',
      areaPrograma: 'Mantenimiento Electromecánico Industrial',
      cuentadante: 'Marta Lucía Gómez',
      destino: 'Ambiente de Soldadura - Sede Itagüí'
    },
    preFacturas: [
      {
        id: 'PROV-9982-2024',
        proveedor: 'Herramientas Industriales SAS',
        total: '$850.000',
        items: [
          { des: 'Juego de Llaves Allen - Industrial Grade', cant: 2, unit: '$125.000', sub: '$250.000' },
          { des: 'Pulidora Angular 4.5" 1200W', cant: 2, unit: '$300.000', sub: '$600.000' }
        ]
      },
      {
        id: 'PROV-4412-2024',
        proveedor: 'Dotaciones del Norte Ltda.',
        total: '$390.000',
        items: [
          { des: 'Careta Electrónica para Soldar Pro-T', cant: 3, unit: '$130.000', sub: '$390.000' }
        ]
      }
    ],
    observaciones: '"La presente solicitud se realiza para la reposición de herramientas y equipo de protección personal del ambiente de soldadura. El equipo actual presenta un desgaste superior al 80%, lo cual afecta la calidad de los procesos de formación y la seguridad de los aprendices de la ficha 2503201."'
  });
}
