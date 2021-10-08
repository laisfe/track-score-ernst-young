import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { GlobalVariable } from 'src/app/shared/globals';
import { WorkerService } from './worker.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerComponent implements OnInit {
  workerName: string = '';
  workerFunction: string = '';
  workerActualLead: string = '';
  workerCompanyTime: string = '';
  workerHotSkills: [] = [];
  workerSalary: number = 0;
  availableBudget: number = 0;
  increaseValue: number = 0;

  constructor(
    public globalVariable: GlobalVariable,
    private workerService: WorkerService
  ) {}

  ngOnInit(): void {
    this.workerName = this.globalVariable.workerNameGlobal;
    this.workerFunction = this.globalVariable.workerFunction;
    this.workerActualLead = this.globalVariable.workerActualLead;
    this.workerCompanyTime = this.globalVariable.workerCompanyTime;
    this.workerHotSkills = this.globalVariable.workerHotSkills;
    this.workerSalary = this.globalVariable.workerSalary;
    this.availableBudget = this.globalVariable.availableBudget;
  }

  alterBudget(): void {
    this.workerService
      .getBudget()
      .pipe(finalize(() => {}))
      .subscribe(
        (newBudget: { available_budget: number }) => {
          console.log('newBudget', newBudget);
          this.availableBudget = newBudget.available_budget;
        },
        (error) => {
          console.log('error', error);
        }
      );
  }
}
