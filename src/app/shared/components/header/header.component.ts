import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
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
  @Input() idTable: string = '';

  fileName = 'ExcelSheet.xlsx';

  constructor(
    // public authenticationService: AuthenticationService
    private router: Router
  ) {}

  logout(): void {
    // this.authenticationService.SignOut();
    this.router.navigate(['/']);
  }

  export(idTable: string): void {
    let element = document.getElementById(idTable);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }
}
