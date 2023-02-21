import { Component } from '@angular/core';
import { colorList } from '../../enumeration/color';
import { buttonTextList } from '../../enumeration/buttton-text';
import { Led } from '../../domain/led';
import { Indicator } from "../../enumeration/indicator";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  buttonBackgroundColorImage = 'white';
  buttonColorImage = 'black';
  buttonText = 'Abortar';

  colors = colorList;
  texts = buttonTextList;
  indicators = Object.values(Indicator);
  leds: Led[] = [];

  formLed: FormGroup;
  formButton: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formLed =  this.formBuilder.group({
      indicator: '',
      on: false
    });
    this.formButton =  this.formBuilder.group({
      buttonColor: 'BRANCO',
      buttonText: 'ABORTAR'
    });
  }

  adicionaLed() {
    this.leds.push({indicator: this.formLed.value.indicator, on: this.formLed.value.on})
    this.formLed.reset();
  }

  alteraCorBotao(changeColor: any) {
    if (!changeColor) {
      this.buttonBackgroundColorImage = '';
      this.buttonColorImage = '';
      return;
    }
    const corFilter = this.colors.filter(item => item.value === changeColor);

    if (!corFilter) {
      this.buttonBackgroundColorImage = '';
      this.buttonColorImage = '';
      return;
    }

    const color = corFilter[0];

    this.buttonBackgroundColorImage = color.cssBackgroundColor;
    this.buttonColorImage = color.cssColor;
  }

  alteraTextoBotao(changeText: any) {
    if (!changeText) {
      this.buttonText = '';
      return;
    }
    this.buttonText = changeText;
  }
}
