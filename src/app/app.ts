import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './AppComponent/navbar/navbar';
import { PopUp } from './AppComponent/pop-up/pop-up';

@Component({
  imports: [RouterOutlet, Navbar, PopUp],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
