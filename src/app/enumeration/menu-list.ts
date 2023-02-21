export class MenuItem {
  constructor(
    public name: string,
    public route: string,
    public url = '',
  ) {}
}

export const menuList = [
  new MenuItem(
    'Modulos',
    'home'
  ),
  new MenuItem(
    'Sobre',
    'about'
  ),
  new MenuItem(
    'Manual',
    '',
    'https://www.bombmanual.com/'
  ),
  new MenuItem(
    'Serviços',
    'home'
  )
];
