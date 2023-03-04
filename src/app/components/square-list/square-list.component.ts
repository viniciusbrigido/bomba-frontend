import { Component, Input } from '@angular/core';
import { getCorrespondentColor } from '../../enumeration/genius-square';

@Component({
  selector: 'app-square-list',
  templateUrl: './square-list.component.html',
  styleUrls: ['./square-list.component.css']
})
export class SquareListComponent {

  @Input()
  colors: string[] = [];

  getCorrespondentBackgroundColor(color: string): string {
    return getCorrespondentColor(color);
  }
}
