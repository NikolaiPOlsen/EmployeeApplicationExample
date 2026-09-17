import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { EmployeePage } from './pages/employee-page/employee-page';

export const routes: Routes = [
  { path: '', component: HomePage},
  { path: 'about', loadComponent: () => import('./pages/about-page/about-page').then(m => m.AboutPage) },
  { path: 'contact', loadComponent: () => import('./pages/contact-page/contact-page').then(m => m.ContactPage) },
  { path: 'employees', component: EmployeePage},
  { path: 'posts', loadChildren: () => import('./pages/post-pages/modules/post.module').then(m => m.PostPageModule) },
    ];
