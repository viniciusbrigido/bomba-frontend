import { Component, Input } from '@angular/core';
import { WhosOnFirstWords } from '../../enumeration/whos-on-first-words';

@Component({
  selector: 'app-whos-on-first-list',
  templateUrl: './whos-on-first-list.component.html',
  styleUrls: ['./whos-on-first-list.component.css']
})
export class WhosOnFirstListComponent {
  @Input()
  select!: string;
  words = Object.values(WhosOnFirstWords);
}
