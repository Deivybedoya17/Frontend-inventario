import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExportarFacturasGlobalesModalComponent } from './components/exportar-facturas-globales-modal/exportar-facturas-globales-modal.component';
import { GenerarFacturaGlobalModalComponent } from './components/generar-factura-global-modal/generar-factura-global-modal.component';
import { AnularFacturaGlobalModalComponent } from './components/anular-factura-global-modal/anular-factura-global-modal.component';

@Component({
  selector: 'app-factura-global',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    ExportarFacturasGlobalesModalComponent,
    GenerarFacturaGlobalModalComponent,
    AnularFacturaGlobalModalComponent
  ],
  templateUrl: './factura-global.component.html',
  styleUrls: ['./factura-global.component.scss']
})
export class FacturaGlobalComponent {
  public kpis = signal({
    total: 1284,
    generadas: 942,
    enviadas: 318,
    valorConsolidado: '$ 458.2M'
  });

  public facturas = signal([
    {
      numero: 'FG-2024-001',
      fecha: '12 Oct 2024',
      solicitudes: ['G-014-882', 'G-014-910'],
      estado: 'Generada',
      total: '$ 12.450.000',
      usuario: { nombre: 'M. Rodríguez', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt2RDZ5qyTX_4fDhCu2vUS7sNTe_FvLWU-dWPhO8mE6Z-0rRKw5SoOkpZrnoRxdcZG6mt0owGDvWYtMMFbeoKIr_G6jbEgdzAf6HN3vVpobZVzSiPLWE6mxvnY49teFxFInT0iyTfUTjWpi_j8UIwCn_MOyPtYREfrto2YtFxgEIStxXPDfP7aSPj_14E_JPQ6k17nlcCzyAElotRokdkjevdcbKP5YulYMbnb8fA2EMvsco4rqCQzDUAn7JKmVGtCXy_savLyJ2VG' }
    },
    {
      numero: 'FG-2024-002',
      fecha: '10 Oct 2024',
      solicitudes: ['G-014-815'],
      estado: 'Enviada',
      total: '$ 4.820.000',
      usuario: { nombre: 'A. García', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7uVpFLzHWB_UU-pX-8wADERO_hdNTJHNtf5yMRPgyj6PYD10hIhA47sXefRkA-5n1uhc_yONstmfhJAdG86_Z4FoYtGScjjInmvySEV2Htp1YjCDYWu8YHxoz5NvsqiGAUp1yHcS68Sne3dRl6pP5o0MpIzLxm03WQAXt1TN_SiEelPth-2NQLA0nFLwpqQBeny55buEk1CYp9RMeVMgRiGgjC1c_9COaCQV4z1LuF27tkHMsBz7F-YT7TqxaFGels3S_Y1JRVQZz' }
    },
    {
      numero: 'FG-2024-003',
      fecha: '08 Oct 2024',
      solicitudes: ['G-014-772', 'G-014-790', 'G-014-791'],
      estado: 'Anulada',
      total: '$ 28.910.000',
      usuario: { nombre: 'L. Sánchez', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqwoZ1qfuc2A8UfZPjM29AWdqlN40MLqiP5n6Se7I7XpEt6bjTIzuF65LAlzvK68U_rm8Qwp10v7GKYNc5bo2IF9LmQEAQu1OWH54oXyiHiwKDu9S9Pm_cvcipibrawjiLT3MyjSNg791lAyF3Mo4Oq8F0a2QoOypsYQoq9lWcFnGE9TL0vLdXiaNx8g1I6kjpbLQJBHpnUQAol7amVxYiI3fk9kQYIOQ8RpNIVbc8sjO9cZai9Y0dvHJc-9hZaOnzW0qohjTpgm3M' }
    },
    {
      numero: 'FG-2024-004',
      fecha: '05 Oct 2024',
      solicitudes: ['G-014-722'],
      estado: 'Generada',
      total: '$ 9.150.000',
      usuario: { nombre: 'M. Rodríguez', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzr1tVkaK9wNW5bhi8BlGbBFnrNyZAQmO7Eub9Ly4QVEoml9ifjsHoOhDIUSz6XNB9tUlHUqLIn_-mmxXEzUtQbdSJF6ZtAqSTZnJNXjppTYJGkd2-DjrtyKXq1WOaWWXLj1wtVO1vFInfLQ9nqmMKkjWP2gfn44eSeB1LAxvK-OAznQRRt6ESTi9ibg9AD1Ra8KJAq73S1nZ5ZYVefuYVoR63iyM8SBmTSdF36D3mXrECEtOHlA5Wxk-gKfYyqnXqB98OyDdi0olu' }
    }
  ]);

  public filtroActivo = signal('Todas');
  public opcionesFiltro = ['Todas', 'Generada', 'Enviada', 'Anulada'];

  // Modales Handle
  public mostrarModalExportar = signal(false);
  public mostrarModalGenerar = signal(false);
  public mostrarModalAnular = signal(false);
  public facturaSeleccionada = signal<any>(null);

  setFiltro(filtro: string) {
    this.filtroActivo.set(filtro);
  }

  abrirExportar() {
    this.mostrarModalExportar.set(true);
  }

  cerrarExportar() {
    this.mostrarModalExportar.set(false);
  }

  abrirGenerar() {
    this.mostrarModalGenerar.set(true);
  }

  cerrarGenerar() {
    this.mostrarModalGenerar.set(false);
  }

  abrirAnular(factura: any) {
    if (factura.estado === 'Anulada') return;
    this.facturaSeleccionada.set(factura);
    this.mostrarModalAnular.set(true);
  }

  cerrarAnular() {
    this.mostrarModalAnular.set(false);
    this.facturaSeleccionada.set(null);
  }
}
