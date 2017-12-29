import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WarnMessageComponent } from './warn-message/warn-message.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { MessagesComponent } from './messages/messages.component';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    WarnMessageComponent,
    ErrorMessageComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
