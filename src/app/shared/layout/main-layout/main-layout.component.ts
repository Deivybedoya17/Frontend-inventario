import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BarraLateralComponent } from '../../components/barra-lateral/barra-lateral.component';
import { BarraSuperiorComponent } from '../../components/barra-superior/barra-superior.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, BarraLateralComponent, BarraSuperiorComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
}
