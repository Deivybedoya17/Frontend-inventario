import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'bienes',
        loadComponent: () => import('./features/bienes/bienes.component').then(m => m.BienesComponent)
      },
      {
        path: 'prefacturas',
        loadComponent: () => import('./features/prefacturas/prefacturas.component').then(m => m.PrefacturasComponent)
      },
      {
        path: 'crear-prefactura',
        loadComponent: () => import('./features/crear-prefactura/crear-prefactura.component').then(m => m.CrearPrefacturaComponent)
      },
      {
        path: 'validar-prefactura',
        loadComponent: () => import('./features/validar-prefactura/validar-prefactura.component').then(m => m.ValidarPrefacturaComponent)
      },
      {
        path: 'detalle-prefactura',
        loadComponent: () => import('./features/detalle-prefactura/detalle-prefactura.component').then(m => m.DetallePrefacturaComponent)
      },
      {
        path: 'importar-prefactura',
        loadComponent: () => import('./features/importar-prefactura/importar-prefactura.component').then(m => m.ImportarPrefacturaComponent)
      },
      {
        path: 'importar',
        loadComponent: () => import('./features/importar/importar.component').then(m => m.ImportarComponent)
      },
      {
        path: 'exportar',
        loadComponent: () => import('./features/exportar/exportar.component').then(m => m.ExportarComponent)
      },
      {
        path: 'detalle-bien',
        loadComponent: () => import('./features/detalle-bien/detalle-bien.component').then(m => m.DetalleBienComponent)
      },
      {
        path: 'editar-bien',
        loadComponent: () => import('./features/editar-bien/editar-bien.component').then(m => m.EditarBienComponent)
      },
      {
        path: 'gil-f014',
        loadComponent: () => import('./features/gil-f014/gil-f014.component').then(m => m.GilF014Component)
      },
      {
        path: 'crear-gil-f014',
        loadComponent: () => import('./features/crear-gil-f014/crear-gil-f014.component').then(m => m.CrearGilF014Component)
      },
      {
        path: 'detalle-gil-f014',
        loadComponent: () => import('./features/detalle-gil-f014/detalle-gil-f014.component').then(m => m.DetalleGilF014Component)
      },
      {
        path: 'editar-gil-f014',
        loadComponent: () => import('./features/editar-gil-f014/editar-gil-f014.component').then(m => m.EditarGilF014Component)
      },
      {
        path: 'pdf-gil-f014',
        loadComponent: () => import('./features/pdf-gil-f014/pdf-gil-f014.component').then(m => m.PdfGilF014Component)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
