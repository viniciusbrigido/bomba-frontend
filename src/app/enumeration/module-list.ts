export class ModuleItem {
  constructor(
    public title: string,
    public description: string,
    public route: string,
    public img: string,
  ) {}
}

export const moduleList = [
  new ModuleItem(
    'Fio',
    'fio',
    '/fio',
    'assets/images/module/wire_module.png'
  ),
  new ModuleItem(
    'Botão',
    'home',
    '/button',
    'assets/images/module/button_module.png'
  ),
  new ModuleItem(
    'Keypads',
    'keypads',
    '/keypads',
    'assets/images/module/keypads_module.png'
  ),
  new ModuleItem(
    'Simon Says',
    'Simon Says',
    '/simon_says',
    'assets/images/module/simon_says_module.png'
  ),
  new ModuleItem(
    'Who’s on First',
    'Who’s on First',
    '/whos_on_first',
    'assets/images/module/whos_on_first_module.png'
  ),
  new ModuleItem(
    'Memory',
    'Memory',
    '/memory',
    'assets/images/module/memory_module.png'
  ),
  new ModuleItem(
    'Código Morse',
    'morse_code_module',
    '/morse_code',
    'assets/images/module/morse_code_module.png'
  ),
  new ModuleItem(
    'Fios Complicados',
    'fio',
    '/fio',
    'assets/images/module/complicated_wire_module.png'
  ),
  new ModuleItem(
    'Sequencia de Fios',
    'Sequencia de Fios',
    '/wire_sequence',
    'assets/images/module/wire_sequence_module.png'
  ),
  new ModuleItem(
    'Labirinto',
    'Labirinto',
    '/maze',
    'assets/images/module/maze_module.png'
  ),
  new ModuleItem(
    'Senhas',
    'Senhas',
    '/password',
    'assets/images/module/password_module.png'
  ),
];
