import { Component } from '@angular/core';
import { WhosOnFirstService } from '../../service/whos-on-first.service';
import { WhosOnFirst } from '../../domain/whos_on_first/whos-on-first';
import { WhosOnFirstResponse } from '../../domain/whos_on_first/whos-on-first-response';
import { MessageModalComponent } from '../../components/modal/message-modal/message-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-whos-on-first',
  templateUrl: './whos-on-first.component.html',
  styleUrls: ['./whos-on-first.component.css']
})
export class WhosOnFirstComponent {

  display = '';
  step = 0;
  word1 = '';
  word2 = '';
  word3 = '';
  word4 = '';
  word5 = '';
  word6 = '';

  constructor(
    private whosOnFirstService: WhosOnFirstService,
    private dialog: MatDialog
  ) {}

  resolve() {
    const words: string[] = [this.word1, this.word2, this.word3, this.word4, this.word5, this.word6];
    const whosOnFirst: WhosOnFirst = {
      display: this.display,
      step: this.step,
      words
    }

    this.whosOnFirstService.resolve(whosOnFirst).subscribe((value: WhosOnFirstResponse) => {
      this.dialog.open(MessageModalComponent, { data: { message: value.message } });
    });
  }
}
