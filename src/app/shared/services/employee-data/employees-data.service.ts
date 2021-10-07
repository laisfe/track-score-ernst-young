import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeesData } from '../../models/employees-data';

@Injectable({
  providedIn: 'root',
})
export class EmployeesDataService {
  constructor(private http: HttpClient) {}

  getClassList(uid: string): Observable<EmployeesData> {
    return this.http.get<EmployeesData>(
      `${environment.SERVER_URL}/employees-data/${uid}`
    );
  }
}
