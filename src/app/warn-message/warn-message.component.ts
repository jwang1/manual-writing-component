import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-warn-message',
  templateUrl: './warn-message.component.html',
  styleUrls: ['./warn-message.component.css']
})
export class WarnMessageComponent implements OnInit {

  style: string;

  constructor() {
  }

  ngOnInit() {
    this.style = 'warn';
  }

}
