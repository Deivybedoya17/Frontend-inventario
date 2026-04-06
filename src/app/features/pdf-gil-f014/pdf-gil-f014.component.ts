import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-pdf-gil-f014',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pdf-gil-f014.component.html',
  styleUrls: ['./pdf-gil-f014.component.scss']
})
export class PdfGilF014Component {
  
  constructor(private router: Router) {}

  cerrarVistaPrevia() {
    this.router.navigate(['/detalle-gil-f014']);
  }

  descargar() {
    // Simulando descarga
    alert('Descargando archivo PDF...');
  }
}
