import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioService } from '../../infrastructure/services/inventario.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private inventarioService = inject(InventarioService);

  // Getter signals from service
  public getters = this.inventarioService.getters;

  ngOnInit(): void {
    // En una aplicación real usaríamos observables para cargar,
    // pero aquí ya tenemos los datos mockeados iniciales.
  }
}
