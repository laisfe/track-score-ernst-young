import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  constructor(private http: HttpClient) {}

  getBudget(): Observable<{available_budget: number}> {
    return this.http.get<{available_budget: number}>(`${environment.SERVER_URL}/budget`);
  }
}
