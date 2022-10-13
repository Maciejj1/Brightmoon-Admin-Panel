import { Component, OnInit } from '@angular/core';
import { Text } from '../Database/text';
import { NavBarTexts } from '../Database/texts';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  logo = 'assets/images/logo.png';
  analitycs = 'assets/images/navbar-icons/analitycs.png';
  settings = 'assets/images/navbar-icons/settings.png';
  user = 'assets/images/navbar-icons/user.png';
  products = 'assets/images/navbar-icons/Frame3.png';
  dashboard = 'assets/images/navbar-icons/Frame.png';
  constructor() {}

  ngOnInit(): void {}
  navbartexts: Text[] = NavBarTexts;
}
