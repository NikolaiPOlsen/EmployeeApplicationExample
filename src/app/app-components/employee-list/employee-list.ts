import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { EmployeeDataService } from '../../employee.data.service';
import { EmployeeData } from '../../employee-data';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Searchbar } from '../searchbar/searchbar';
import { IconButton } from '../buttons/icon-button/icon-button';
import { SearchFilter } from '../search-filter/search-filter';

@Component({
  selector: 'app-employee-list',
  styleUrl: './employee-list.scss',
  templateUrl: './employee-list.html',
  standalone: false,
})

export class EmployeeList implements OnInit, OnChanges, OnDestroy {

showFilter = false;

@Output() employeeSelectedForEdit = new EventEmitter<EmployeeData>();
@Input() recieveEmployeeList: any;

  employees: EmployeeData[] = [];
  private employeeSub!: Subscription

  constructor(
    public employeeDataService: EmployeeDataService) {};

  ngOnInit(): void {
    this.recieveEmployeeList = this.employeeDataService.returnList();
    //this.employeeSub = this.employeeDataService.getEmployeeListData().subscribe((employees: EmployeeData[]) => {
      //this.employees = employees;
      //console.log(this.employees)
      //this.cdr.markForCheck();
    //})
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  handleEmployeeRemove(id: number) {
    this.employeeDataService.removeEmployee(id);
    this.recieveEmployeeList = this.employeeDataService.returnList();
  }

  handleEmployeeUpdate(id: number) {
    const employee = this.employeeDataService.findEmployee(id);
    if (employee) {
      this.employeeSelectedForEdit.emit(employee);
    }
  }
  
  onSearch() {
    this.recieveEmployeeList = this.employeeDataService.returnList();
  }

  onFilterChange(filter: string[]) {
    this.employeeDataService.filterEmployee(filter);
    this.recieveEmployeeList = this.employeeDataService.returnList();
  }

  ngOnDestroy(): void {
    //this.employeeSub.unsubscribe();
  }
  
}