import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LedbarComponent } from './ledbar/ledbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BurgerbarComponent } from './burgerbar/burgerbar.component';
import { AnalitycsComponent } from './analitycs/analitycs.component';
import { UpdatesComponent } from './updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LedbarComponent,
    NavbarComponent,
    BurgerbarComponent,
    AnalitycsComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
