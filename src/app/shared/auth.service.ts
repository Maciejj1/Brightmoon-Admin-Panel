import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { signOut } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}
  redirectUrl: string;
  isLoggedIn = false;
  //login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');

        if (res.user?.emailVerified == true) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['/verify-email']);
        }
      },
      (err) => {
        alert('Coś poszło nie tak');
        this.router.navigate(['login']);
      }
    );
    return of(true).pipe(
      delay(1000),
      tap((val) => (this.isLoggedIn = true))
    );
  }
  // register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        alert('Udało się zarejestrować');
        this.sendEmailForVerification(res.user);
        this.router.navigate(['/login']);
      },
      (err) => {
        alert('Problemy z rejestracją');
        this.router.navigate(['/register']);
      }
    );
  }
  //sign out
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      },
      (err) => {
        alert('Coś poszło nie tak');
      }
    );
    this.isLoggedIn = false;
  }
  //forgot password
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(
      () => {
        this.router.navigate(['/verify-email']);
      },
      (err) => {
        alert('Something wrong');
      }
    );
  }
  //email verification
  sendEmailForVerification(user: any) {
    user.sendEmailVerification().then(
      (res: any) => {
        this.router.navigate(['/verify-email']);
      },
      (err: any) => {
        alert('Something is wrong');
      }
    );
  }
}
