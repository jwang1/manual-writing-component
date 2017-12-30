import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  styleClass = '';

  backgroundColor(type: string): string {
    if (type.toString() === 'WarnMessageComponent') {
      this.styleClass = 'warn';
      return 'yellow';
    } else if (type.toString() === 'ErrorMessageComponent') {
      this.styleClass = 'error';
      return 'red';
    } else {
      return 'unknown';
    }
  }
}
