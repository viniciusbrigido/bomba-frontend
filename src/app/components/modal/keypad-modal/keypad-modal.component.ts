import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KeypadResponse } from '../../../domain/keypad/keypad-response';

@Component({
  selector: 'app-keypad-modal',
  templateUrl: './keypad-modal.component.html',
  styleUrls: ['./keypad-modal.component.css']
})
export class KeypadModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: KeypadResponse
  ) {}

  imgPath(img: string) {
    return `assets/images/keypad/${img}.jpg`;
  }
}
