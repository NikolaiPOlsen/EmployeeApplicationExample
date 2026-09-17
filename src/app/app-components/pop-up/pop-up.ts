import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PopUpService } from './services/pop-up-service';
import { ButtonsModule } from '../buttons/modules/buttons.module';

@Component({
  selector: 'app-pop-up',
  imports: [ButtonsModule, AsyncPipe],
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
