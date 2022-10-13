import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss'],
})
export class UpdatesComponent implements OnInit {
  customer = 'assets/images/customer-picture.png';
  constructor() {}

  ngOnInit(): void {}
}
