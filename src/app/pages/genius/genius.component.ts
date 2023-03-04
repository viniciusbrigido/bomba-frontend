import { Component } from '@angular/core';
import { GeniusResponse } from '../../domain/genius/genius-response';
import { GeniusService } from '../../service/genius.service';
import { Genius } from '../../domain/genius/genius';
import { MatDialog } from '@angular/material/dialog';
import { GeniusModalComponent } from '../../components/modal/genius-modal/genius-modal.component';
import { getCorrespondentColor } from '../../enumeration/genius-square';

@Component({
  selector: 'app-genius',
  templateUrl: './genius.component.html',
  styleUrls: ['./genius.component.css']
})
export class GeniusComponent {

  colors: string[] = [];
  countErrors = 0;
  serial = '';

  constructor(
    private geniusService: GeniusService,
    private dialog: MatDialog
  ) {}

  onClickColor(color: string) {
    this.colors.push(color);
  }

  resolve() {
    const genius: Genius = {
      serial: this.serial,
      countErrors: this.countErrors,
      colors: this.colors
    }

    this.geniusService.resolve(genius).subscribe((value: GeniusResponse) => {
      this.dialog.open(GeniusModalComponent, { data: value });
    });
  }

  clearForm() {
    this.colors = [];
    this.countErrors = 0;
    this.serial = '';
  }

  getCorrespondentColor(color: string): string {
    return getCorrespondentColor(color);
  }
}
