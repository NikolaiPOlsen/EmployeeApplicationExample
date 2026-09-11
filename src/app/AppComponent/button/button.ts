import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  @Input() buttonText: string = 'Hello';
  @Input() bgColor: string = 'var(--color-nav)';
  @Input() colorText: string = 'var(--color-nav-text)';
  @Input() buttonState: boolean = false;

  @Output()
    buttonPressed = new EventEmitter();

    handleClick() {
        this.buttonPressed.emit();
        console.log("Button clicked")
    }
}