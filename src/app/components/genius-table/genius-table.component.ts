import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-genius-table',
  templateUrl: './genius-table.component.html',
  styleUrls: ['./genius-table.component.css']
})
export class GeniusTableComponent {

  @Output() colorEmitter: EventEmitter<string> = new EventEmitter<string>();

  onClickColor(color: string) {
    this.colorEmitter.emit(color);
  }
}
