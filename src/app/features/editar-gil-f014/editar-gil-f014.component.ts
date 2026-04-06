import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-gil-f014',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './editar-gil-f014.component.html',
  styleUrls: ['./editar-gil-f014.component.scss']
})
export class EditarGilF014Component {
  
  constructor(private router: Router) {}

  public solicitud = {
    solicitante: {
      nombre: 'Carlos Alberto Ruiz',
      identificacion: '1.098.345.221',
      centro: 'Centro de Servicios y Gestión Empresarial',
      cargo: 'Instructor Técnico'
    },
    bien: {
      descripcion: 'Portátil Dell Latitude 5420 - Procesador i7, 16GB RAM',
      placa: 'SENA-IV-2023-456',
      serie: 'CZS984210L',
      estado: 'Excelente',
      fecha: '2023-05-15'
    }
  };

  guardarCambios() {
    this.router.navigate(['/detalle-gil-f014']);
  }
}
