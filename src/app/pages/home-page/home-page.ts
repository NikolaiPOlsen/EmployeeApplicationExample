import { Component } from '@angular/core';
import { Button } from "../../app-components/button/button";
import { RouterLink } from '@angular/router';

@Component({
  imports: [Button, RouterLink],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {}
