import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WarnMessageComponent } from './warn-message/warn-message.component';
import { ErrorMessageComponent } from './error-message/error-message.component';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    WarnMessageComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
