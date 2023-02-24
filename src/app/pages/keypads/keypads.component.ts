import { Component, ViewChildren } from '@angular/core';
import { KeypadImage } from '../../enumeration/keypad-image';
import { KeypadImageComponent } from '../../components/keypad-image/keypad-image.component';
import { KeypadService } from '../../service/keypad.service';
import { KeypadResponse } from '../../domain/keypad/keypad-response';
import { Keypad } from '../../domain/keypad/keypad';
import { MatDialog } from '@angular/material/dialog';
import { KeypadModalComponent } from '../../components/modal/keypad-modal/keypad-modal.component';

@Component({
  selector: 'app-keypads',
  templateUrl: './keypads.component.html',
  styleUrls: ['./keypads.component.css']
})
export class KeypadsComponent {

  constructor(
    private keypadService: KeypadService,
    private dialog: MatDialog
  ) {}

  @ViewChildren(KeypadImageComponent) viewChildren!: Array<KeypadImageComponent>;

  keypads = Object.values(KeypadImage).filter(keypad => !isNaN(Number(keypad)));

  resolve() {
    const selecionados = this.viewChildren
      .filter(keypadComponent => keypadComponent.checked)
      .map(keypadComponent => (Number(keypadComponent.img) - 1));

    const keypad: Keypad = {
      keypads: selecionados
    }
    this.keypadService.resolve(keypad).subscribe((value: KeypadResponse) => {
      this.dialog.open(KeypadModalComponent, { data: value });
    });
    this.clearForm();
  }

  private clearForm() {
    this.viewChildren.forEach(keypadComponent => keypadComponent.checked = false);
  }
}
