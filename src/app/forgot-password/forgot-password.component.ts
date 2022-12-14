import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  logo = 'assets/images/logo.png';
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}
