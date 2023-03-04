import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeniusResponse } from '../../../domain/genius/genius-response';
import { getCorrespondentColor } from '../../../enumeration/genius-square';

@Component({
  selector: 'app-genius-modal',
  templateUrl: './genius-modal.component.html',
  styleUrls: ['./genius-modal.component.css']
})
export class GeniusModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GeniusResponse
  ) {}

  getCorrespondentColor(color: string): string {
    return getCorrespondentColor(color);
  }
}
