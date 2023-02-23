import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ButtonResponse } from '../../domain/button/button-response';
import { colorList } from '../../enumeration/color';
import { ButtonService } from '../../service/button.service';
import { ButtonResponseSecondStep } from '../../domain/button/button-response-second-step';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-button-modal',
  templateUrl: './button-modal.component.html',
  styleUrls: ['./button-modal.component.css']
})
export class ButtonModalComponent {

  ledColor = '';
  colors = colorList;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ButtonResponse,
    private buttonService: ButtonService,
    private dialog: MatDialog
  ) {}

  resolveSecondStep() {
    const data: ButtonResponseSecondStep = {
      id: this.data.id,
      ledColor: this.ledColor
    }
    this.buttonService.resolveSecondStep(data).subscribe((value: ButtonResponse) => {
      const dialog = this.dialog.open(MessageModalComponent, {
        data: { message: value.message }
      });

      dialog.afterClosed().subscribe(() => {
        this.dialog.closeAll();
      });
    });
  }
}
