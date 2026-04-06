import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-bien-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registrar-bien-modal.component.html',
  styleUrl: './registrar-bien-modal.component.scss'
})
export class RegistrarBienModalComponent {
  @Output() close = new EventEmitter<void>();

  cerrarModal() {
    this.close.emit();
  }
}
