import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-logs',
  templateUrl: './click-logs.component.html',
  styleUrls: ['./click-logs.component.css']
})
export class ClickLogsComponent implements OnInit {
  public static i = 0;

  public clicks = 0;

  @Input('clickCnt')
  public clickCnt: number;

  log = '';

  public constructor() {
  }

  bgColor(): string {
    // return this.clickCnt >= 5 ? 'blue' : 'white';
    // return ClickLogsComponent.i >= 5 ? 'blue' : 'white';
    return this.clicks >= 5 ? 'blue' : 'white';
  }

  showMoreThanFiveClass(): boolean {
    // return this.clickCnt >= 5;
    // return ClickLogsComponent.i >= 5;
    return this.clicks >= 5;
  }

  public ngOnInit() {
    this.log = new Date().toString();
  }

  setClicks(clickCnt: number) {
    this.clicks = this.clickCnt;
  }
}
