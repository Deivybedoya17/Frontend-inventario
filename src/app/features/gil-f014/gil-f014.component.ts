import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EliminarGilF014ModalComponent } from './components/eliminar-gil-f014-modal/eliminar-gil-f014-modal.component';

@Component({
  selector: 'app-gil-f014',
  standalone: true,
  imports: [CommonModule, RouterModule, EliminarGilF014ModalComponent],
  templateUrl: './gil-f014.component.html',
  styleUrls: ['./gil-f014.component.scss']
})
export class GilF014Component {
  public kpis = signal({
    total: 128,
    borradores: 14,
    registradas: 42,
    aprobadas: 72
  });

  public solicitudes = signal([
    {
      codigo: 'GIL-F-014-2024-001',
      fecha: '24 Oct, 2024',
      solicitante: 'Carlos Alberto Ruiz',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO5Wyvh23jO0OnDBUeV1Mjkl07rIx9sSLnfBeIK3ER4v9ntgG73iNi6GqaxbReQgkQLEfiyi6wwdrrK4H7YAWB03cnPC83fNVYkLmNqDBb4nfHysQPupOyaQkLxvYvmuQOyeproRaSGJV1Zqjyziei8A9d2fNA7JhH0KlgZbjVsRwRWSXjS_6CKdg6BxlMKhL0OhWwGpBuDuaUrI7Kilgs63PYbMgYf5XHGNSapcaPD5Est4VKNt7Um4I8dPV_vX3eieHMG8eWGoyn',
      grupo: 'ADSO-2670687',
      estado: 'Borrador',
      total: '$1.240.000'
    },
    {
      codigo: 'GIL-F-014-2024-002',
      fecha: '22 Oct, 2024',
      solicitante: 'Martha Lucía Gomez',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlIg4i8ABmeY0wk8qE_YZ7jP9mgl-pUVPoB7jL0oECdUnIiCHuMv-WsfaexBDjrjB_VvnJCkuhjmeuzAVLrAWUGW1PumZmi9lMMsGf3XIJ3VBPBlrPckgksbPj6h9JUdW0o5BvNVNFZwI3XEl8Ly7dbGeU8WFcqgbqeniwvOQc6doEaJvoaRj0kTWV-BQKSVE7L1EJoiKPJI54c6Dbdd9Au7je-3CpWRfpPgR7fU4wFQ-zdulsONpOf9fOlJTQv8_4w6cpvS5O0Dte',
      grupo: 'MANT-2550122',
      estado: 'Registrada',
      total: '$450.500'
    },
    {
      codigo: 'GIL-F-014-2024-003',
      fecha: '20 Oct, 2024',
      solicitante: 'Fernando Vallejo',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpBlpB1_VvYLmWEJ06fex_vi8nuXrK_vBC_03qSRiEBq_Bi-jpc2I4l7HGvt6aOfaBRFNhWCe22SyUTkF5rpU7R__NDl8vHWza1mvwmLH-UJcoLw4Zlnhmkn31ADQZOvvpDkFY0GW1TphlucwgIwptjWVIrsGOiAZPbiZ6MSWkyAMZzExmsQscbnUCI0duHAAks9JuZGu6lZhfkeH9Gej_vHBqV-X_TPdebzOUOLs6apf7ON19_iNBASn5AJS6qaJA333cgePf1FXD',
      grupo: 'GEST-2899341',
      estado: 'Aprobada',
      total: '$2.890.000'
    }
  ]);

  public mostrarModalEliminar = signal(false);
  public gilAEliminar = signal<{id: string} | null>(null);

  abrirModalEliminar(gil: any) {
    this.gilAEliminar.set({ id: gil.codigo });
    this.mostrarModalEliminar.set(true);
  }

  cerrarModalEliminar() {
    this.mostrarModalEliminar.set(false);
    this.gilAEliminar.set(null);
  }

  confirmarEliminacion() {
    console.log('Eliminando', this.gilAEliminar()?.id);
    this.cerrarModalEliminar();
  }
}
