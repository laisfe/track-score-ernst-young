import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  SignUp(email: string, password: string, name: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Successfully signed up!', res);
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.log('Something is wrong:', error.message);
      });
  }

  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Successfully signed in!', res);
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
      });
  }

  SignOut() {
    this.angularFireAuth.signOut();
    this.router.navigate(['/']);
  }
}
