import { NgModule } from '@angular/core'
import { EmployeeCard } from '../../app-components/employee-card/employee-card';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { EmployeeForm } from '../../app-components/employee-form/employee-form';
import { EmployeeList } from '../../app-components/employee-list/employee-list';
import { CommonModule } from '@angular/common';
import { Searchbar } from '../../app-components/searchbar/searchbar';
import { SearchFilter } from '../../app-components/search-filter/search-filter';
import { EmployeePage } from './employee-page';
import { ButtonsModule } from '../../app-components/buttons/buttons.module';

@NgModule({
    declarations: [EmployeeCard, EmployeeForm, EmployeeList, Searchbar, SearchFilter, EmployeePage], //Components, pipes and directives
    imports: [ReactiveFormsModule, CommonModule, ButtonsModule,], //imports built-inn lib
    providers: [], //services
    exports: [], //export
})

export class EmployeePageModule {

}