import {Component, TemplateRef} from '@angular/core';

import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maximilian\'s 1st exercise, components, module, template written manually!';

  stringBinding  = 'string binding';
  propertyBinding  = 'property binding';

  public modalRef: BsModalRef;
  updatedByClick: string = '';

  btnClickedTimes: number = 0;

  userName = '';

  useEventTargetValue = '';
  twoWayBinding = 'Please input some text.';

  // Angular Injection
  constructor(private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onClick() {
    this.btnClickedTimes++;
    this.updatedByClick = 'button is clicked: ' + this.btnClickedTimes;
  }

  onInput(event: Event) {
    this.useEventTargetValue = (<HTMLInputElement>event.target).value;
  }

  onClearUserName() {
    this.userName = '';
  }
}
