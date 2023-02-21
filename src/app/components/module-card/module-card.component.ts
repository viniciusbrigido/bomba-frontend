import { Component, Input } from '@angular/core';
import { ModuleItem } from '../../enumeration/module-list';

@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.css']
})
export class ModuleCardComponent {
  @Input()
  itemModule!: ModuleItem;
}
