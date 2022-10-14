import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  logo = 'assets/images/logo.png';
  constructor(private route: Router) {}
  goToLogin() {
    this.route.navigate(['/login']);
  }
  ngOnInit(): void {}
}
