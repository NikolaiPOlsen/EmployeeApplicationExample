import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-icon-button',
  styleUrl: './icon-button.scss',
  templateUrl: './icon-button.html',
})
export class IconButton {
  @Input() icon: string = 'icon';
  @Input() bgColor: string = 'var(--color-nav)';
  @Input() colorText: string = 'var(--color-nav-text)';
  @Input() buttonState: boolean = false;

  @Output()
    buttonPressed = new EventEmitter();

    handleClick() {
      console.log(this.buttonState)
        this.buttonPressed.emit();
        console.log("Button clicked")
    }
}