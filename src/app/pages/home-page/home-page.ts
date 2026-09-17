import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonsModule } from '../../app-components/buttons/modules/buttons.module';

@Component({
  imports: [ButtonsModule, RouterLink],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {}
