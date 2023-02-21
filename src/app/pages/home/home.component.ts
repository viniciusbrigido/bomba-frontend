import { Component } from '@angular/core';
import { moduleList } from '../../enumeration/module-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  modules = moduleList;

}
