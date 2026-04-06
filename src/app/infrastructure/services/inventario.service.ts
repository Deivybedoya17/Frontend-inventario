import { Injectable, signal, computed } from '@angular/core';
import { BienDto, MovimientoDto, AlertaStockDto, PrefacturaDto } from '../../domain/models/inventario.dto';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private bienesSignal = signal<BienDto[]>([
    {
      id: '1',
      codigo: 'EQU-2024-001',
      nombre: 'Portátil Dell Latitude 5420',
      descripcion: 'Core i7, 16GB RAM, 512GB SSD',
      categoria: 'Equipos de Cómputo',
      categoriaColor: 'azul',
      stock: 15,
      stockMinimo: 5,
      valorUnitario: 4500000,
      estado: 'Activo',
      fechaIngreso: '2024-01-10'
    },
    {
      id: '2',
      codigo: 'PAP-2024-042',
      nombre: 'Papel Bond Carta 75g (Resma)',
      descripcion: 'Caja x 10 resmas',
      categoria: 'Papelería',
      categoriaColor: 'ambar',
      stock: 4,
      stockMinimo: 10,
      valorUnitario: 120000,
      estado: 'Bajo Stock',
      fechaIngreso: '2024-02-15'
    },
    {
      id: '3',
      codigo: 'MOB-2024-008',
      nombre: 'Silla Ergonómica de Oficina',
      descripcion: 'Soporte lumbar ajustable, tapicería en malla',
      categoria: 'Mobiliario',
      categoriaColor: 'verde',
      stock: 20,
      stockMinimo: 5,
      valorUnitario: 650000,
      estado: 'Activo',
      fechaIngreso: '2024-03-01'
    },
    {
      id: '4',
      codigo: 'HER-2024-015',
      nombre: 'Proyector Epson PowerLite',
      descripcion: '3500 lúmenes, HDMI, WiFi, Full HD',
      categoria: 'Audiovisuales',
      categoriaColor: 'gris',
      stock: 6,
      stockMinimo: 2,
      valorUnitario: 2800000,
      estado: 'Activo',
      fechaIngreso: '2024-03-20'
    }
  ]);

  private movimientosSignal = signal<MovimientoDto[]>([
    { id: '1', bien: 'Vino Reserva Especial', tipo: 'Entrada', responsable: 'Juan Pérez', fecha: 'Hoy, 10:45', cantidad: 24 },
    { id: '2', bien: 'Salmón Atlántico', tipo: 'Salida', responsable: 'Ana Martínez', fecha: 'Ayer, 18:20', cantidad: 12 },
    { id: '3', bien: 'Papel Toalla Industrial', tipo: 'Entrada', responsable: 'Carlos Ruiz', fecha: 'Ayer, 14:15', cantidad: 50 },
    { id: '4', bien: 'Detergente Lavavajillas', tipo: 'Salida', responsable: 'Elena Gómez', fecha: 'Oct 24, 09:30', cantidad: 5 }
  ]);

  private prefacturasSignal = signal<PrefacturaDto[]>([
    { id: '1', numero: 'PF-2023-001', proveedor: 'Comercializadora Global S.A.', fecha: '2023-10-25', total: 1250000, estado: 'Pendiente', items: 5 },
    { id: '2', numero: 'PF-2023-002', proveedor: 'Distribuciones Locales Ltda.', fecha: '2023-10-26', total: 450000, estado: 'Aprobada', items: 2 },
    { id: '3', numero: 'PF-2023-003', proveedor: 'Tecnología Avanzada Ltda.', fecha: '2023-10-27', total: 3200000, estado: 'Pendiente', items: 10 }
  ]);

  // Computed signals
  public getters = {
    bienes: computed(() => this.bienesSignal()),
    movimientos: computed(() => this.movimientosSignal()),
    prefacturas: computed(() => this.prefacturasSignal()),
    totalBienes: computed(() => this.bienesSignal().reduce((acc, b) => acc + b.stock, 0)),
    valorTotalInventario: computed(() => this.bienesSignal().reduce((acc, b) => acc + (b.stock * b.valorUnitario), 0)),
    alertasStock: computed(() =>
      this.bienesSignal()
        .filter(b => b.stock < b.stockMinimo)
        .map(b => ({ id: b.id, bien: b.nombre, cantidadActual: b.stock, cantidadMinima: b.stockMinimo } as AlertaStockDto))
    ),
    prefacturasPendientes: computed(() => this.prefacturasSignal().filter(pf => pf.estado === 'Pendiente').length)
  };

  public agregarBien(bien: BienDto): Observable<BienDto> {
    this.bienesSignal.update(bienes => [...bienes, bien]);
    return of(bien).pipe(delay(300));
  }
}
