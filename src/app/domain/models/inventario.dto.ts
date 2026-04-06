export interface BienDto {
  id: string;
  codigo: string;
  nombre: string;
  descripcion?: string;
  categoria: string;
  categoriaColor?: 'azul' | 'ambar' | 'verde' | 'gris';
  stock: number;
  stockMinimo: number;
  valorUnitario: number;
  estado: 'Activo' | 'Bajo Stock' | 'Inactivo';
  fechaIngreso: string;
}

export interface CrearBienDto extends Omit<BienDto, 'id'> {}

export interface MovimientoDto {
  id: string;
  bien: string;
  tipo: 'Entrada' | 'Salida';
  responsable: string;
  fecha: string;
  cantidad: number;
}

export interface AlertaStockDto {
  id: string;
  bien: string;
  cantidadActual: number;
  cantidadMinima: number;
}

export interface PrefacturaDto {
  id: string;
  numero: string;
  proveedor: string;
  fecha: string;
  total: number;
  estado: 'Pendiente' | 'Aprobada' | 'Rechazada';
  items: number;
}
