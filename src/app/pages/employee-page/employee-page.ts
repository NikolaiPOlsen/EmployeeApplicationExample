import { Component } from '@angular/core';
import { EmployeeCard } from '../../app-components/employee-card/employee-card';

@Component({
  imports: [ EmployeeCard],
  selector: 'app-employee-page',
  styleUrl: './employee-page.scss',
  templateUrl: './employee-page.html',
})
export class EmployeePage {}
