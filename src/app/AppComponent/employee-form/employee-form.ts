import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EmployeeDataService } from '../../employee.data.service';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { EmployeeData } from '../../employee-data';
import { Button } from "../button/button";

@Component({
  imports: [Button, ReactiveFormsModule],
  selector: 'app-employee-form',
  styleUrl: './employee-form.scss',
  templateUrl: './employee-form.html',
})
export class EmployeeForm implements OnInit, OnChanges{
  updateButtonEnable: boolean = false;
  submitButtonDisable: boolean = false;
  //private employeeSub!: Subscription;

  employeeForm = new FormGroup({
    id: new FormControl(0, {nonNullable:true, validators: [Validators.required]}),
    name: new FormControl('', {nonNullable:true, validators: [Validators.required]}),
    email: new FormControl('', {nonNullable:true, validators: [Validators.required, Validators.email]}),
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
  @Output() cancelled = new EventEmitter<void>();
  //buttonName = "Submit";

  constructor(
    public employeeDataService: EmployeeDataService) {}

  onSubmit() {
      const formValue = this.employeeForm.getRawValue();

      formValue.id = this.employeeDataService.generateEmployeeId();

      this.employeeDataService.addEmployee(formValue);
      const employeeList = this.employeeDataService.getEmployeeListData()
      const list = this.employeeDataService.returnList();
      this.getEmployeeList.emit(list);

      this.employeeForm.reset();
    }
  
  handleButtonEvent() {
    this.onSubmit();
  }

  onCancel() {
    this.employeeForm.reset();
    this.submitButtonDisable = false;
    this.updateButtonEnable = false;
    this.cancelled.emit();
  }

  updateFormWithEmployeeData(selectedEmployee: EmployeeData) {
    this.submitButtonDisable = true;
    this.updateButtonEnable = true;
    
    this.employeeToEdit 
    this.employee = {... selectedEmployee};
    console.log(selectedEmployee)
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

  handleUpdate() {
    const formValue = this.employeeForm.getRawValue();

    formValue.id = this.employee.id

    this.employeeDataService.updateEmployee(formValue);

    const updatedList = this.employeeDataService.returnList();

    this.getEmployeeList.emit(updatedList);
    this.employeeForm.reset();
  }

  ngOnInit(): void {
    //this.employeeForm.get("name")?.valueChanges.subscribe((nameValue) => {console.log(nameValue)});
    //this.employeeSub = this.employeeDataService.getEmployeeUpdateData().subscribe((selectedEmployee: EmployeeData | null) => {
    //});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employeeToEdit'] && this.employeeToEdit) {
    this.updateFormWithEmployeeData(this.employeeToEdit);
    }
  } 
}