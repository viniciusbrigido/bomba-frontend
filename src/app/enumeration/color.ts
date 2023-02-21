export class Color {
  constructor(
    public value: string,
    public name: string,
    public cssBackgroundColor: string,
    public cssColor: string
  ) {}
}

export const colorList = [
  new Color(
    'PRETO',
  'Preto',
    'black',
    'white'
  ),
  new Color(
    'VERMELHO',
  'Vermelho',
    'red',
    'white'
  ),
  new Color(
    'BRANCO',
  'Branco',
    'white',
    'black'
  ),
  new Color(
    'AZUL',
  'Azul',
    'blue',
    'white'
  ),
  new Color(
    'AMARELO',
  'Amarelo',
    'yellow',
    'white'
  ),
  new Color(
    'VERDE',
    'Verde',
    'green',
    'white'
  ),
];

