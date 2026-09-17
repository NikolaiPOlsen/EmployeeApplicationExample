import { Component } from '@angular/core';
import { EmployeeForm } from "../employee-form/employee-form";
import { EmployeeList } from '../employee-list/employee-list';
import { EmployeeData } from '../../employee-data';

@Component({
  selector: 'app-employee-card',
  styleUrl: './employee-card.scss',
  templateUrl: './employee-card.html',
  standalone: false,
})
export class EmployeeCard {
  employeeToUpdate: EmployeeData | null = null;
  listOfEmployee: any = [];
  handleEmployeeList(list: any) {

    this.listOfEmployee = list;
  }
}
