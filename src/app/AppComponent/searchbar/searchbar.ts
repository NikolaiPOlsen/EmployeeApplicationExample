import { Component } from '@angular/core';
import { Button } from '../button/button';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.scss',
})
export class Searchbar {
  searchForm = new FormGroup ({
    search: new FormControl
  });
  

}
