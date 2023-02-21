export class ButttonText {
  constructor(
    public value: string,
    public name: string
  ) {}
}

export const buttonTextList = [
   new ButttonText(
     'ABORTAR',
     'Abortar'
   ),
   new ButttonText(
     'DETONAR',
     'Detonar'
   ),
   new ButttonText(
     'SEGURE',
     'Segure'
   ),
   new ButttonText(
     'APERTE',
     'Aperte'
   ),
];

