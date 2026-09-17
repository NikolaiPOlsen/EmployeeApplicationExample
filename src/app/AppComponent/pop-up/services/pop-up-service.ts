import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopUpInterface } from './pop-up-interface';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {

  private popUpState$ = new BehaviorSubject<PopUpInterface>({
    visible: false,
    title: '',
    message: ''
  });

  getPopUp() {
    return this.popUpState$.asObservable();
  }

  isOpen(title: string, message: string) {
    this.popUpState$.next({
      visible: true,
      title,
      message,
    });
  }

  isClosed() {
    this.popUpState$.next({
      visible: false,
      title: '',
      message: '',
    });
  }
}
