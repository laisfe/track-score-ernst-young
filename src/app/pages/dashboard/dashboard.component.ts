import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesDataService } from 'src/app/shared/services/employee-data/employees-data.service';
import { finalize } from 'rxjs/operators';
import {
  EmployeesData,
  EmployeesList,
} from 'src/app/shared/models/employees-data';
import firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  loading: boolean = true;
  employeesData: EmployeesData = {
    email: '',
    uid: '',
    name: '',
    available_budget: 0,
    employees: [],
  };
  userUid: string = '';
  employeesList: EmployeesList[] = [];

  constructor(
    private router: Router,
    private employeesDataService: EmployeesDataService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    if (firebase.apps.length === 0) {
      firebase.initializeApp(environment.firebase);
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userUid = user.uid;
        this.employeesDataService
          .getClassList(this.userUid)
          .pipe(
            finalize(() => {
              this.loading = false;
            })
          )
          .subscribe(
            (employees: EmployeesData) => {
              this.employeesData = employees;
              this.employeesList = employees.employees;
            },
            (error) => {
              console.log('error', error);
            }
          );
      }
    });
  }

  goToWorkersPage(): void {
    this.router.navigate(['/workers']);
  }
}
