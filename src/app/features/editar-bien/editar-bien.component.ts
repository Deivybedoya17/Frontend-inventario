import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-bien',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './editar-bien.component.html',
  styleUrl: './editar-bien.component.scss'
})
export class EditarBienComponent {
  public bien = signal({
    nombre: 'Portátil Dell Latitude 5420',
    codigo: 'EQU-2024-001',
    categoria: 'Equipos de Cómputo',
    stock: 15,
    stockMinimo: 5,
    valorUnitario: '4.500.000',
    estado: 'Activo'
  });
}
