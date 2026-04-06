import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventarioService } from '../../infrastructure/services/inventario.service';
import { RegistrarBienModalComponent } from './components/registrar-bien-modal/registrar-bien-modal.component';
import { EliminarBienModalComponent } from './components/eliminar-bien-modal/eliminar-bien-modal.component';

@Component({
  selector: 'app-bienes',
  standalone: true,
  imports: [CommonModule, RouterModule, RegistrarBienModalComponent, EliminarBienModalComponent],
  templateUrl: './bienes.component.html',
  styleUrls: ['./bienes.component.scss']
})
export class BienesComponent {
  private inventarioService = inject(InventarioService);

  public bienes = this.inventarioService.getters.bienes;
  public getters = this.inventarioService.getters;

  public isModalOpen = signal(false);
  public isDeleteModalOpen = signal(false);

  abrirModal() {
    this.isModalOpen.set(true);
  }

  abrirDeleteModal() {
    this.isDeleteModalOpen.set(true);
  }
}
