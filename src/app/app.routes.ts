import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'demo1', loadComponent: () => import('./features/demo1.component')},
  { path: 'demo2', loadComponent: () => import('./features/demo2.component')},
  { path: 'demo3', loadComponent: () => import('./features/demo3.component')},
  { path: 'demo4', loadComponent: () => import('./features/demo4.component')},
  { path: 'demo5', loadComponent: () => import('./features/demo5.component')},
  { path: '', redirectTo: 'demo1', pathMatch: 'full'}
];
