import { Component, OnDestroy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { EmployeeData } from '../../employee-data';
import { EmployeeDataService } from '../../employee.data.service';
import { Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header implements OnInit, OnDestroy {
  employees: EmployeeData[] = [];
  //private employeeSub!: Subscription;

  constructor(
  public employeeDataService: EmployeeDataService) {}

  ngOnInit(): void {
    //this.employeeSub = this.employeeDataService.getEmployeeListData().subscribe((employees: EmployeeData[]) => {
      //this.employees = employees;
    //})
  }

    ngOnDestroy(): void {
    //this.employeeSub.unsubscribe();
  }
}
