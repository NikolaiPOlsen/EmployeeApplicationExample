import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './app-components/navbar/navbar';
import { PopUp } from './app-components/pop-up/pop-up';
import { EmployeePageModule } from './pages/employee-page/employee-page.module';

@Component({
  imports: [RouterOutlet, Navbar, PopUp, EmployeePageModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
