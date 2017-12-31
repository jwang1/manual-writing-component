import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-logs',
  templateUrl: './click-logs.component.html',
  styleUrls: ['./click-logs.component.css']
})
export class ClickLogsComponent implements OnInit {
  // Make a static field to record number of ClickLogsComponent created
  public static nbrClickLogsComponentsCreated = 0;

  // This member data records current ClickLogsComponent object's order
  public nthClickLogsComponent = 0;

  @Input('clickCnt')
  public clickCnt: number;

  log = '';

  public constructor() {
  }

  bgColor(): string {
    return this.nthClickLogsComponent >= 5 ? 'blue' : 'white';
  }

  showMoreThanFiveClass(): boolean {
    return this.nthClickLogsComponent >= 5;
  }

  public ngOnInit() {
    this.log = new Date().toString();
    ClickLogsComponent.nbrClickLogsComponentsCreated++;
    this.nthClickLogsComponent = ClickLogsComponent.nbrClickLogsComponentsCreated;
  }

  setClicks(clickCnt: number) {
    this.nthClickLogsComponent = this.clickCnt;
  }

}
