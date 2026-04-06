import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-importar-prefactura',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './importar-prefactura.component.html',
  styleUrls: ['./importar-prefactura.component.scss']
})
export class ImportarPrefacturaComponent {
  public dataPreview = signal([
    {
      numero: 'PF-2023-001',
      fecha: '20/10/2023',
      programa: 'ADSO - 2503412',
      instructor: 'Carlos Mario Ruiz',
      estatus: 'v\u00E1lido',
      error: false
    },
    {
      numero: 'PF-2023-002',
      fecha: '21/10/2023',
      programa: 'Mec\u00E1nica Dental',
      instructor: 'Elena Zapata',
      estatus: 'v\u00E1lido',
      error: false
    },
    {
      numero: 'PF-2023-003',
      fecha: '22/10/2023',
      programa: 'Culinaria B\u00E1sica',
      instructor: 'Jorge Ivan Pe\u00F1a',
      estatus: 'error',
      error: true
    }
  ]);
}
