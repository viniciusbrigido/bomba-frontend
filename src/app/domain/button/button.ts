import { Led } from '../led';

export interface Button {
  id?: string;
  text: string;
  buttonColor: string;
  ledColor?: string;
  leds: Led[];
  batteries: number;
  createdAt?: Date;
}
