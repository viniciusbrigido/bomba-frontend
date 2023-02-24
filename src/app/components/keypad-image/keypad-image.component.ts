import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keypad-image',
  templateUrl: './keypad-image.component.html',
  styleUrls: ['./keypad-image.component.css']
})
export class KeypadImageComponent {

  @Input()
  img!: string;
  checked = false;

  check() {
    this.checked = !this.checked;
  }
  get imagem() {
    return `assets/images/keypad/${this.img}.jpg`;
  }
}
