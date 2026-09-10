import { Component } from '@angular/core';
import { EmployeeForm } from "../employee-form/employee-form";
import { EmployeeList } from '../employee-list/employee-list';

@Component({
  imports: [EmployeeForm, EmployeeList],
  selector: 'app-employee-card',
  styleUrl: './employee-card.scss',
  templateUrl: './employee-card.html',
})
export class EmployeeCard {
  employeeIdToUpdate: any = []
  listOfEmployee: any = [];
  handleEmployeeList(list: any) {
    console.log(list);

    this.listOfEmployee = list;
  }
}
