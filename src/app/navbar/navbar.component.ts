import { Component, OnInit } from '@angular/core';
import {Text} from "../Database/text";
import {NavBarTexts} from "../Database/texts";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
navbartexts: Text[] = NavBarTexts;
}
