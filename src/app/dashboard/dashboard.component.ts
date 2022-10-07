import { Component, OnInit } from '@angular/core';
import {Text} from "../Database/text";
import {NavBarTexts} from "../Database/texts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
dashboardtexts : Text[] = NavBarTexts;
}
