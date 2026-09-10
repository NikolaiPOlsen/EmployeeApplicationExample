import { Routes } from '@angular/router';
import { HomePage } from './Pages/home-page/home-page';
import { EmployeePage } from './Pages/employee-page/employee-page';

export const routes: Routes = [
  { path: '', component: HomePage},
  { path: 'about', loadComponent: () => import('./Pages/about-page/about-page').then(m => m.AboutPage) },
  { path: 'contact', loadComponent: () => import('./Pages/contact-page/contact-page').then(m => m.ContactPage) },
  { path: 'employees', component: EmployeePage},
    ];

