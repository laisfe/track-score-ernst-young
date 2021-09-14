import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/app/shared/globals';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

  workerName: string = '';

  constructor(
    public globalVariable: GlobalVariable
  ) { }

  ngOnInit(): void {
    this.workerName = this.globalVariable.workerNameGlobal;
    this.globalVariable.workerNameGlobal = this.globalVariable.workerNameGlobal.charAt(0).toUpperCase() + this.globalVariable.workerNameGlobal.slice(1);
  }

}
