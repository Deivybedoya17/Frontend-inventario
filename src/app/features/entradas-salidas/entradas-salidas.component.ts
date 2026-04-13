import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrarEntradaProductoModalComponent } from './components/registrar-entrada-producto-modal/registrar-entrada-producto-modal.component';
import { RegistrarEntradaGilF014ModalComponent } from './components/registrar-entrada-gil-f014-modal/registrar-entrada-gil-f014-modal.component';
import { RegistrarSalidaProductoModalComponent } from './components/registrar-salida-producto-modal/registrar-salida-producto-modal.component';
import { ExportarHistorialMovimientosModalComponent } from './components/exportar-historial-movimientos-modal/exportar-historial-movimientos-modal.component';

@Component({
  selector: 'app-entradas-salidas',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    RegistrarEntradaProductoModalComponent,
    RegistrarEntradaGilF014ModalComponent,
    RegistrarSalidaProductoModalComponent,
    ExportarHistorialMovimientosModalComponent
  ],
  templateUrl: './entradas-salidas.component.html',
  styleUrls: ['./entradas-salidas.component.scss']
})
export class EntradasSalidasComponent {
  
  public kpis = signal({
    entradasHoy: { valor: 142, diff: '+12%', sub: 'Vs. ayer (127 unidades)' },
    salidasHoy: { valor: 86, diff: '-4%', sub: 'Vs. ayer (90 unidades)' },
    valorEntradas: { valor: '$4.2M', tag: 'Semana Actual', sub: 'Consolidado 7 días' },
    pendientes: { valor: '09', sub: 'Requieren verificación' }
  });

  public movimientos = signal([
    {
      tipo: 'Entrada', // 'Entrada' | 'Salida'
      producto: 'Cable UTP Cat 6a',
      sku: 'NET-CAT6A-01',
      cantidad: 150,
      unidad: 'Metros',
      fecha: '15 Oct 2023',
      hora: '09:45 AM',
      origenDestino: 'Proveedor: TechGlobal',
      usuario: { nombre: 'Carlos R.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL3CSTItfWD4YeP4tBropVQQpaGuPa1dotP9gmoMXb_luep_as6XrKjIMHF7Gm75BJmyYWMrxUBLXGhnJiy5un6CK5Vni9E91mIehrSLXot42IVkEwlRRDBnUQsB1PhGUQItONLUTjo5Rl-6hqamKz8QC-WQycvVKq80iGEyZyq0PFyxmu2e3fVVpY6PWCAh0MJpyHXL3FgfnPHnNa59w9EskgX0TLi3DJBdjd9BxAA6yN3nwxYS3a-I9ngkhGCpS5q3YDyHjMMH_4' },
      valor: '$450.000',
      estado: 'Completado'
    },
    {
      tipo: 'Salida',
      producto: 'Multímetro Digital Pro',
      sku: 'TOOL-DMM-05',
      cantidad: 12,
      unidad: 'Unidades',
      fecha: '15 Oct 2023',
      hora: '11:20 AM',
      origenDestino: 'Laboratorio de Electrónica',
      usuario: { nombre: 'Ana M.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNMHzfmgF59DFInpnjk8QDwlE7e63ugRaQNWIGkRGRtaymmwBQxnN43fziIYqgWKNogykd2btoq6WLCFwpQo0ZgH2gf-27RdZFwydDlyfVTYEwbXUVZ9lOJbCpYPDzIdPvy697tBvLiOURyAiNYARstveZoERy2CA5YW_rKs40yi4qa9EzFauyJX1BmnowHArorVTAi36KURiR4MMNdZ8oEX3E4W8GUeY7Lo5iaVUpGnWv2O3gJxYKOCbyjakslZQMVHNiTOQ8clSw' },
      valor: '$1.240.000',
      estado: 'Pendiente'
    },
    {
      tipo: 'Entrada',
      producto: 'Conector RJ45 blindado',
      sku: 'NET-RJ45-B',
      cantidad: 1000,
      unidad: 'Piezas',
      fecha: '14 Oct 2023',
      hora: '04:15 PM',
      origenDestino: 'Stock General',
      usuario: { nombre: 'SISTEMA', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHsz7jg8fgAAOqnqtKlay6aAvY61kcwQlVhdGuM9hQjtgk1Iprwm2PRI4v3atNrqpdUwP5jBqORYPtA79HfEys_dTBLhvUhWX90FJdp6eTOxIA5-25Hn_J6Bgq3S5zTQ_YJN1LrF1t3jd0xFN0S7oy4VmRDA31hFCaJjDfRMsz994JkonUsvplnNHA1-lToM3rP3MwQfH63Z8cgMuO8BHVR44I-TmMBq61vylWtMV6s8SB2Iu45kuA7pphREDzaTLpFpKAuKxK0ctv' },
      valor: '$85.000',
      estado: 'Completado'
    }
  ]);

  // Flags Modales
  public mostrarNuevaEntrada = signal(false);
  public mostrarNuevaSalida = signal(false);
  public mostrarEntradaGil = signal(false);
  public mostrarExportar = signal(false);

  abrirNuevaEntrada() {
    this.mostrarNuevaEntrada.set(true);
  }
  
  cerrarNuevaEntrada() {
    this.mostrarNuevaEntrada.set(false);
  }

  abrirNuevaSalida() {
    this.mostrarNuevaSalida.set(true);
  }

  cerrarNuevaSalida() {
    this.mostrarNuevaSalida.set(false);
  }

  abrirEntradaGil() {
    this.mostrarEntradaGil.set(true);
  }

  cerrarEntradaGil() {
    this.mostrarEntradaGil.set(false);
  }

  abrirExportar() {
    this.mostrarExportar.set(true);
  }

  cerrarExportar() {
    this.mostrarExportar.set(false);
  }
}
