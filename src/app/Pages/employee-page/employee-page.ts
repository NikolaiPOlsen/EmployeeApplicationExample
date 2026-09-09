import { Component } from '@angular/core';
import { Header } from '../../AppComponent/header/header';
import { EmployeeCard } from '../../AppComponent/employee-card/employee-card';

@Component({
  imports: [Header, EmployeeCard],
  selector: 'app-employee-page',
  styleUrl: './employee-page.scss',
  templateUrl: './employee-page.html',
})
export class EmployeePage {}
