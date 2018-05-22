import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertSuccessComponent} from './alerts/success/alert.success.component';
import {AlertWarningComponent} from './alerts/warning/alert.warning.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertSuccessComponent,
    AlertWarningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
