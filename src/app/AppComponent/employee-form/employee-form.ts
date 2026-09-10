import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeDataService } from '../../employee.data.service';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { EmployeeData } from '../../employee-data';
import { Button } from "../button/button";
import { Subscription } from 'rxjs';




@Component({
  imports: [FormsModule, Button, ReactiveFormsModule],
  selector: 'app-employee-form',
  styleUrl: './employee-form.scss',
  templateUrl: './employee-form.html',
})
export class EmployeeForm implements OnInit{
  private employeeSub!: Subscription;

  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    status: new FormControl('Active'),
  }); 

  employee: EmployeeData = {
    id: 0,
    name: '',
    email: '',
    role: '',
    department: '',
    status: 'Active',
  };

  @Output() getEmployeeList = new EventEmitter();
  buttonName = "Submit";

  constructor(
    public employeeDataService: EmployeeDataService) {}

  onSubmit() {
    this.employeeDataService.addEmployee(this.employee);

    this.employee = {
      id: 0,
      name: '',
      email: '',
      role: '',
      department: '',
      status: 'Active',
    };
    const employeeList = this.employeeDataService.getEmployeeListData()
    const list = this.employeeDataService.returnList();
    this.getEmployeeList.emit(list);

  }
  
  handleButtonEvent() {
    this.onSubmit();
  }

  updateFormWithEmployeeData() {
    this.employee = {
      id: this.employee.id,
      name: this.employee.name,
      email: this.employee.email,
      role: this.employee.role,
      department: this.employee.department,
      status: this.employee.status
    }
    this.employeeForm.patchValue(
      {
        name: this.employee.name,
        email: this.employee.email,
        role: this.employee.role,
        department: this.employee.department,
        status: this.employee.status,
      }
    )
  }

  ngOnInit(): void {
    //this.employeeSub = this.employeeDataService.getEmployeeUpdateData().subscribe((selectedEmployee: EmployeeData | null) => {
    //});
  }
}
