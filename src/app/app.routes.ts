import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./features/phases/phases.component').then((m) => m.PhasesComponent),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./features/reporting/reporting.component').then((m) => m.ReportingComponent),
  },
  {
    path: 'projects/:id/report',
    loadComponent: () =>
      import('./features/reporting/reporting.component').then((m) => m.ReportingComponent),
  },
  {
    path: 'admin/users',
    loadComponent: () => import('./features/admin/admin.component').then((m) => m.AdminComponent),
  },
  { path: '**', redirectTo: 'dashboard' },
];
