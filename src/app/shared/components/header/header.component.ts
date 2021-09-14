import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showButton: boolean = false;

  constructor(
    // public authenticationService: AuthenticationService
    private router: Router
  ) { }

  logout(): void {
    // this.authenticationService.SignOut();
    this.router.navigate(['/'])
  }
}
