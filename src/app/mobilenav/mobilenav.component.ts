import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss'],
})
export class MobilenavComponent {
  closeicon = 'assets/images/close.png';
  burger = 'assets/images/burger.png';
  user = 'assets/images/user-avatar.png';
  logo = 'assets/images/logo.png';
  burgerShow = true;
  close() {
    this.burgerShow = true;
    console.log('trybi');
  }
  open() {
    this.burgerShow = false;
    console.log('dziala');
  }
}
