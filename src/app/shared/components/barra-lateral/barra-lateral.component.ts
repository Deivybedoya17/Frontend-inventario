import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})
export class BarraLateralComponent {
}
