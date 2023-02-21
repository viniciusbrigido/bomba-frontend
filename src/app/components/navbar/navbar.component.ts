import { Component } from '@angular/core';
import { menuList } from '../../enumeration/menu-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  urlPhoto = "assets/images/keep_talking_logo_menu.png";
  sideMenu = menuList;

  redireciona(url: string) {
    if (url) {
      window.location.href = url;
    }
  }
}
