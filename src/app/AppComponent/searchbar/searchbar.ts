import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { IconButton } from '../icon-button/icon-button';
import { EmployeeDataService } from '../../employee.data.service';

@Component({
  selector: 'app-searchbar',
  imports: [IconButton, ReactiveFormsModule],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.scss',
})
export class Searchbar implements OnInit, OnChanges, OnDestroy {

  constructor(
    public employeeDataService: EmployeeDataService) {}

  searchForm = new FormGroup ({
    search: new FormControl('')
  });

  handleSearch() {
    const search = this.searchForm.getRawValue()
    //this.employeeDataService.returnList()
    

  }
  
  ngOnInit(): void {
    //Use this to update the value to retrieve a changing value from form - in this case it's "search value"
    this.searchForm.get("search")?.valueChanges.subscribe((searchValue) => {console.log(searchValue)});
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnDestroy(): void {

  }

}
