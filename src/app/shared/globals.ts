import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariable {
  public workerNameGlobal: string = '';
  public workerFunction: string = '';
  public workerActualLead: string = '';
  public workerCompanyTime: string = '';
  public workerHotSkills: [] = [];
  public workerSalary: number = 0;
  public availableBudget: number = 0;
}
