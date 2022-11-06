import { Component, OnInit } from '@angular/core';
import 'src/styles.scss';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    this.auth.isLoggedIn = false;
  }
}
