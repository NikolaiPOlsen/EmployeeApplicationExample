import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class EmployeeForm implements OnInit, OnChanges{
  private employeeSub!: Subscription;

  employeeForm = new FormGroup({
    id: new FormControl(0, {nonNullable:true, validators: [Validators.required]}),
    name: new FormControl('', {nonNullable:true, validators: [Validators.required]}),
    email: new FormControl('', {nonNullable:true, validators: [Validators.required]}),
    role: new FormControl('', {nonNullable:true, validators: [Validators.required]}),
    department: new FormControl('', {nonNullable:true, validators: [Validators.required]}),
    status: new FormControl('Active', {nonNullable:true}),
  }); 

  employee: EmployeeData = {
    id: 0,
    name: '',
    email: '',
    role: '',
    department: '',
    status: 'Active',
  };

  @Input() employeeToEdit!: EmployeeData | null;

  @Output() getEmployeeList = new EventEmitter();
  buttonName = "Submit";

  constructor(
    public employeeDataService: EmployeeDataService) {}



  onSubmit() {
    console.log(this.employeeForm.value)
    console.log(this.employeeForm.valid)
    console.log(this.employeeForm.reset())

    const formValue = this.employeeForm.value
    console.log(formValue.name)
    formValue.id = this.employeeDataService.generateEmployeeId();

    const employee: EmployeeData = {
      id: this.employeeDataService.generateEmployeeId(),
      name: formValue.name,
      email: formValue.email,
      role: formValue.role,
      department: formValue.department,
      status: formValue.status,
    };
    this.employeeDataService.addEmployee(employee);
    const employeeList = this.employeeDataService.getEmployeeListData()
    const list = this.employeeDataService.returnList();
    this.getEmployeeList.emit(list);

  }
  
  handleButtonEvent() {
    this.onSubmit();
  }

  updateFormWithEmployeeData(selectedEmployee: EmployeeData) {
    this.employeeToEdit 
    this.employee = {... selectedEmployee};
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
    this.employeeForm.get("name")?.valueChanges.subscribe((nameValue) => {console.log(nameValue)});
    //this.employeeSub = this.employeeDataService.getEmployeeUpdateData().subscribe((selectedEmployee: EmployeeData | null) => {
    //});
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
