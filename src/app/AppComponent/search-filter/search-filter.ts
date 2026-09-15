import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Button } from '../button/button';

@Component({
  selector: 'app-search-filter',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.scss',
})
export class SearchFilter {

  @Output() filterChange = new EventEmitter<string[]>();

  filterForm = new FormGroup({
    Active: new FormControl(false, { nonNullable: true }),
    Inactive: new FormControl(false, { nonNullable: true }),
    'On Leave': new FormControl(false, { nonNullable: true }),
  });

  filterList() {
    const value = this.filterForm.getRawValue();
    const checked = Object.entries(value)
      .filter(([, isChecked]) => isChecked)
      .map(([key]) => key);

      this.filterChange.emit(checked);
      console.log(checked);
  }
}
