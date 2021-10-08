import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/app/shared/globals';
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
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
})
export class WorkersComponent implements OnInit {
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
    public globalVariable: GlobalVariable,
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

  values(employees: EmployeesList, availableBudget: number): void {
    this.globalVariable.workerNameGlobal = employees.nome;
    this.globalVariable.workerFunction = employees.cargo;
    this.globalVariable.workerActualLead = employees.actual_lead;
    this.globalVariable.workerCompanyTime = employees.company_time;
    this.globalVariable.workerHotSkills = employees.hot_skills;
    this.globalVariable.workerSalary = employees.salary;
    this.globalVariable.availableBudget = availableBudget;
  }
}
