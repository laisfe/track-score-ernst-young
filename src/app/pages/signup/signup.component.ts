import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  signUp(): void {
    this.authenticationService.SignUp(this.email, this.password, this.name);
  }

  goToLoginPage(): void {
    this.router.navigate(['/']);
  }
}
