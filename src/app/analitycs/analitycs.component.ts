import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analitycs',
  templateUrl: './analitycs.component.html',
  styleUrls: ['./analitycs.component.scss'],
})
export class AnalitycsComponent implements OnInit {
  sales = 'assets/images/sales-icon.png';
  expanses = 'assets/images/expanses-icon.png';
  income = 'assets/images/income-icon.png';
  constructor() {}

  ngOnInit(): void {}
}
