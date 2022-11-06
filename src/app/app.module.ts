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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ClientsComponent } from './clients/clients.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AddclientComponent } from './addclient/addclient.component';
import { SettingsComponent } from './settings/settings.component';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LedbarComponent,
    NavbarComponent,
    AnalitycsComponent,
    UpdatesComponent,
    MobilenavComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AddproductComponent,
    ClientsComponent,
    PromotionsComponent,
    AddclientComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    HighchartsChartModule,
    MatSidenavModule,
    MatButtonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
