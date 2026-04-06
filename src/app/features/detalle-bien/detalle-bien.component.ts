import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventarioService } from '../../infrastructure/services/inventario.service';

@Component({
  selector: 'app-detalle-bien',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-bien.component.html',
  styleUrl: './detalle-bien.component.scss'
})
export class DetalleBienComponent {
  private inventarioService = inject(InventarioService);

  public bien = signal({
    codigo: 'EQU-2024-001',
    nombre: 'Portátil Dell Latitude 5420',
    descripcion: 'Referencia técnica para auditoría de activos SENA',
    categoria: 'Equipos de Cómputo',
    stock: 15,
    stockMinimo: 5,
    valorUnitario: 4500000,
    estado: 'Activo',
    procesador: 'Intel Core i7 11th Gen',
    memoriaRam: '16GB DDR4',
    almacenamiento: '512GB SSD NVMe',
    sistemaOperativo: 'Windows 11 Pro',
    fechaCompra: '12 Ene 2024',
    depreciacion: '20%'
  });

  public movimientos = signal([
    { fecha: '14/05/2024', tipo: 'Entrada', responsable: 'Admin Central', ubicacion: 'Almacén General', cantidad: '+5', observacion: 'Reposición de stock anual' },
    { fecha: '22/04/2024', tipo: 'Salida', responsable: 'Coord. Sistemas', ubicacion: 'Laboratorio 302', cantidad: '-2', observacion: 'Asignación a nuevos instructores' },
    { fecha: '10/03/2024', tipo: 'Traslado', responsable: 'Gestión Activos', ubicacion: 'Sede Norte', cantidad: '0', observacion: 'Mantenimiento preventivo trimestral' }
  ]);
}
