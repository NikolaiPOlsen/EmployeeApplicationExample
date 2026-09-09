import { Routes } from '@angular/router';
import { HomePage } from './Pages/home-page/home-page';
import { EmployeePage } from './Pages/employee-page/employee-page';

export const routes: Routes = [
  { path: '', component: EmployeePage },
];
