import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-gil-f014',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crear-gil-f014.component.html',
  styleUrls: ['./crear-gil-f014.component.scss']
})
export class CrearGilF014Component {
  public prefacturas = signal([
    {
      id: "PF-2024-001",
      area: "Cocina - María González",
      itemsQty: 2,
      total: "$844.900",
      items: [
        "ALM-001 - Harina de Trigo x 50kg",
        "CON-442 - Aceite Vegetal Bidón 20L"
      ],
      selected: true
    },
    {
      id: "PF-2024-004",
      area: "Repostería - Ana López",
      itemsQty: 2,
      total: "$520.000",
      items: [
        "ALM-005 - Azúcar Refinada Bulto",
        "CON-109 - Esencia de Vainilla Litro"
      ],
      selected: false
    }
  ]);

  toggleSelection(pf: any) {
    pf.selected = !pf.selected;
  }
}
