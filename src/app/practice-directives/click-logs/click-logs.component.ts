import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-click-logs',
  templateUrl: './click-logs.component.html',
  styleUrls: ['./click-logs.component.css']
})
export class ClickLogsComponent {
  @Input('clickCnt') public clickCnt: number;
  @Input('log') public log: string;

  public constructor() {
  }

  bgColor(): string {
    return this.clickCnt >= 5 ? 'blue' : 'white';
  }

  showMoreThanFiveClass(): boolean {
    return this.clickCnt >= 5;
  }

}
