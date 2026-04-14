import { LucideAngularModule } from 'lucide-angular';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent {
}
