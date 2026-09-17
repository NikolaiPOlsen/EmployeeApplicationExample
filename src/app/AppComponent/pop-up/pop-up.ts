import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Button } from '../button/button';
import { PopUpService } from './services/pop-up-service';

@Component({
  selector: 'app-pop-up',
  imports: [Button, AsyncPipe],
  templateUrl: './pop-up.html',
  styleUrl: './pop-up.scss',
})
export class PopUp {

  popUp$: ReturnType<PopUpService['getPopUp']>;

  constructor(private popUpService: PopUpService) {
    this.popUp$ = this.popUpService.getPopUp();
  }

  isClosed() {
    this.popUpService.isClosed();
  }
}
