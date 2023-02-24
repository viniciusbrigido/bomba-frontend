import { Component } from '@angular/core';
import { WireService } from '../../service/wire.service';
import { Thread } from '../../domain/wire/thread';
import { MatTableDataSource } from '@angular/material/table';
import { colorList } from '../../enumeration/color';
import { WireResponse } from '../../domain/wire/wire-response';
import { Wire } from '../../domain/wire/wire';
import { MatDialog } from '@angular/material/dialog';
import { MessageModalComponent } from '../../components/modal/message-modal/message-modal.component';

@Component({
  selector: 'app-wire',
  templateUrl: './wire.component.html',
  styleUrls: ['./wire.component.css']
})
export class WireComponent {

  displayedColumns = ['color', 'delete'];
  colors = colorList;
  serial = '';
  color = '';

  threads = new MatTableDataSource<Thread>;

  constructor(
    private wireService: WireService,
    private dialog: MatDialog
  ) {}

  resolve() {

    const wire: Wire = {
      serial: this.serial,
      wiring: this.threads.data
    }
    console.log('wire', wire);
    this.wireService.resolve(wire).subscribe((value: WireResponse) => {
      this.dialog.open(MessageModalComponent, { data: { message: value.message }});
    });
    // this.clearForm();
  }

  addThread() {
    if (this.color) {
      this.threads.data.push({ position: 1, color: this.color });
      this.threads._updateChangeSubscription();

      this.color = '';
    }
  }

  removeThread(row: any): void {
    const index = this.threads.data.indexOf(row);
    if (index >= 0) {
      this.threads.data.splice(index, 1);
      this.threads._updateChangeSubscription();
    }
  }

  private clearForm() {
    this.threads.data = [];
    this.threads._updateChangeSubscription();
    this.serial = '';
  }
}
