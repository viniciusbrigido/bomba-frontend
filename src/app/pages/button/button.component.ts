import { Component } from '@angular/core';
import { colorList } from '../../enumeration/color';
import { buttonTextList } from '../../enumeration/buttton-text';
import { Led } from '../../domain/led';
import { Indicator } from '../../enumeration/indicator';
import { Button } from '../../domain/button';
import { ButtonResponse } from '../../domain/button-response';
import { MatDialog } from '@angular/material/dialog';
import { ButtonModalComponent } from '../../components/button-modal/button-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { ButtonService } from '../../service/button.service';
import { MessageModalComponent } from '../../components/message-modal/message-modal.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  displayedColumns = ['indicator', 'on', 'delete'];

  buttonBackgroundColorImage = 'white';
  buttonColorImage = 'black';
  buttonColor = '';
  buttonText = 'Abortar';
  batteries = 0;
  indicatorName: Indicator | undefined;
  on = false;

  colors = colorList;
  texts = buttonTextList;
  indicators = Object.values(Indicator);
  leds = new MatTableDataSource<Led>;

  constructor(
    private buttonService: ButtonService,
    private dialog: MatDialog
  ) {}

  resolve() {
    const button: Button = {
      text: this.buttonText,
      buttonColor: this.buttonColor,
      leds: this.leds.data,
      batteries: this.batteries
    }
    this.buttonService.resolve(button).subscribe((value: ButtonResponse) => {
      let dialog;
      if (value.nextStep) {
        dialog = this.dialog.open(ButtonModalComponent, { data: value });
      } else {
        dialog = this.dialog.open(MessageModalComponent, { data: { message: value.message }});
      }
      dialog.afterClosed().subscribe(() => {
        this.clearForm();
      })
    });
  }

  private clearForm() {
    this.buttonBackgroundColorImage = 'white';
    this.buttonColorImage = 'black';
    this.buttonColor = '';
    this.buttonText = 'Abortar';
    this.batteries = 0;
    this.indicatorName = undefined;
    this.on = false;
    this.leds.data = [];
    this.leds._updateChangeSubscription();
  }

  addLed() {
    if (this.indicatorName) {
      this.leds.data.push({ indicator: this.indicatorName, on: this.on });
      this.leds._updateChangeSubscription();

      this.indicatorName = undefined;
      this.on = false;
    }
  }

  removeLed(row: any): void {
    const index = this.leds.data.indexOf(row);
    if (index >= 0) {
      this.leds.data.splice(index, 1);
      this.leds._updateChangeSubscription();
    }
  }

  changeButtonColor(changeColor: any) {
    if (!changeColor) {
      this.buttonBackgroundColorImage = '';
      this.buttonColorImage = '';
      return;
    }
    const colorFilter = this.colors.filter(item => item.value === changeColor);

    if (!colorFilter) {
      this.buttonBackgroundColorImage = '';
      this.buttonColorImage = '';
      return;
    }

    const color = colorFilter[0];

    this.buttonBackgroundColorImage = color.cssBackgroundColor;
    this.buttonColorImage = color.cssColor;
  }

  changeButtonText(changeText: any) {
    if (!changeText) {
      this.buttonText = '';
      return;
    }
    this.buttonText = changeText;
  }
}
