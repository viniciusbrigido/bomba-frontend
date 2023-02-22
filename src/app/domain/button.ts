import { Led } from './led';

export interface Button {
  id?: string;
  texto: string;
  corBotao: string;
  corLed?: string;
  leds: Led[];
  pilhas: number;
  createdAt?: Date;
}
