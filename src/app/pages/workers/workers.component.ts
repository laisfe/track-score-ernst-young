import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/app/shared/globals';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  constructor(
    public globalVariable: GlobalVariable
  ) { }

  ngOnInit(): void {
  }

  teste(workerName: string): void {
    this.globalVariable.workerNameGlobal = workerName;
  }

}
