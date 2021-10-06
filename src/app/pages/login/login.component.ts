import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  signIn(): void {
    this.authenticationService.SignIn(this.email, this.password);
  }

  goToSignUpPage(): void {
    this.router.navigate(['/signup']);
  }
}
