import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, Output, EventEmitter, Renderer2 } from '@angular/core';
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

  @Output() searchTerm = new EventEmitter();
  @Output() searchUpdate = new EventEmitter();

  @Output() filterToggle = new EventEmitter();

  constructor(
    public employeeDataService: EmployeeDataService) {}
    

  searchForm = new FormGroup ({
    search: new FormControl('', {nonNullable:true})
  });

  handleSearch() {
    const searchValue = this.searchForm.getRawValue()
    console.log(searchValue);

    this.searchTerm.emit(searchValue);

    this.employeeDataService.setSearchTerm(searchValue.search);
    this.searchUpdate.emit("update");
    console.log(searchValue, "emited")

    //this.searchForm.reset();
  }
  handleFilter() {
    console.log("Handle filter");
    this.filterToggle.emit();
  }
  
  ngOnInit(): void {
    //Use this to update the value to retrieve a changing value from form - in this case it's "search value"
    //this.searchForm.get("search")?.valueChanges.subscribe((searchValue) => {console.log(searchValue)});
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnDestroy(): void {

  }

}
