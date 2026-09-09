import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  @Input() 
    buttonText: string = 'Hello';

  @Output()
    buttonPressed = new EventEmitter();
    handleClick() {
      this.buttonPressed.emit();
      console.log("Button clicked")
    }
}