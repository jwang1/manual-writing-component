import { Component } from '@angular/core';
import {ClickLogsComponent} from './click-logs/click-logs.component';

@Component({
  selector: 'app-practice-directives',
  templateUrl: './practice-directives.component.html',
  styleUrls: ['./practice-directives.component.css']
})
export class PracticeDirectivesComponent {
  clickCnt = 0;
  isDisplay = false;

  logs: ClickLogsComponent[] = [];

  toggleSecret(): void {
    this.clickCnt++;

    const lg = new ClickLogsComponent();
    this.logs.push(lg);

    this.isDisplay = this.clickCnt % 2 === 1;
  }

}
