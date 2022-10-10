import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LedbarComponent } from './ledbar/ledbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnalitycsComponent } from './analitycs/analitycs.component';
import { UpdatesComponent } from './updates/updates.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MobilenavComponent } from './mobilenav/mobilenav.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LedbarComponent,
    NavbarComponent,
    AnalitycsComponent,
    UpdatesComponent,
    MobilenavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatSidenavModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
