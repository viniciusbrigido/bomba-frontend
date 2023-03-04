export class GeniusSquare {
  constructor(
    public color: string,
    public backgroundColor: string
  ) {}
}

export const geniusSquares = [
  new GeniusSquare(
    'VERMELHO',
    'red'
  ),
  new GeniusSquare(
    'VERDE',
    'green'
  ),
  new GeniusSquare(
    'AZUL',
    'blue'
  ),
  new GeniusSquare(
    'AMARELO',
    'yellow'
  ),
]

export function getCorrespondentColor(color: string): string {
  return geniusSquares.filter(geniusSqare =>  geniusSqare.color === color)[0].backgroundColor;
}
