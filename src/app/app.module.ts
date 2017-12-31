import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WarnMessageComponent } from './warn-message/warn-message.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { MessagesComponent } from './messages/messages.component';
import { PracticeDirectivesComponent } from './practice-directives/practice-directives.component';
import { ClickLogsComponent } from './practice-directives/click-logs/click-logs.component';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    WarnMessageComponent,
    ErrorMessageComponent,
    MessagesComponent,
    PracticeDirectivesComponent,
    ClickLogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // own module defined to contain/manage ngx-bootstrap
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
