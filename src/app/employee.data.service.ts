import { Injectable, Input } from '@angular/core';
import { EmployeeData } from './employee-data';
import { employees as mock_employees } from './employee.model';
import { BehaviorSubject, map } from 'rxjs';

@Injectable (
    {providedIn: 'root'}
)
    export class EmployeeDataService {
    abc: string = "hello";
    public employeeList = mock_employees;
    private searchTerm: string = '';
    private employeesListSubject = new BehaviorSubject<EmployeeData[]>(mock_employees);

    getEmployeeListData() {
        return this.employeesListSubject.asObservable();
    }

    generateEmployeeId(): number {
        const currentIds = this.employeesListSubject.value; 
        const idList = currentIds.map(employee => employee.id);
        let highestStartingId = Math.max(...idList);

        const newId = ++highestStartingId;

        return newId;
    }

    addEmployee(employee: EmployeeData) {
        //const currentList = this.employeesListSubject.value;
        //console.log('Before:', currentList.length)

        //Gets the previous highest id in the array and plusses with 1 each time


        //const updatedList = [...currentList, employee]; 
        //console.log('After: ', updatedList.length)

        this.employeeList.push(employee);

        //this.employeesListSubject.next(updatedList);
    }

    setSearchTerm(searchValue: string) {
        this.searchTerm = searchValue;
    }

    returnList() {
        const list = this.employeeList
        const updatedList = list.filter(employee => employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        return updatedList;
    }

    removeEmployee (id: number) {
        //const currentList = this.employeesListSubject.value;

        //const updatedList = currentList.filter(employee => employee.id !== id)

        //this.employeesListSubject.next(updatedList)

        const updatedList = this.employeeList.filter(employee => employee.id !== id)
        this.employeeList = updatedList
        console.log(this.employeeList)
    }
    findEmployee(id: number) {
        
        //const currentList = this.employeesListSubject.value;

        const currentEmployee = this.employeeList.find(employee => employee.id === id);
        console.log(currentEmployee);
        return currentEmployee;

        //this.employeeUpdateSubject.next(currentEmployee ?? null)
    }
    updateEmployee(updated: EmployeeData) {
        const index = this.employeeList.findIndex(employee => employee.id === updated.id)
        if (index === -1) {
        throw Error("Id not found or invalid!")
        }
        else {
            this.employeeList[index] = updated;
            return updated;
        }
    }
}
