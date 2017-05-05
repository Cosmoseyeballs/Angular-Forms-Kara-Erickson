import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form-component/form-component.component';
import { TempFormComponent,PasswordMatcher } from './temp-form/temp-form.component';
import { SwitchControlComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TempFormComponent,
    PasswordMatcher,
    SwitchControlComponent
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
